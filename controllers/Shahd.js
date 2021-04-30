/**
 * @author Alexi Jamal
 *
 * @description
 * I don't know, ask her
 */

"use strict";

const Telegram = require("telegram-node-bot");

class ShahdController extends Telegram.TelegramBaseController {
  shahdHandler($) {
    if ($.message.from.id == "670686860") {
      $.sendMessage("Good evening!");
    }
  }

  get routes() {
    return {
      shahdCommand: "shahdHandler",
    };
  }
}

module.exports = ShahdController;
