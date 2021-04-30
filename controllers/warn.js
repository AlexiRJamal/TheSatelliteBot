/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /warn requests
 */

const Telegram = require("telegram-node-bot");
const users = require("../files/warns/warns.json");
const PATH = "../files/warns/warns.json";
const fs = require("fs");
const sharedModule = require("../exports/shared");

class WarnController extends Telegram.TelegramBaseController {
  warnHandler($) {
    // let id = parseInt($.message.from.id);
    // let userToWarn = $.message.text.split(" ").slice(1);

    // if (userToWarn[0].startsWith("@")) {
    // }
    $.sendMessage("Coming soon...");
  }

  get routes() {
    return {
      warnCommand: "warnHandler"
    };
  }
}

function searchWarns(userID) {
  for (let i = 0; i < users.length; i++) {
    if (users.id === userID) return users.warns;
    else return false;
  }
}

function warnUser(id) {
  let warns = searchWarns(id);
  if (warns == false) {
    createUser(id);
  } else {
    warn++;
  }
}

function unwarnUser(id) {}

function createUser(id) {
  let nb = 0;
  id = id;
  fs.readFile(users, "utf8", (err, data) => {
    if (err) throw err;
    else {
      let obj = JSON.parse(data);
      obj.table.push({ id: id, warns: nb });
      let json = JSON.stringify(obj);
      fs.writeFile(users, json, "utf8", err => {
        if (err) throw err;
      });
    }
  });
}

module.exports = WarnController;
