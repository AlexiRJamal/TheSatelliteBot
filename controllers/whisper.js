/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler to all /whisper requests
 */

const Telegram = require("telegram-node-bot");
const logger = require("../exports/log");

class WhisperController extends Telegram.TelegramBaseController {
  whisperHandler($) {
    let id = parseInt($.message.from.id);
    let userMsg = $.message.text.split(" ").slice(1).join(" ");

    if (!userMsg) {
      this._localization.forUser(id).then((phrases) => {
        $.sendMessage(phrases.whisperRequest);
        $.waitForRequest.then(($) => {
          let userMsg = $.message.text;
          let name = $.message.from.firstName;
          let username = $.message.from.username;
          logger.log(
            `/whisper request was made by "${name}", username: @${username}, user message: ${userMsg}`
          );
          console.log(
            `/whisper request was made by "${name}", username: @${username}, user message: ${userMsg}`
          );
          $.sendMessage(userMsg.toLowerCase());
        });
      });
    } else {
      let name = $.message.from.firstName;
      let username = $.message.from.username;
      logger.log(
        `/whisper request was made by "${name}", username: @${username}, user message: ${userMsg}`
      );
      console.log(
        `/whisper request was made by "${name}", username: @${username}, user message: ${userMsg}`
      );
      $.sendMessage(userMsg.toLowerCase());
    }
  }

  get routes() {
    return {
      whisperCommand: "whisperHandler",
    };
  }
}

module.exports = WhisperController;
