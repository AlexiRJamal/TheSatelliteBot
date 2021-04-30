/**
 * @author Alexi Jamal
 *
 * @description
 * This sends the first message when the user starts using the bot
 */

"use strict";

const Telegram = require("telegram-node-bot");
const fs = require("fs");
const logger = require("../exports/log");

class StartController extends Telegram.TelegramBaseController {
  startHandler($) {
    let id = parseInt($.message.from.id);
    let username = $.message.from.username;

    this._localization.setLanguageForUser(id, "En");
    this._localization.forUser(id).then(phrases => {
      $.sendMessage(phrases.startMessage);
    });
    console.log(`User ${id} has started using the bot.`);

    let myObj = new Object();
    myObj.id = id.toString();
    myObj.wotd = false;
    myObj.noti = false;
    let data = JSON.stringify(myObj);
    fs.writeFile(`./files/users/${id}.json`, data, err => {
      if (err) throw err;
      console.log(`File ${id}.json was saved.`);
      logger.log(
        `User ${id}, username: @${username} has started using the bot.`
      );
    });
  }

  get routes() {
    return {
      startCommand: "startHandler"
    };
  }
}

module.exports = StartController;
