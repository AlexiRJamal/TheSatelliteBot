"use strict";

const Telegram = require("telegram-node-bot");
const sharedModule = require("../exports/shared");

class lmgtfyController extends Telegram.TelegramBaseController {
  lmgtfyHandler($) {
    let id = parseInt($.message.from.id);
    let link = "http://www.lmgtfy.com/?q=";
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    let userMsg = $.message.text
      .split(" ")
      .slice(1)
      .join("+");
    if (!userMsg) {
      this._localization
        .forUser(id)
        .then(phrases => {
          $.sendMessage(phrases.lmgtfyLinkRequest);
          $.waitForRequest.then($ => {
            let userMsg = $.message.text.split(" ").join("+");
            $.sendMessage(link + userMsg);
          });
        })
        .catch(err => {
          $.sendMessage(sharedModule.noData());
        });
      console.log(
        `/lmgtfy request was made by ${name}, username: ${username}, query: ${userMsg}`
      );
    } else {
      $.sendMessage(link + userMsg);
      console.log(
        `/lmgtfy request was made by ${name}, username: ${username}, query: ${userMsg}`
      );
    }
  }

  get routes() {
    return {
      lmgtfyCommand: "lmgtfyHandler"
    };
  }
}

module.exports = lmgtfyController;
