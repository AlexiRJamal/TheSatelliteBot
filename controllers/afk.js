/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /afk requests
 */

const Telegram = require("telegram-node-bot");
const sharedModule = require("../exports/shared");
const logger = require("../exports/log");

class AfkController extends Telegram.TelegramBaseController {
  afkHandler($) {
    let counter = 0;
    let username = $.message.from.username;
    let name = $.message.from.firstName;
    let id = parseInt($.message.from.id);
    logger.log(`/afk request was made by "${name}", username: @${username}`);
    console.log(`/afk request was made by "${name}", username: @${username}`);
    this._localization
      .forUser(id)
      .then((phrases) => {
        $.sendMessage(phrases.afkAway);
        setInterval(() => {
          count(counter);
        }, 1000);
        $.waitForRequest.then(($) => {
          $.sendMessage(sharedModule.getAFK(counter, username));
        });
      })
      .catch((err) => {
        $.sendMessage(sharedModule.noData());
      });
  }

  get routes() {
    return {
      afkCommand: "afkHandler",
    };
  }
}

module.exports = AfkController;
