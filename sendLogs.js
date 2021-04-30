/**
 * @author Alexi Jamal
 *
 * @description
 * !THIS FILE IS NOT TO BE USED BY ANYONE
 */

"use strict";

const Telegram = require("telegram-node-bot");
const logger = require("./exports/log");
const Logs = "./logs/logs.log";

class SendLogs extends Telegram.TelegramBaseController {
  sendLogsHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    if ($.message.from.id == "379633660") {
      this._api.sendDocument("379633660", { path: Logs });
    } else {
      $.sendMessage("You're not authorized to use this.");
      logger.log(`Request logs was made by ${name}, username: ${username}`);
    }
  }

  get routes() {
    return {
      sendLogsCommand: "sendLogsHandler"
    };
  }
}

module.exports = SendLogs;
