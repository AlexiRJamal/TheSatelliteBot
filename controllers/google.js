/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /google requests
 */

"use strict";

const Telegram = require("telegram-node-bot");
const google = require("google");
const sharedModule = require("../exports/shared");
const logger = require("../exports/log");

class GoogleController extends Telegram.TelegramBaseController {
  googleHandler($) {
    let id = parseInt($.message.from.id);
    let userQuery = $.message.text.split(" ").slice(1).join(" ");
    if (!userQuery) {
      this._localization
        .forUser(id)
        .then((phrases) => {
          $.sendMessage(phrases.googleRequest);
          $.waitForRequest.then(($) => {
            let userQuery = $.message.text;
            let name = $.message.from.firstName;
            let username = $.message.from.username;
            logger.log(
              `/google request was made by "${name}", username: @${username}, query: ${userQuery}`
            );
            console.log(
              `/google request was made by "${name}", username: @${username}, query: ${userQuery}`
            );
            googleIt(userQuery);
          });
        })
        .catch((err) => {
          $.sendMessage(sharedModule.noData());
        });
    } else {
      let name = $.message.from.firstName;
      let username = $.message.from.username;
      logger.log(
        `/google request was made by "${name}", username: @${username}, query: ${userQuery}`
      );
      console.log(
        `/google request was made by "${name}", username: @${username}, query: ${userQuery}`
      );
      googleIt(userQuery);
    }

    function googleIt(query) {
      let arrToSend = [];
      let str;
      google(query, (err, res) => {
        if (err) {
          $.sendMessage("An error has occured");
          throw err;
        } else {
          for (let i = 0; i < res.links.length; i++) {
            let title = res.links[i].title,
              href = res.links[i].href,
              description = res.links[i].description;
            if (title != null || href != null || description != null) {
              str.append(
                `*Title*: ${title}\n*Link*: ${href}\n\n*Description*: ${description}\n\n`
              );
            }
          }
        }
      });
      $.sendMessage(str);
    }
  }

  get routes() {
    return {
      googleCommand: "googleHandler",
    };
  }
}

module.exports = GoogleController;
