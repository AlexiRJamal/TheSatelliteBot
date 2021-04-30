/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /define requests
 */

"use strict";

const Telegram = require("telegram-node-bot");
const mw = require("mw-dict");
const TOKEN = require("../tokens/dictionary");
const dict = new mw.CollegiateDictionary(TOKEN.getToken());
const logger = require("../exports/log");
const sharedModule = require("../exports/shared");

class DictionaryController extends Telegram.TelegramBaseController {
  defineHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    let defineReq = "",
      defineErr = "";
    let userWord = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    logger.log(
      `/define request was made by "${name}", username: @${username}, word: ${userWord}`
    );
    console.log(
      `/define request was made by "${name}", username: @${username}, word: ${userWord}`
    );
    this._localization
      .forUser(id)
      .then(phrases => {
        defineReq = phrases.defineWaitForRequest;
        defineErr = phrases.defineError;

        if (userWord) {
          getAllMeanings(userWord);
        } else {
          $.sendMessage(defineReq);
          $.waitForRequest.then($ => {
            let userWord = $.messsage.text;
            getAllMeanings(userWord);
          });
        }

        function getAllMeanings(word) {
          dict
            .lookup(word)
            .then(result => {
              let word = result[0].word,
                type = result[0].functional_label,
                pron = result[0].pronunciation,
                def = result[0].definition[0].meanings;

              $.sendMessage(
                `*${word.charAt(0).toUpperCase() +
                  word.slice(1)}*, _${type}_\n\n*Definition*: ${def}`,
                { parse_mode: "Markdown" }
              );
            })
            .catch(err => {
              $.sendMessage(defineErr);
              logger.log(
                `/define -> ${err} - Username: @${username}, word: ${word}`
              );
              console.log(
                `/define -> ${err} - Username: @${username}, word: ${word}`
              );
            });
        }
      })
      .catch(err => {
        $.sendMessage(sharedModule.noData());
      });
  }

  get routes() {
    return {
      defineCommand: "defineHandler"
    };
  }
}

module.exports = DictionaryController;
