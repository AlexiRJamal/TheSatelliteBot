/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /excuse requests
 */

"use strict";

const Telegram = require("telegram-node-bot");
const excuse = require("huh");
const sharedModule = require("../exports/shared");
const logger = require("../exports/log");

class ExcuseController extends Telegram.TelegramBaseController {
  excuseHandler($) {
    let id = parseInt($.message.from.id);
    let param = "",
      caption = "";

    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`/excuse request was made by ${name}, username: @${username}`);
    console.log(`/excuse request was made by ${name}, username: @${username}`);

    this._localization
      .forUser(id)
      .then((phrases) => {
        param = phrases.excuseParam;
        caption = phrases.excuseMemeCaption;

        $.runInlineMenu({
          layout: 2,
          method: "sendMessage",
          params: [param],
          menu: [
            {
              text: "English",
              callback: () => {
                $.sendMessage(excuse.get("en"));
              },
            },
            {
              text: "Arabic",
              callback: () => {
                $.sendPhoto({ path: "./files/joke.jpg" }, { caption: caption });
              },
            },
          ],
        });
      })
      .catch((err) => {
        $.sendMessage(sharedModule.noData());
      });
  }

  get routes() {
    return {
      excuseCommand: "excuseHandler",
    };
  }
}

module.exports = ExcuseController;
