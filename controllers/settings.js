/**
 * @author Alexi Jamal
 *
 * @description
 * Each user has a customized setting.
 */

"use strict";

const Telegram = require("telegram-node-bot");
const fs = require("fs");
const logger = require("../exports/log");
const sharedModule = require("../exports/shared");

class SettingsController extends Telegram.TelegramBaseController {
  settingsHandler($) {
    let id = parseInt($.message.from.id);
    let user = require(`../files/users/${id}.json`);
    let name = $.message.from.username;

    let state_wotd = "",
      state_noti = "",
      settingsParam = "",
      langSen = "",
      langText = "",
      wotdSen = "",
      wotdText = "",
      notiSen = "",
      notiText = "",
      wotdNotiTrue = "",
      wotdNotiFalse = "",
      wotdChangeTrue = "",
      wotdChangeFalse = "";

    this._localization
      .forUser(id)
      .then(phrases => {
        settingsParam = phrases.settingsParam;
        langSen = phrases.settingsMenuLangSentence;
        langText = phrases.settingsMenuLangText;
        wotdSen = phrases.settingsMenuWOTDSentence;
        wotdText = phrases.settingsMenuWOTDText;
        notiSen = phrases.settingsMenuNotiSentence;
        notiText = phrases.settingsMenuNotiText;
        wotdNotiTrue = phrases.noti_change_true;
        wotdNotiFalse = phrases.noti_change_false;
        wotdChangeTrue = phrases.wotd_change_true;
        wotdChangeFalse = phrases.wotd_change_false;

        if (user.wotd === true) state_wotd = phrases.state_wotd_true;
        else state_wotd = phrases.state_wotd_false;

        if (user.noti === true) state_noti = phrases.state_noti_true;
        else state_noti = phrases.state_noti_false;

        $.runInlineMenu({
          layout: 2,
          method: "sendMessage",
          params: [settingsParam],
          menu: [
            {
              text: langSen,
              message: langText,
              layout: 2,
              menu: [
                {
                  text: "English",
                  callback: () => {
                    this._localization.setLanguageForUser(id, "En");
                    this._localization.forUser(id).then(phrases => {
                      $.sendMessage(phrases.langChanged);
                    });
                    logger.log(`User ${name} has changed language to English`);
                    console.log(`User ${name} has changed language to English`);
                  }
                },
                {
                  text: "العربية",
                  callback: () => {
                    this._localization.setLanguageForUser(id, "Ar");
                    this._localization.forUser(id).then(phrases => {
                      $.sendMessage(phrases.langChanged);
                    });
                    logger.log(`User ${name} has changed language to Arabic`);
                    console.log(`User ${name} has changed language to Arabic`);
                  }
                },
                {
                  text: "Руский 🇷🇺",
                  callback: () => {
                    this._localization.setLanguageForUser(id, "Ru");
                    this._localization.forUser(id).then(phrases => {
                      $.sendMessage(phrases.langChanged);
                    });
                    logger.log(`User ${name} has changed language to Russian`);
                    console.log(`User ${name} has changed language to Russian`);
                  }
                },
                {
                  text: "Ελληνικα 🇬🇷",
                  callback: () => {
                    this._localization.setLanguageForUser(id, "Gr");
                    this._localization.forUser(id).then(phrases => {
                      $.sendMessage(phrases.langChanged);
                    });
                    logger.log(`User ${name} has changed language to Greek`);
                    console.log(`User ${name} has changed language to Greek`);
                  }
                }
              ]
            },
            {
              text: wotdSen,
              message: wotdText,
              menu: [
                {
                  text: state_wotd,
                  callback: () => {
                    if (state_wotd === "Off") {
                      $.sendMessage(wotdChangeTrue);
                      user.wotd = true;
                    } else {
                      $.sendMessage(wotdChangeFalse);
                      user.wotd = false;
                    }
                  }
                }
              ]
            },
            {
              text: notiSen,
              message: notiText,
              menu: [
                {
                  text: state_noti,
                  callback: () => {
                    if (state_noti === "Off") {
                      $.sendMessage(wotdNotiTrue);
                      user.noti = true;
                    } else {
                      $.sendMessage(wotdNotiFalse);
                      user.noti = false;
                    }
                  }
                }
              ]
            }
          ]
        });
      })
      .catch(err => {
        $.sendMessage(sharedModule.noData());
      });
  }

  get routes() {
    return {
      settingsCommand: "settingsHandler"
    };
  }
}

module.exports = SettingsController;
