/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /telcode request.
 */

const Telegram = require("telegram-node-bot");
const code = require("../exports/telcode");
const sharedModule = require("../exports/shared");

class TelCodeController extends Telegram.TelegramBaseController {
  telcodeHandler($) {
    let id = $.message.from.id;
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    let userMsg = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    if (!userMsg) {
      this._localization
        .forUser(id)
        .then(phrases => {
          $.sendMessage(phrases.telcodeRequest);
          $.waitForRequest.then($ => {
            let userMsg = $.message.text;
            $.sendMessage(code.checkCode(userMsg));
          });
        })
        .catch(err => {
          $.sendMessage(sharedModule.noData());
        });
      console.log(
        `/telcode request was made by ${name}, username: ${username}, code: ${userMsg}`
      );
    } else {
      $.sendMessage(code.checkCode(userMsg));
      console.log(
        `/telcode request was made by ${name}, username: ${username}, code: ${userMsg}`
      );
    }
  }

  get routes() {
    return {
      telcodeCommand: "telcodeHandler"
    };
  }
}

module.exports = TelCodeController;
