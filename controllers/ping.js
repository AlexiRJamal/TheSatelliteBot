/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /ping requests
 */

const Telegram = require("telegram-node-bot");
const sharedModule = require("../exports/shared");

class PingController extends Telegram.TelegramBaseController {
  pingHandler($) {
    let id = parseInt($.message.from.id);

    this._localization
      .forUser(id)
      .then(phrases => {
        $.sendMessage(phrases.pingMessage);
      })
      .catch(err => {
        $.sendMessage(sharedModule.noData());
      });
  }

  get routes() {
    return {
      pingCommand: "pingHandler"
    };
  }
}

module.exports = PingController;
