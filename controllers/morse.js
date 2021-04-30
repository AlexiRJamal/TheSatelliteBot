/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /morse commands
 */

const Telegram = require("telegram-node-bot");
const Morse = require("morsefy");
const sharedModule = require("../exports/shared");

class MorseController extends Telegram.TelegramBaseController {
  morseHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    console.log(`/morse request was made by ${name}, username: ${username}`);
    $.runInlineMenu({
      layout: 2,
      method: "sendMessage",
      params: [
        'Encode or Decode a message?\n\nNote: for decoding, seperate the text with a space.\n\ne.g. SOS: "... --- ..." instead of "...---..."\nFor words, use 3 spaces, or a "/" to do so. I know this is a lot, but I\'m still working on it.'
      ],
      menu: [
        {
          text: "Encode",
          callback: () => {
            this._localization
              .forUser(id)
              .then(phrases => {
                $.sendMessage(phrases.morseEncondeRequest);
                $.waitForRequest.then($ => {
                  let userIn = $.message.text;
                  $.sendMessage(Morse.encode(userIn));
                });
              })
              .catch(err => {
                $.sendMessage(sharedModule.noData());
              });
          }
        },
        {
          text: "Decode",
          callback: () => {
            this._localization
              .forUser(id)
              .then(phrases => {
                $.sendMessage(phrases.morseDecodeRequest);
                $.waitForRequest.then($ => {
                  let userIn = $.message.text;
                  $.sendMessage(Morse.decode(userIn));
                });
              })
              .catch(err => {
                $.sendMessage(sharedModule.noData());
              });
          }
        }
      ]
    });
  }

  get routes() {
    return {
      morseCommand: "morseHandler"
    };
  }
}
module.exports = MorseController;
