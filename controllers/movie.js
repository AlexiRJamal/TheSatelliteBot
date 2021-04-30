/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /movie requests
 */

const Telegram = require("telegram-node-bot");
const movieModule = require("../exports/movie");
const MovieDB = require("moviedb")(movieModule.getAPI());
const logger = require("../exports/log");
const sharedModule = require("../exports/shared");

class MovieController extends Telegram.TelegramBaseController {
  movieHandler($) {
    let id = parseInt($.message.from.id);
    let userMovie = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    if (!userMovie) {
      this._localization
        .forUser(id)
        .then(phrases => {
          $.sendMessage(phrases.movieRequest);
          $.waitForRequest.then($ => {
            let userMovie = $.message.text;
            $.sendMessage(getMovie(userMovie), { parse_mode: "Markdown" });
          });
        })
        .catch(err => {
          $.sendMessage(sharedModule.noData());
        });
    } else {
      $.sendMessage(getMovie(userMovie), { parse_mode: "Markdown" });
    }
  }

  get routes() {
    return {
      movieCommand: "movieHandler"
    };
  }
}

function getMovie(query) {
  MovieDB.searchMovie({ query: query }, (err, res) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      let strToReturn = `*Title*: ${res.results[0].title} - *Date*: ${
        res.results[0].release_date
      }
              *Rating*: ${res.results[0].vote_average}/10

              *Description*: ${res.results[0].overview}
              https://image.tmdb.org/t/p/original/${
                res.results[0].poster_path
              }`;
      return strToReturn;
    }
  });
}
//       require("fs").writeFile(
//         "movie.json",
//         JSON.stringify(res.results[0]),
//         err => {
//           if (err) throw err;
//           console.log("Saved");
//         }
//       );
//     }
//   });

module.exports = MovieController;
