/**
 * @author Alexi Jamal
 *
 * @description
 * This file sends the help message when sending /help
 */

"use strict";

const Telegram = require("telegram-node-bot");
const helpModule = require("../exports/help");
const sharedModule = require("../exports/shared");
const logger = require("../exports/log");

class HelpController extends Telegram.TelegramBaseController {
  helpHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    console.log(`/help request was made by ${name}, username: ${username}`);
    logger.log(`/help request was made by ${name}, username: ${username}`);
    $.sendMessage(helpModule.helpMessage(), { parse_mode: "Markdown" });
  }

  get routes() {
    return {
      helpCommand: "helpHandler",
    };
  }
}

module.exports = HelpController;
