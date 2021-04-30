/**
 * @author Alexi Jamal
 *
 * @description
 * This file handles all for /forecast requests
 */

"use strict";

//const Telegram = require("telegram-node-bot");
const weather = require("openweather-node");
const TOKEN = require("../tokens/weather");

weather.setAPPID(TOKEN.getToken());
weather.setCulture("en");
weather.setForecastType("daily");

weather.forecast("Homs", (err, aData) => {
  if (err) console.log(err);
  else console.log(aData);
});
