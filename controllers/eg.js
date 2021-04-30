/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for everything about easter eggs
 */

const Telegram = require("telegram-node-bot");
const friendsModule = require("../exports/friends");
const logger = require("../exports/log");

class EasterEggsController extends Telegram.TelegramBaseController {
  wewereHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(
      `We were on a break request was made by ${name}, username: @${username}`
    );
    console.log(
      `We were on a break request was made by ${name}, username: @${username}`
    );
    $.sendMessage(friendsModule.weWereOnABreak(), { parse_mode: "Markdown" });
    setTimeout(() => {
      $.sendChatAction("record_audio");
    }, 2000);
    setTimeout(() => {
      $.sendAudio({ path: "./files/wwoab.ogg" });
    }, 6000);
  }

  londonHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`London request was made by ${name}, username: @${username}`);
    console.log(`London request was made by ${name}, username: @${username}`);
    $.sendMessage(friendsModule.inLondon(), { parse_mode: "Markdown" });
    setTimeout(() => {
      $.sendChatAction("record_audio");
    }, 2000);
    setTimeout(() => {
      $.sendAudio({ path: "./files/joey.ogg" });
    }, 6000);
  }

  myEyesHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`My eyes request was made by ${name}, username: @${username}`);
    console.log(`My eyes request was made by ${name}, username: @${username}`);
    $.sendMessage(friendsModule.myEyes(), { parse_mode: "Markdown" });
    setTimeout(() => {
      $.sendChatAction("record_audio");
    }, 2000);
    setTimeout(() => {
      $.sendAudio({ path: "./files/myeyes.ogg" });
    }, 6000);
  }

  emmaHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`Emma request was made by ${name}, username: @${username}`);
    console.log(`Emma request was made by ${name}, username: @${username}`);
    $.sendMessage(friendsModule.Emma(), { parse_mode: "Markdown" });
    setTimeout(() => {
      $.sendChatAction("record_audio");
    }, 2000);
    setTimeout(() => {
      $.sendAudio({ path: "./files/names.ogg" });
    }, 6000);
  }

  gladysHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`Gladys request was made by ${name}, username: @${username}`);
    console.log(`Gladys request was made by ${name}, username: @${username}`);
    $.sendMessage(friendsModule.gladys(), { parse_mode: "Markdown" });
    setTimeout(() => {
      $.sendChatAction("record_audio");
    }, 2000);
    setTimeout(() => {
      $.sendAudio({ path: "./files/gladys.ogg" });
    }, 6000);
  }

  annulmentHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(`Annulment request was made by ${name}, username: @${username}`);
    console.log(
      `Annulment request was made by ${name}, username: @${username}`
    );
    $.sendMessage(friendsModule.annulment(), { parse_mode: "Markdown" });
    setTimeout(() => {
      $.sendChatAction("record_audio");
    }, 2000);
    setTimeout(() => {
      $.sendAudio({ path: "./files/annulment.ogg" });
    }, 6000);
  }

  apothecaryHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(
      `Apothecary request was made by ${name}, username: @${username}`
    );
    console.log(
      `Apothecary request was made by ${name}, username: @${username}`
    );
    $.sendMessage(friendsModule.apothecary(), { parse_mode: "Markdown" });
    setTimeout(() => {
      $.sendChatAction("record_audio");
    }, 2000);
    setTimeout(() => {
      $.sendAudio();
    }, 6000);
  }

  bamboozledHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(
      `Bamboozled request was made by ${name}, username: @${username}`
    );
    console.log(
      `Bamboozled request was made by ${name}, username: @${username}`
    );
    $.sendMessage(friendsModule.bamboozled(), { parse_mode: "Markdown" });
    setTimeout(() => {
      $.sendChatAction("record_audio");
    }, 2000);
    setTimeout(() => {
      $.sendAudio({ path: "./files/bamboozled.ogg" });
    }, 6000);
  }

  get routes() {
    return {
      wewereCommand: "wewereHandler",
      londonCommand: "londonHandler",
      myEyesCommand: "myEyesHandler",
      emmaCommand: "emmaHandler",
      gladysCommand: "gladysHandler",
      annulmentCommand: "annulmentHandler",
      bamboozledCommand: "bamboozledHandler",
    };
  }
}

module.exports = EasterEggsController;
