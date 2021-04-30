/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts for cat pictures requests
 */

const Telegram = require("telegram-node-bot");
const request = require("request");
const logger = require("../exports/log");
const sharedModule = require("../exports/shared");

const URL_image = "https://api.thecatapi.com/v1/images/search";
const URL_gif = "https://api.thecatapi.com/v1/images/search?mime_types=gif";

/**
 * The main handler for all /cat request.
 *
 * @class CatsController
 * @extends {Telegram.TelegramBaseController}
 * @exports CatsController
 */
class CatsController extends Telegram.TelegramBaseController {
  /**
   * Global scope
   *
   * @param {*} $
   * @memberof CatsController
   */
  catsHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`/cats request was made by "${name}", username: @${username}`);
    console.log(`/cats request was made by "${name}", username: @${username}`);

    let param = "";
    let facSen = "",
      picSen = "",
      errSen = "";
    /**
     * @param {Telegram} runInlineMenu
     * Gets the menu with buttons
     */
    this._localization
      .forUser(id)
      .then((phrases) => {
        param = phrases.catsParam;
        facSen = phrases.factsSentence;
        picSen = phrases.picsSentence;
        errSen = phrases.generalError;

        $.runInlineMenu({
          layout: 2,
          method: "sendMessage",
          params: [param],
          menu: [
            {
              text: facSen,
              callback: () => {
                let ran = Math.floor(Math.random() * 22);
                this._localization
                  .forUser(id)
                  .then((phrases) => {
                    $.sendMessage(phrases.catFacts[ran]);
                  })
                  .catch((err) => {
                    $.sendMessage(sharedModule.noData());
                  });
              },
            },
            {
              text: picSen,
              callback: () => {
                request.get(URL_image, (err, res, body) => {
                  if (err) {
                    $.sendMessage(errSen);
                    throw err;
                  } else {
                    let json = JSON.parse(body);
                    $.sendMessage(json[0].url);
                  }
                });
              },
            },
            {
              text: "GIF",
              callback: () => {
                request.get(URL_gif, (err, res, body) => {
                  if (err) {
                    $.sendMessage(errSen);
                    throw err;
                  } else {
                    let json = JSON.parse(body);
                    $.sendMessage(json[0].url);
                  }
                });
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
      catsCommand: "catsHandler",
    };
  }
}

module.exports = CatsController;
