/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /add, /remove, /get requests.
 */

"use strict";

const Telegram = require("telegram-node-bot");
const sharedModule = require("../exports/shared");

class TodoController extends Telegram.TelegramBaseController {
  addHandler($) {
    //Take the things after /add
    let todo = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    let id = parseInt($.message.from.id);

    this._localization
      .forUser(id)
      .then(phrases => {
        if (!todo) {
          $.sendMessage(phrases.todoAddRequest);
          $.waitForRequest.then($ => {
            let todo = $.message.text;
            $.getUserSession("todos").then(todos => {
              if (!Array.isArray(todos)) $.setUserSession("todos", [todo]);
              else $.setUserSession("todos", todos.concat([todo]));
              $.sendMessage(phrases.todoAddSuccess);
            });
          });
        } else {
          $.getUserSession("todos").then(todos => {
            if (!Array.isArray(todos)) $.setUserSession("todos", [todo]);
            else $.setUserSession("todos", todos.concat([todo]));
            $.sendMessage(phrases.todoAddSuccess);
          });
        }
      })
      .catch(err => {
        $.sendMessage(sharedModule.noData());
      });
  }

  getHandler($) {
    if (this._serializeList.length > 0) {
      $.getUserSession("todos").then(todos => {
        $.sendMessage(this._serializeList(todos), { parse_mode: "Markdown" });
      });
    } else {
      $.sendMessage("Your todos list is empty. Use /add to add new items.");
    }
  }

  removeHandler($) {
    let index = parseInt($.message.text.split(" ").slice(1)[0] - 1);
    let id = $.message.from.id;

    this._localization
      .forUser(id)
      .then(phrases => {
        if (isNaN(index))
          return $.sendMessage(phrases.todoRemoveIndexErr, {
            reply_to_message_id: $.message.messageId
          });

        $.getUserSession("todos").then(todos => {
          if (index >= todos.length)
            return $.sendMessage(phrases.todoRemoveIndexErr, {
              reply_to_message_id: $.message.messageId
            });
          todos.splice(index, 1);
          $.setUserSession("todos", todos);
          $.sendMessage(phrases.todoRemoveSuccess);
        });
      })
      .catch(err => {
        $.sendMessage(sharedModule.noData());
      });
  }

  get routes() {
    return {
      addCommand: "addHandler",
      getCommand: "getHandler",
      removeCommand: "removeHandler"
    };
  }
  _serializeList(todoList) {
    let counter = 1;
    let serialized = "*Your todos:*\n\n";
    todoList.forEach((t, i) => {
      serialized += `*${counter}. * ${t}\n`;
      counter++;
    });
    return serialized;
  }
}
module.exports = TodoController;
