/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /wiki requests
 */

const Telegram = require("telegram-node-bot");
const shared = require("../exports/shared");
const sharedModule = require("../exports/shared");
const logger = require("../exports/log");

class WikiController extends Telegram.TelegramBaseController {
  wikiHandler($) {
    let id = parseInt($.message.from.id);
    let userMsg = $.message.text.split(" ").slice(1).join(" ");
    let userQuery = shared.cap_First(userMsg).split(" ").join("_");

    let param = "";

    if (!userMsg) {
      this._localization
        .forUser(id)
        .then((phrases) => {
          param = phrases.wikiParam;

          $.sendMessage(phrases.wikiRequest);
          $.waitForRequest.then(($) => {
            let userMsg = $.message.text;
            let name = $.message.from.firstName;
            let username = $.message.from.username;
            logger.log(
              `/wiki request was made by "${name}", username: @${username}, query: ${userQuery}`
            );
            console.log(
              `/wiki request was made by "${name}", username: @${username}, query: ${userQuery}`
            );
            let userQuery = shared.cap_First(userMsg).split(" ").join("_");
            getWiki(userQuery, param);
          });
        })
        .catch((err) => {
          $.sendMessage(sharedModule.noData());
        });
    } else {
      getWiki(userQuery, param);
      let name = $.message.from.firstName;
      let username = $.message.from.username;
      logger.log(
        `/wiki request was made by "${name}", username: @${username}, query: ${userQuery}`
      );
      console.log(
        `/wiki request was made by "${name}", username: @${username}, query: ${userQuery}`
      );
    }

    function getWiki(query, param) {
      $.runInlineMenu({
        layout: 2,
        method: "sendMessage",
        params: [param],
        menu: [
          {
            text: "English",
            callback: () => {
              $.sendMessage(`https://en.wikipedia.org/${query}`);
            },
          },
          {
            text: "Deutsch",
            callback: () => {
              $.sendMessage(`https://de.wikipedia.org/${query}`);
            },
          },
          {
            text: "Español",
            callback: () => {
              $.sendMessage(`https://es.wikipedia.org/${query}`);
            },
          },
          {
            text: "Français",
            callback: () => {
              $.sendMessage(`https://fr.wikipedia.org/${query}`);
            },
          },
        ],
      });
    }
  }

  get routes() {
    return {
      wikiCommand: "wikiHandler",
    };
  }
}

module.exports = WikiController;
