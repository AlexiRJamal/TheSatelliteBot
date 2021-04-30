/**
 * @author Alexi Jamal
 *
 * @description
 * This file handles all requests to /flag
 */

"use strict";

const Telegram = require("telegram-node-bot");
const { getCode } = require("../exports/countries");
const sharedModule = require("../exports/shared");
const logger = require("../exports/log");

/**
 * Main class
 *
 * @class FlagsController
 * @extends {Telegram.TelegramBaseController}
 * @exports FlagsController
 */
class FlagsController extends Telegram.TelegramBaseController {
  flagHandler($) {
    let id = parseInt($.message.from.id);
    let userFlag = $.message.text.split(" ").slice(1).join(" ");
    if (!userFlag) {
      this._localization
        .forUser(id)
        .then((phrases) => {
          $.sendMessage(phrases.flagRequest);
          $.waitForRequest.then(($) => {
            let userFlag = $.message.text;
            let name = $.message.from.firstName;
            let username = $.message.from.username;
            logger.log(
              `/flag request was made by ${name}, username: @${username}, flag: ${userFlag}`
            );
            console.log(
              `/flag request was made by ${name}, username: @${username}, flag: ${userFlag}`
            );
            getFlag(userFlag);
          });
        })
        .catch((err) => {
          $.sendMessage(sharedModule.noData());
        });
    } else {
      let name = $.message.from.firstName;
      let username = $.message.from.username;
      logger.log(
        `/flag request was made by ${name}, username: @${username}, flag: ${userFlag}`
      );
      console.log(
        `/flag request was made by ${name}, username: @${username}, flag: ${userFlag}`
      );
      getFlag(userFlag);
    }

    /**
     * Sends the country's flag as a .png picture.
     *
     * ! The library was updated by me. Original is different
     *
     * ! BECAUSE I ROCK!!
     *
     * @param {string} country The country's name
     */
    function getFlag(country) {
      let name = getCode(country).toLowerCase();
      if (name === undefined)
        return $.sendMessage(
          "Either " + country + " is not a country or I'm at fault :/"
        );
      else return $.sendPhoto({ path: `./files/flags/${name}.png` });
    }
  }

  /**
   * Routes the commands in main to proper handlers
   *
   * @readonly
   * @memberof FlagsController
   */
  get routes() {
    return {
      flagCommand: "flagHandler",
    };
  }
}

module.exports = FlagsController;
