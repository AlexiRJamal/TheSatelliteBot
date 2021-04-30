/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /math requests
 */

const Telegram = require("telegram-node-bot");
const sharedModule = require("../exports/shared");

class MathController extends Telegram.TelegramBaseController {
  mathHandler($) {
    let id = parseInt($.message.from.id);
    let param = "";
    let sumReq = "",
      subReq = "",
      multReq = "",
      divReq = "";

    let sumSen = "",
      subSen = "",
      multSen = "",
      divSen = "";

    let mathErr = "",
      mathZero = "";

    this._localization
      .forUser(id)
      .then(phrases => {
        param = phrases.mathParam;
        sumReq = phrases.sumRequest;
        subReq = phrases.subRequest;
        multReq = phrases.multRequest;
        divReq = phrases.divRequest;
        sumSen = phrases.sumSentence;
        subSen = phrases.subSentence;
        multSen = phrases.multSentence;
        divSen = phrases.divSentence;
        mathErr = phrases.mathErr;
        mathZero = phrases.mathZero;

        $.runInlineMenu({
          layout: 2,
          method: "sendMessage",
          params: [param],
          menu: [
            {
              text: sumSen,
              callback: () => {
                $.sendMessage(sumReq);
                $.waitForRequest.then($ => {
                  let userNums = $.message.text.split(" ").map(parseFloat);
                  sumNums(userNums);
                });
              }
            },
            {
              text: subSen,
              callback: () => {
                $.sendMessage(subReq);
                $.waitForRequest.then($ => {
                  let userNums = $.message.text.split(" ").map(parseFloat);
                  subNums(userNums);
                });
              }
            },
            {
              text: multSen,
              callback: () => {
                $.sendMessage(multReq);
                $.waitForRequest.then($ => {
                  let userNums = $.message.text.split(" ").map(parseFloat);
                  multNums(userNums);
                });
              }
            },
            {
              text: divSen,
              callback: () => {
                $.sendMessage(divReq);
                $.waitForRequest.then($ => {
                  let userNums = $.message.text.split(" ").map(parseFloat);
                  divNums(userNums);
                });
              }
            }
          ]
        });

        function sumNums(nums) {
          let sum = 0;
          if (validateArray(nums)) {
            for (let i = 0; i < nums.length; i++) {
              sum += nums[i];
            }
            return $.sendMessage(sum);
          } else return $.sendMessage(mathErr);
        }

        function subNums(nums) {
          if (validateArray(nums)) {
            let sub = nums[0];
            for (let i = 1; i < nums.length; i++) {
              sub -= nums[i];
            }
            return $.sendMessage(sub);
          } else return $.sendMessage(mathErr);
        }

        function multNums(nums) {
          let mult = 1;
          if (validateArray(nums)) {
            for (let i = 0; i < nums.length; i++) {
              mult *= nums[i];
            }
            return $.sendMessage(mult);
          } else return $.sendMessage(mathErr);
        }

        function divNums(nums) {
          if (validateArray(nums)) {
            if (nums[0] == 0) return $.sendMessage(mathZero);
            else {
              let div = nums[0];
              for (let i = 1; i < nums.length; i++) {
                div /= nums[i];
              }
              return $.sendMessage(div);
            }
          } else return $.sendMessage(mathErr);
        }

        function validateArray(arr) {
          for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) return false;
          }
          return true;
        }
      })
      .catch(err => {
        $.sendMessage(sharedModule.noData());
      });
  }

  get routes() {
    return {
      mathCommand: "mathHandler"
    };
  }
}

module.exports = MathController;
