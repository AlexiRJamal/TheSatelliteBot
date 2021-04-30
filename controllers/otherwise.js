/**
 * @author Alexi Jamal
 *
 * @description
 * This gets called each time a user sends a command not supported.
 */

"use strict";

const Telegram = require("telegram-node-bot");
const sharedModule = require("../exports/shared");
const logger = require("../exports/log");

class OtherwiseController extends Telegram.TelegramBaseController {
  handle($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`User @${username}, name: ${name}, Sent: ${$.message.text}`);
    console.log(`User @${username}, name: ${name}, Sent: ${$.message.text}`);
    if ($.message.chat.type == "private") {
      let id = parseInt($.message.from.id);
      this._localization
        .forUser(id)
        .then((phrases) => {
          $.sendMessage(phrases.otherwiseSentence);
        })
        .catch((err) => {
          $.sendMessage(sharedModule.noData());
        });
    } else return;
  }
}

module.exports = OtherwiseController;
