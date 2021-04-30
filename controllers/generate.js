/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for /generate command
 */

"use strict";

const Telegram = require("telegram-node-bot");
const genModule = require("../exports/generate");
const logger = require("../exports/log");

class GenerateController extends Telegram.TelegramBaseController {
  generateHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`/generate request was made by ${name}, username: @${username}`);
    console.log(
      `/generate request was made by ${name}, username: @${username}`
    );
    $.runInlineMenu({
      layout: 2,
      method: "sendMessage",
      params: ["What do you want to generate?"],
      menu: [
        {
          text: "Primes",
          callback: () => {
            $.sendMessage("Limit? 2->1000");
            $.waitForRequest.then(($) => {
              let userMsg = $.message.text;
              if (userMsg >= 2 && userMsg <= 1000) {
                $.sendMessage(genModule.getPrimes(userMsg));
              } else $.sendMessage("Limit should be between 2 and 1000");
            });
          },
        },
        {
          text: "Fibonacci sequence",
          callback: () => {
            $.sendMessage("Limit? 1->100");
            $.waitForRequest.then(($) => {
              let userMsg = $.message.text;
              if (userMsg >= 1 && userMsg <= 100) {
                $.sendMessage(genModule.fib(userMsg));
              } else $.sendMessage("Limit should be between 1 and 100");
            });
          },
        },
      ],
    });
  }

  get routes() {
    return {
      generateCommand: "generateHandler",
    };
  }
}

module.exports = GenerateController;
