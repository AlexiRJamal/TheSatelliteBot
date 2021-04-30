/**
 * @author Alexi Jamal
 *
 * @description
 * This file all decides requests
 */

"use strict";

const Telegram = require("telegram-node-bot");
const decideModule = require("../exports/decide");
const logger = require("../exports/log");
const sharedModule = require("../exports/shared");

class DecideController extends Telegram.TelegramBaseController {
  decideHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`/decide request was made by ${name}, username: @${username}`);
    console.log(`/decide request was made by ${name}, username: @${username}`);

    let param = "",
      hotSen = "",
      ranSen = "",
      diceSen = "",
      carSen = "",
      shufSen = "",
      passSen = "",
      custSen = "";

    this._localization
      .forUser(id)
      .then((phrases) => {
        param = phrases.decideParam;
        hotSen = phrases.hotSentence;
        ranSen = phrases.randomSentence;
        diceSen = phrases.diceSentence;
        carSen = phrases.cardsSentence;
        shufSen = phrases.shuffleSentence;
        passSen = phrases.passwordSentence;
        custSen = phrases.customSentence;

        $.runInlineMenu({
          layout: 2,
          method: "sendMessage",
          params: [param],
          menu: [
            {
              text: hotSen,
              callback: () => {
                this._localization
                  .forUser(id)
                  .then((phrases) => {
                    $.sendMessage(phrases.hotTimesRequest);
                    $.waitForRequest.then(($) => {
                      let timesMsg = $.message.text;
                      let tempArr = decideModule.headsOrTails(timesMsg);

                      tempArr.forEach((time) => {
                        $.sendMessage(`${time.num}. ${time.value}`);
                      });
                    });
                  })
                  .catch((err) => {
                    $.sendMessage(sharedModule.noData());
                  });
              },
            },
            {
              text: ranSen,
              callback: () => {
                this._localization
                  .forUser(id)
                  .then((phrases) => {
                    $.sendMessage(phrases.randomNumsRequestFrom);
                    $.waitForRequest.then(($) => {
                      let fromMsg = $.message.text;
                      $.sendMessage(phrases.randomNumsRequestTo);
                      $.waitForRequest.then(($) => {
                        let toMsg = $.message.text;
                        $.sendMessage(decideModule.randomNums(fromMsg, toMsg));
                      });
                    });
                  })
                  .catch((err) => {
                    $.sendMessage(sharedModule.noData());
                  });
              },
            },
            {
              text: diceSen,
              callback: () => {
                this._localization
                  .forUser(id)
                  .then((phrases) => {
                    $.sendMessage(phrases.diceRequest);
                    $.waitForRequest.then(($) => {
                      let timesMsg = $.message.text;
                      let tempArr = decideModule.rollDice(timesMsg);

                      tempArr.forEach((roll) => {
                        $.sendMessage(`${roll.num}. ${roll.value}`);
                      });
                    });
                  })
                  .catch((err) => {
                    $.sendMessage(sharedModule.noData());
                  });
              },
            },
            {
              text: carSen,
              callback: () => {
                $.sendMessage(decideModule.getCard());
              },
            },
            {
              text: shufSen,
              callback: () => {
                this._localization
                  .forUser(id)
                  .then((phrases) => {
                    $.sendMessage(phrases.shuffleRequest);
                    $.waitForRequest.then(($) => {
                      let arr = $.message.text.split(",");
                      $.sendMessage(decideModule.shuffle(arr));
                    });
                  })
                  .catch((err) => {
                    $.sendMessage(sharedModule.noData());
                  });
              },
            },
            {
              text: passSen,
              callback: () => {
                this._localization
                  .forUser(id)
                  .then((phrases) => {
                    $.sendMessage(phrases.passRequest);
                    $.waitForRequest.then(($) => {
                      let len = $.message.text;
                      $.sendMessage(decideModule.generatePassword(len));
                    });
                  })
                  .catch((err) => {
                    $.sendMessage(sharedModule.noData());
                  });
              },
            },
            {
              text: custSen,
              callback: () => {
                this._localization
                  .forUser(id)
                  .then((phrases) => {
                    $.sendMessage(phrases.customRequest);
                    $.waitForRequest.then(($) => {
                      let arr = $.message.text;
                      $.sendMessage(decideModule.getChoice(arr));
                    });
                  })
                  .catch((err) => {
                    $.sendMessage(sharedModule.noData());
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
      decideCommand: "decideHandler",
    };
  }
}

module.exports = DecideController;
