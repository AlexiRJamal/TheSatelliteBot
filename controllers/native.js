/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as a handler for /native requests
 */

const Telegram = require("telegram-node-bot");
const langs = require("../exports/langs");
const sharedModule = require("../exports/shared");

class NativeController extends Telegram.TelegramBaseController {
  nativeHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    let userMsg = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    let userLang = sharedModule.cap_First(userMsg);
    if (!userMsg) {
      this._localization
        .forUser(id)
        .then(phrases => {
          $.sendMessage(phrases.nativeRequest);
          $.waitForRequest.then($ => {
            let userMsg = $.message.text;
            let userLang = sharedModule.cap_First(userMsg);
            getLang(userLang);
          });
          console.log(
            `/native request was made by ${name}, username: ${username}, lang: ${userLang}`
          );
        })
        .catch(err => {
          $.sendMessage(sharedModule.noData());
        });
    } else {
      getLang(userLang);
      console.log(
        `/native request was made by ${name}, username: ${username}, lang: ${userLang}`
      );
    }

    function getLang(lang) {
      switch (lang) {
        case "English":
          $.sendMessage(langs.English());
          break;
        case "Arabic":
          $.sendMessage(langs.Arabic());
          break;
        case "Greek":
          $.sendMessage(langs.Greek());
          break;
        case "German":
          $.sendMessage(langs.German());
          break;
        case "Indian":
          $.sendMessage(langs.Indian());
          break;
        case "Russian":
          $.sendMessage(langs.Russian());
          break;
        case "Turkish":
          $.sendMessage(langs.Turkish());
          break;
        case "Persian":
          $.sendMessage(langs.Persian());
          break;
        case "Italina":
          $.sendMessage(langs.Italian());
          break;
        case "French":
          $.sendMessage(langs.French());
          break;
        case "Spanish":
          $.sendMessage(langs.Spanish());
          break;
        case "Portugese":
          $.sendMessage(langs.Portugese());
          break;
        case "Armenian":
          $.sendMessage(langs.Armenian());
          break;
        case "Polish":
          $.sendMessage(langs.Polish());
          break;
        case "Hebrew":
          $.sendMessage(langs.Arabic());
          break;
        case "Chinese":
          $.sendMessage(langs.Chinese());
          break;
        case "Japanese":
          $.sendMessage(langs.Japanese());
          break;
        default:
          $.sendMessage(
            "Either I don't know or the language is not a language."
          );
      }
    }
  }

  get routes() {
    return {
      nativeCommand: "nativeHandler"
    };
  }
}

module.exports = NativeController;
