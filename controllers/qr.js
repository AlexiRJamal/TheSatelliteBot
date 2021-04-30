/**
 * @author Alexi Jamal
 *
 * @description
 * This file is the handler for the /qr request
 * It recieves a string data then converts it into a qr code randomly generated.
 */

"use strict";

const Telegram = require("telegram-node-bot");
const qr = require("qr-image");
const fs = require("fs");

class QRController extends Telegram.TelegramBaseController {
  qrHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    let userMsg = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    let qrGen, qrCap;
    this._localization.forUser(id).then(phrases => {
      qrGen = phrases.qrGen;
      qrCap = phrases.qrCap;
    });
    if (!userMsg) {
      $.sendMessage("Send the string you want to convert to QR");
      $.waitForRequest.then($ => {
        let qrString = $.message.text;
        let qrPNG = qr.image(qrString, { type: "png" });
        qrPNG.pipe(fs.createWriteStream("qrGen.png"));
        $.sendMessage(qrGen);
        setTimeout(() => {
          $.sendPhoto(
            { path: "./qrGen.png" },
            {
              caption: qrCap + "\nData: " + qrString
            }
          );
        }, 2000);
      });
      console.log(
        `/qr request was made by ${name}, username: ${username}, string: ${userMsg}`
      );
    } else {
      let qrPNG = qr.image(userMsg, { type: "png" });
      qrPNG.pipe(fs.createWriteStream("qrGen.png"));
      $.sendMessage(qrGen);
      setTimeout(() => {
        $.sendPhoto(
          { path: "./qrGen.png" },
          {
            caption: qrCap + "\nData: " + qrString
          }
        );
      }, 2000);
      console.log(
        `/qr request was made by ${name}, username: ${username}, string: ${userMsg}`
      );
    }
  }

  get routes() {
    return {
      qrCommand: "qrHandler"
    };
  }
}

module.exports = QRController;
