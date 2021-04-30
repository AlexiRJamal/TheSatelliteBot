/**
 * @author Alexi Jamal
 *
 * @description
 * This file acts as the main handler for all /convert requests
 */

"use strict";

const Telegram = require("telegram-node-bot");
const convertModule = require("../exports/convert");
const logger = require("../exports/log");
//const sharedModule = require('../exports/shared')

class ConvertController extends Telegram.TelegramBaseController {
  convertHandler($) {
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    logger.log(
      `/convert request was made by "${name}", username: @${username}`
    );
    console.log(
      `/convert request was made by "${name}", username: @${username}`
    );
    $.runInlineMenu({
      layout: 2,
      method: "sendMessage",
      params: [
        "Imperial system is tricky, Metric rules!!\nWhat do you want to convert to/from?"
      ],
      menu: [
        {
          text: "Metric to Imperial",
          message: "What units?",
          layout: 2,
          menu: [
            {
              text: "Kilometers to Miles",
              callback: () => {
                $.sendMessage("Send me the speed in Kilometers");
                $.waitForRequest.then($ => {
                  let km = $.message.text;
                  $.sendMessage(convertModule.km_to_mi(km));
                });
              }
            },
            {
              text: "Kilometers to Feet",
              callback: () => {
                $.sendMessage("Send me the speed in Kilometers");
                $.waitForRequest.then($ => {
                  let km = $.message.text;
                  $.sendMessage(convertModule.km_to_ft(km));
                });
              }
            },
            {
              text: "Meters to Feet",
              callback: () => {
                $.sendMessage("Send the distance in Meters");
                $.waitForRequest.then($ => {
                  let m = $.message.text;
                  $.sendMessage(convertModule.m_to_ft(m));
                });
              }
            },
            {
              text: "Centimeters to Inches",
              callback: () => {
                $.sendMessage("Send the length in centimeters");
                $.waitForRequest.then($ => {
                  let cm = $.message.text;
                  $.sendMessage(convertModule.cm_to_in(cm));
                });
              }
            },
            {
              text: "Millimeteres to Inches",
              callback: () => {
                $.sendMessage("Send the length in Millimeters");
                $.waitForRequest.then($ => {
                  let mm = $.message.text;
                  $.sendMessage(convertModule.mm_to_in(mm));
                });
              }
            },
            {
              text: "Liters to Quartz",
              callback: () => {
                $.sendMessage("Send the size in Liters");
                $.waitForRequest.then($ => {
                  let l = $.message.text;
                  $.sendMessage(convertModule.lt_to_qz(l));
                });
              }
            },
            {
              text: "Liters to Quartz",
              callback: () => {
                $.sendMessage("Send the size in Liters");
                $.waitForRequest.then($ => {
                  let l = $.message.text;
                  $.sendMessage(convertModule.lt_to_gl(l));
                });
              }
            },
            {
              text: "Milliliters to Cups",
              callback: () => {
                $.sendMessage("Send the size in Milliliters");
                $.waitForRequest.then($ => {
                  let ml = $.message.text;
                  $.sendMessage(convertModule.ml_to_cu(ml));
                });
              }
            },
            {
              text: "Milliliters to Ounces",
              callback: () => {
                $.sendMessage("Send the size in Milliliters");
                $.waitForRequest.then($ => {
                  let ml = $.message.text;
                  $.sendMessage(convertModule.ml_to_oz(ml));
                });
              }
            },
            {
              text: "Celsius to Fahrenheit",
              callback: () => {
                $.sendMessage("Send the tempreature in Celsius");
                $.waitForRequest.then($ => {
                  let c = $.message.text;
                  $.sendMessage(convertModule.c_to_f(c));
                });
              }
            },
            {
              text: "Kilograms to Pounds",
              callback: () => {
                $.sendMessage("Send the weight in Kilograms");
                $.waitForRequest.then($ => {
                  let kg = $.message.text;
                  $.sendMessage(convertModule.kg_to_p(kg));
                });
              }
            },
            {
              text: "Grams to Ounces",
              callback: () => {
                $.sendMessage("Send the weight in Grams");
                $.waitForRequest.then($ => {
                  let g = $.message.text;
                  $.sendMessage(convertModule.g_to_oz(g));
                });
              }
            },
            {
              text: "Grams to Pounds",
              callback: () => {
                $.sendMessage("Send the weight in Grams");
                $.waitForRequest.then($ => {
                  let g = $.message.text;
                  $.sendMessage(convertModule.g_to_p(g));
                });
              }
            },
            {
              text: "Milligrams to Ounces",
              callback: () => {
                $.sendMessage("Send the weight in Milligrams");
                $.waitForRequest.then($ => {
                  let mg = $.message.text;
                  $.sendMessage(convertModule.mg_to_oz(mg));
                });
              }
            }
          ]
        },
        {
          text: "Imperial to Metric",
          message: "What units?",
          layout: 2,
          menu: [
            {
              text: "Fahrenheit to Celsius",
              callback: () => {
                $.sendMessage("Send me the tempreature in Fahrenheit");
                $.waitForRequest.then($ => {
                  let f = $.message.text;
                  $.sendMessage(convertModule.f_to_c(f));
                });
              }
            },
            {
              text: "Inches to Meters",
              callback: () => {
                $.sendMessage("Send me the length in Inches");
                $.waitForRequest.then($ => {
                  let inc = $.message.text;
                  $.sendMessage(convertModule.in_to_m(inc));
                });
              }
            },
            {
              text: "Inches to Centimeters",
              callback: () => {
                $.sendMessage("Send me the length in Inches");
                $.waitForRequest.then($ => {
                  let cm = $.message.text;
                  $.sendMessage(convertModule.in_to_cm(cm));
                });
              }
            },
            {
              text: "Inches to Mellimeters",
              callback: () => {
                $.sendMessage("Send me the length in Inches");
                $.waitForRequest.then($ => {
                  let inc = $.message.text;
                  $.sendMessage(convertModule.in_to_mm(inc));
                });
              }
            },
            {
              text: "Feet to Meters",
              callback: () => {
                $.sendMessage("Send me the length in Feet");
                $.waitForRequest.then($ => {
                  let ft = $.message.text;
                  $.sendMessage(convertModule.ft_to_m(ft));
                });
              }
            },
            {
              text: "Yards to Meters",
              callback: () => {
                $.sendMessage("Send me the length in Yards");
                $.waitForRequest.then($ => {
                  let yd = $.message.text;
                  $.sendMessage(convertModule.y_to_m(yd));
                });
              }
            },
            {
              text: "Yards to Kilometers",
              callback: () => {
                $.sendMessage("Send me the length in Yards");
                $.waitForRequest.then($ => {
                  let yd = $.message.text;
                  $.sendMessage(convertModule.y_to_km(yd));
                });
              }
            },
            {
              text: "Miles to Kilometers",
              callback: () => {
                $.sendMessage("Send me the length in Miles");
                $.waitForRequest.then($ => {
                  let m = $.message.text;
                  $.sendMessage(convertModule.mi_to_km(m));
                });
              }
            },
            {
              text: "Ounces to Melliliteres",
              callback: () => {
                $.sendMessage("Send me the volume in Ounces");
                $.waitForRequest.then($ => {
                  let oz = $.message.text;
                  $.sendMessage(convertModule.oz_to_ml(oz));
                });
              }
            },
            {
              text: "Cups to Melliliteres",
              callback: () => {
                $.sendMessage("Send me the volume in Cups");
                $.waitForRequest.then($ => {
                  let cu = $.message.text;
                  $.sendMessage(convertModule.cu_to_ml(cu));
                });
              }
            },
            {
              text: "Quartz to Literes",
              callback: () => {
                $.sendMessage("Send me the volume in Ounces");
                $.waitForRequest.then($ => {
                  let ou = $.message.text;
                  $.sendMessage(convertModule.qz_to_lt(ou));
                });
              }
            },
            {
              text: "Ounces to Milligrams",
              callback: () => {
                $.sendMessage("Send me the volume in Ounces");
                $.waitForRequest.then($ => {
                  let ou = $.message.text;
                  $.sendMessage(convertModule.oz_to_ml(ou));
                });
              }
            },
            {
              text: "Ounces to Grams",
              callback: () => {
                $.sendMessage("Send me the volume in Ounces");
                $.waitForRequest.then($ => {
                  let ou = $.message.text;
                  $.sendMessage(convertModule.oz_to_g(ou));
                });
              }
            },
            {
              text: "Pounds to Kilograms",
              callback: () => {
                $.sendMessage("Send me the weight in Pounds");
                $.waitForRequest.then($ => {
                  let p = $.message.text;
                  $.sendMessage(convertModule.p_to_kg(p));
                });
              }
            }
          ]
        }
      ]
    });
  }

  get routes() {
    return {
      convertCommand: "convertHandler"
    };
  }
}

module.exports = ConvertController;
