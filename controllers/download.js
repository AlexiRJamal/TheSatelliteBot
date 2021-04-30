/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /download requests.
 */

const Telegram = require("telegram-node-bot");
const fs = require("fs");
const downloader = require("ytdl-core");

class DownloadController extends Telegram.TelegramBaseController {
  downloadHandler($) {
    $.sendMessage("Under development");
    // let id = parseInt($.message.from.id);
    // let name = $.message.from.firstName;
    // let username = $.message.from.username;
    // let userLink = $.message.text
    //   .split(" ")
    //   .slice(1)
    //   .join(" ");
    // console.log(
    //   `/download request was made by ${name}, username: ${username}, link: ${userLink}`
    // );
    // if (!userLink) {
    //   this._localization.forUser(id).then(phrases => {
    //     $.sendMessage(phrases.linkRequest);
    //     $.waitForRequest.then($ => {
    //       let userLink = $.message.text;
    //       if (checkURL(userLink)) {
    //         $.sendMessage(phrases.linkWait, {
    //           reply_to_message_id: $.message.id
    //         });
    //         let song = downloader(userLink, { filter: "audioonly" }).pipe(
    //           fs.createWriteStream("./files/temp/test.mp3")
    //         );

    //         song.on("finish", () => {
    //           $.sendMessage("Done");
    //           $.sendAudio({ path: "./files/temp/test.mp3" });
    //         });
    //       } else return $.sendMessage(phrases.linkNotYT);
    //     });
    //   });
    // } else {
    //   this._localization.forUser(id).then(phrases => {
    //     if (checkURL(userLink)) {
    //       $.sendMessage(phrases.linkWait, {
    //         reply_to_message_id: $.message.id
    //       });
    //       let song = downloader(userLink, { filter: "audioonly" }).pipe(
    //         fs.createWriteStream("./files/temp/test.mp3")
    //       );

    //       song.on("finish", () => {
    //         $.sendMessage("Done");
    //         $.sendAudio({ path: "./files/temp/test.mp3" });
    //       });
    //     } else return $.sendMessage(phrases.linkNotYT);
    //   });
    // }

    // function sendAudio(url) {
    //   if (downloader.validateURL(url)) {
    //     this._localization.forUser(id).then(phrases => {
    //       $.sendMessage(phrases.linkWait);
    //     });
    //     let song = downloader(url, { filter: "audioonly" }).pipe(
    //       fs.createWriteStream("./files/temp/test.mp3")
    //     );

    //     song.on("finish", () => {
    //       $.sendMessage("Done");
    //       $.sendAudio({ path: "./files/temo/test.mp3" });
    //     });
    //   } else
    //     return this._localization.forUser(id).then(phrases => {
    //       $.sendMessage(phrases.linkNotYT);
    //     });
    // }

    // function checkURL(url) {
    //   if (downloader.validateURL(url)) return true;
    //   else return false;
    // }
  }

  get routes() {
    return {
      downloadCommand: "downloadHandler",
    };
  }
}

module.exports = DownloadController;
