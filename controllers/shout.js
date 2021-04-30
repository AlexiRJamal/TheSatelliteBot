/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler to all /shout requests
 */

const Telegram = require("telegram-node-bot");

class ShoutController extends Telegram.TelegramBaseController {
  shoutHandler($) {
    let id = parseInt($.message.from.id);
    let userMsg = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");

    if (!userMsg) {
      this._localization.forUser(id).then(phrases => {
        $.sendMessage(phrases.shoutRequest);
        $.waitForRequest.then($ => {
          let userMsg = $.message.text;
          $.sendMessage(userMsg.toUpperCase());
        });
      });
    } else {
      $.sendMessage(userMsg.toUpperCase());
    }
  }

  get routes() {
    return {
      shoutCommand: "shoutHandler"
    };
  }
}

module.exports = ShoutController;
