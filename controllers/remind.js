/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /counter requests
 */

"use strict";

const Telegram = require("telegram-node-bot");

class RemindController extends Telegram.TelegramBaseController {
  remindHandler($) {
    let id = parseInt($.message.from.id);
    let temp = $.message.text
      .split(" ")
      .slice(1)
      .join("");
    let username = $.message.from.username;
    let user = $.message.from.firstName;
    let userTime = parseInt(temp);

    if (!userTime) {
      this._localization.forUser(id).then(phrases => {
        $.sendMessage(phrases.remindRequest);
        $.waitForRequest.then($ => {
          let userTime = parseInt($.message.from.text);
          $.sendMessage(phrases.remindPromise);
        });
      });
      remindUser(userTime);
    } else {
      this._localization.forUser(id).then(phrases => {
        $.sendMessage(phrases.remindPromise);
      });
      remindUser(userTime);
    }

    function remindUser(time) {
      if (isNaN(time)) $.sendMessage(`${time} is not a number`);
      else {
        if (time >= 5 && time <= 300000) {
          setTimeout(() => {
            $.sendMessage(`REMINDER DEAR ${user}`);
          }, time * 1000);
          console.log(
            `/counter request was made by ${username}, name: ${user}, counter: ${time}`
          );
        }
      }
    }
  }

  get routes() {
    return {
      remindCommand: "remindHandler"
    };
  }
}

module.exports = RemindController;
