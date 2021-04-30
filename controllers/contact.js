/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts the handler for /contact command
 */

const Telegram = require("telegram-node-bot");
const logger = require("../exports/log");
const sharedModule = require("../exports/shared");

class ContactController extends Telegram.TelegramBaseController {
  contactHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;

    logger.log(`/contact request was made by ${name}, username: @${username}`);
    console.log(`/contact request was made by ${name}, username: @${username}`);

    let param = "";

    this._localization
      .forUser(id)
      .then((phrases) => {
        param = phrases.contactParam;

        $.runInlineMenu({
          layout: 2,
          method: "sendMessage",
          params: [param],
          menu: [
            {
              text: "Telegram",
              url: "https://t.me/loox37",
            },
            {
              text: "Twitter",
              url: "https://twitter.com/loox37",
            },
            {
              text: "VK",
              url: "https://vk.com/loox37",
            },
            {
              text: "Instagram",
              url: "https://instagram.com/loox37",
            },
            {
              text: "Source code",
              url: "https://github.com/loox37/TheSatelliteBot",
            },
            {
              text: "WhatsApp",
              callback: () => {
                $.sendMessage("Shame on you...\nAnyways, +96170219656");
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
      contactCommand: "contactHandler",
    };
  }
}

module.exports = ContactController;
