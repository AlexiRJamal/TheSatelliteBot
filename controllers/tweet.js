"use strict";

const Telegram = require("telegram-node-bot");
let LINK = "https://twitter.com/loox37/status/";
const Twit = require("twit");

const T = new Twit({
  consumer_key: "NobNIC1nSvZuDW5PO9iBiVrXR",
  consumer_secret: "Q7e5cQuMj83nzzzl4vQjOjmSvRcqix3jMmSIitz6KeNuzcctDx",
  access_token: "845477478-YFBXaMQQih5tbUAPGrnKpPX4PLCidzn4DboQGjIb",
  access_token_secret: "0tG60P8ylMyEmW5jGHJcvUFbuR6O0bfL09d2nqDtnDQag",
});

class TweetController extends Telegram.TelegramBaseController {
  tweetHandler($) {
    let id = $.message.from.id;
    let msg = $.message.text.split(" ").slice(1).join(" ");
    if (id != "379633660") {
      this._api.sendMessage(
        379633660,
        "Tweet was used by " +
          $.message.from.username +
          ", " +
          $.message.from.firstName
      );
      $.sendMessage("Under development...");
    } else {
      console.log("Tweet request was made.");
      if (!msg) {
        $.sendMessage("Send your tweet");
        $.waitForRequest.then(($) => {
          let msg = $.message.text;
          if (msg.length > 240) {
            $.sendMessage(
              "Character limit is 240. Your message is " +
                msg.length +
                " characters long"
            );
          } else if (msg === "$qwe") {
            $.sendMessage("Cancelled.");
            return;
          } else {
            $.sendMessage("Calling tweetIt...");
            tweetIt(msg);
          }
        });
      } else if (msg.length > 240)
        $.sendMessage(
          "Character limit is 240. Your message is " +
            msg.length +
            " characters long"
        );
      else if (msg === "$qwe") {
        $.sendMessage("Cancelled.");
        return;
      } else {
        $.sendMessage("Calling tweetIt...");
        tweetIt(msg);
      }
    }

    function tweetIt(txt) {
      let tweet = {
        status: txt,
      };

      T.post("statuses/update", tweet, (err, result, response) => {
        $.sendMessage("Tweeting...");
        if (err) $.sendMessage("An error has occured :/");
        else {
          $.sendMessage("Tweeted!");
          $.sendMessage(`You can view it at ${LINK + result.id_str}?s=19`);
        }
      });
    }
  }

  get routes() {
    return {
      tweetCommand: "tweetHandler",
    };
  }
}

module.exports = TweetController;
