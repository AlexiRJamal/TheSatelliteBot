/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the handler for the /about command
 */

const Telegram = require("telegram-node-bot");
const logger = require("../exports/log");
const sharedModule = require("../exports/shared");

class AboutController extends Telegram.TelegramBaseController {
  aboutHandler($) {
    let id = parseInt($.message.from.id);
    let username = $.message.from.username;
    let name = $.message.from.firstName;
    this._localization
      .forUser(id)
      .then((phrases) => {
        $.sendMessage(phrases.aboutMessage);
      })
      .catch((err) => {
        $.sendMessage(sharedModule.noData());
      });
    logger.log(`/about request was made by "${name}", username: @${username}`);
    console.log(`/about request was made by "${name}", username: @${username}`);
  }

  get routes() {
    return {
      aboutCommand: "aboutHandler",
    };
  }
}

module.exports = AboutController;
