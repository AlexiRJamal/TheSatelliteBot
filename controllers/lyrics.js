/**
 * @author Alexi Jamal
 *
 * @description
 * This files handles all /lyrics requests
 */

const Telegram = require("telegram-node-bot");
const fs = require("fs");
const Genius = require("node-genius");
const GeniusFetcher = require("genius-lyrics-fetcher");
const tokens = require("../tokens/lyrics");
const logger = require("../exports/log");

const geniusClient = new Genius(tokens.clientAccess());
const client = new GeniusFetcher.Client(tokens.clientAccess());

class LyricsController extends Telegram.TelegramBaseController {
  lyricsHandler($) {
    let username = $.message.from.username;
    let name = $.message.from.firstName;

    let userSong = $.message.text.split(" ").slice(1).join(" ");
    if (!userSong) {
      $.sendMessage("Send me the song name");
      $.waitForRequest.then(($) => {
        let userSong = $.message.text;
        logger.log(
          `/lyrics request was made by "${name}", username: @${username}, song: ${userSong}`
        );
        console.log(
          `/lyrics request was made by "${name}", username: @${username}, song: ${userSong}`
        );
        $.sendMessage(`Searching for ${userSong}`);
        geniusClient.search(userSong, (err, data) => {
          if (err) throw err;
          else {
            let obj = JSON.parse(data);
            const artist = obj.response.hits[0].result.primary_artist.name;
            client.fetch(userSong, artist).then((lyrics) => {
              $.sendMessage(lyrics.lyrics);
            });
          }
        });
      });
    } else {
      logger.log(
        `/lyrics request was made by "${name}", username: @${username}, song: ${userSong}`
      );
      console.log(
        `/lyrics request was made by "${name}", username: @${username}, song: ${userSong}`
      );
      $.sendMessage(`Searching for ${userSong}`);
      geniusClient.search(userSong, (err, data) => {
        if (err) throw err;
        else {
          let obj = JSON.parse(data);
          const artist = obj.response.hits[0].result.primary_artist.name;
          client.fetch(userSong, artist).then((lyrics) => {
            $.sendMessage(lyrics.lyrics);
          });
        }
      });
    }
  }

  get routes() {
    return {
      lyricsCommand: "lyricsHandler",
    };
  }
}

module.exports = LyricsController;
