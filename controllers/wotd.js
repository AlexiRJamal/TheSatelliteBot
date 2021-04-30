/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for word of the day
 */

const Telegram = require("telegram-node-bot");
const wotd = require("words-of-the-day");
const logger = require("../exports/log");

class WOTDController extends Telegram.TelegramBaseController {
  wotdHandler($) {
    let id = parseInt($.message.from.id);
    let user = `../files/users/${id}.json`;
    let username = $.message.from.username;
    let name = $.message.from.firstName;
    logger.log(`/wotd request was made by ${name}, username: ${username}`);
    console.log(`/wotd request was made by ${name}, username: ${username}`);
    wotd.wordThink().then((data) => {
      let wordOfTheDay = `•Date: ${data.date}\n\n•Word Of The Day: *${data.word}*\n\n•Meaning: ${data.meaning}`;
      $.sendMessage(wordOfTheDay, { parse_mode: "Markdown" });
    });

    let today = new Date();
    let tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

    if (user.wotd === true) {
      if (user.noti === true) {
        setTimeout(() => {
          wotd.wordThink().then((data) => {
            let wordOfTheDay = `•Date: ${data.date}\n\n•Word Of The Day: *${data.word}*\n\n•Meaning: ${data.meaning}`;
            $.sendMessage(wordOfTheDay, { parse_mode: "Markdown" });
          });
        }, tomorrow);
      } else {
        wotd.wordThink().then((data) => {
          let wordOfTheDay = `•Date: ${data.date}\n\n•Word Of The Day: *${data.word}*\n\n•Meaning: ${data.meaning}`;
          $.sendMessage(
            wordOfTheDay,
            { parse_mode: "Markdown" },
            { disable_notification: true }
          );
        });
      }
    }
  }

  get routes() {
    return {
      wotdCommand: "wotdHandler",
    };
  }
}

module.exports = WOTDController;
