/**
 * @author Alexi Jamal
 *
 * @description
 * This file handles bugs reported by the users
 */

"use strict";

const Telegram = require("telegram-node-bot");
const sharedModule = require("../exports/shared");

/**
 * A global variable, kind of like id
 *
 * @param {number} bugCounter
 */
let bugCounter = 0;

/**
 * Main class handler for /bug
 *
 * @class BugController
 * @extends {Telegram.TelegramBaseController}
 * @exports BugController
 */
class BugController extends Telegram.TelegramBaseController {
  /**
   * Global scope
   *
   * @param {*} $
   * @memberof BugController
   */
  bugHandler($) {
    let id = parseInt($.message.from.id);
    let report = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    if (report) {
      if ($.message.from.id == "379633660") {
        this._localization
          .forUser(id)
          .then(phrases => {
            $.sendMessage(phrases.bugIdMe);
          })
          .catch(err => {
            $.sendMessage(sharedModule.noData());
          });
      } else {
        this._localization
          .forUser(id)
          .then(phrases => {
            $.sendMessage(
              phrases.bugReported + "\n" + phrases.bugReportedContact
            );
            setTimeout(() => {
              $.sendMessage("Your bug id is: " + bugCounter);
            }, 2000);
            this._api.sendMessage(
              379633660,
              `User @${$.message.from.username} by the name of "${
                $.message.from.firstName
              }" reported a bug.\n\nThe bug is: ${report}`
            );
          })
          .catch(err => {
            $.sendMessage(sharedModule.noData());
          });
      }
    } else {
      this._localization
        .forUser(id)
        .then(phrases => {
          $.sendMessage(phrases.bugReportInclude);
        })
        .catch(err => {
          $.sendMessage(sharedModule.noData());
        });
    }
    bugCounter++;
  }

  get routes() {
    return {
      bugCommand: "bugHandler"
    };
  }
}

module.exports = BugController;
