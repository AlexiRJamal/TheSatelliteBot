"use strict";

const Telegram = require("telegram-node-bot");
const TOKEN = require("../tokens/weather");
const weather = require("openweather-node");
const logger = require("../exports/log");
const sharedModule = require("../exports/shared");

weather.setAPPID(TOKEN.getToken());

weather.setForecastType("daily");

class WeatherController extends Telegram.TelegramBaseController {
  /**
   * @param {Scope} $
   */
  weatherHandler($) {
    let id = parseInt($.message.from.id);
    let name = $.message.from.firstName;
    let username = $.message.from.username;
    let cityloc = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    let cityReq, weatherErr, tempFinal, extend;
    this._localization
      .forUser(id)
      .then(phrases => {
        cityReq = phrases.weatherRequest;
        weatherErr = phrases.weatherError;
        tempFinal = phrases.weatherSuccess;
        extend = phrases.weatherSuccessExtend;
        if (!cityloc) {
          $.sendMessage(cityReq);
          $.waitForRequest.then($ => {
            var citylocsent = `${$.message.text}`;
            try {
              weather.now(citylocsent, function(err, aData) {
                if (err) {
                  $.sendMessage(weatherErr);
                  console.log(err);
                  throw err;
                } else {
                  var res = aData.getDegreeTemp().temp;
                  var toSend = res.toFixed(1);
                  $.sendMessage(tempFinal + toSend + "C°\n" + extend);
                }
              });
            } catch (error) {
              $.sendMessage(weatherErr);
              logger.log(
                `Error in weather: username: ${username}. Error: ${error}`
              );
              console.log(
                `Error in weather: username: ${username}. Error: ${error}`
              );
            }
            logger.log(
              `/weather request was made by ${name}, username: ${username}, city: ${citylocsent}`
            );
            console.log(
              `/weather request was made by ${name}, username: ${username}, city: ${citylocsent}`
            );
          });
        } else {
          weather.now(cityloc, function(err, aData) {
            if (err) {
              $.sendMessage(weatherErr);
              console.log(err);
            } else {
              var res = aData.getDegreeTemp().temp;
              var toSend = res.toFixed(1);
              $.sendMessage(tempFinal + toSend + "C°\n" + extend);
            }
          });
          logger.log(
            `/weather request was made by ${name}, username: ${username}, city: ${cityloc}`
          );
          console.log(
            `/weather request was made by ${name}, username: ${username}, city: ${cityloc}`
          );
        }
      })
      .catch(err => {
        $.sendMessage(sharedModule.noData());
      });
  }

  wExtendHandler($) {
    let cityloc = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    if (!cityloc) {
      $.sendMessage("Send me your city");
      $.waitForRequest.then($ => {
        var citylocsent = `${$.message.text}`;
        weather.now(citylocsent, function(err, aData) {
          var res = aData.getDegreeTemp().temp;
          var toSend = res.toFixed(1);
          var resf = aData.getFahrenheitTemp().temp;
          var toSendf = resf.toFixed(1);
          var resk = aData.getKelvinTemp().temp;
          var toSendk = resk.toFixed(1);
          if (err) {
            $.sendMessage("Can't retrieve weather now.");
            console.log(err);
          } else {
            $.sendMessage(
              "Tempreature is: " +
                toSend +
                "°C" +
                "\nIn Fahrenheit: " +
                toSendf +
                "°F" +
                "\nIn Kelvin: " +
                toSendk +
                "°K" +
                "\nWind speed: " +
                aData.values.wind.speed +
                " with a " +
                aData.values.wind.deg +
                "° in elevation" +
                "\nHumidity: " +
                aData.values.main.humidity +
                "\nCity is " +
                citylocsent +
                " with a country code located in " +
                aData.values.sys.country +
                ", which is above sea level by " +
                aData.values.main.sea_level +
                " and above ground level by " +
                aData.values.main.grnd_level +
                "\nClouds: " +
                aData.values.clouds.all +
                "\nCity id (for more accurate searches): " +
                aData.values.id
            );
          }
        });
      });
    } else {
      weather.now(cityloc, function(err, aData) {
        var res = aData.getDegreeTemp().temp;
        var toSend = res.toFixed(1);
        var resf = aData.getFahrenheitTemp().temp;
        var toSendf = resf.toFixed(1);
        var resk = aData.getKelvinTemp().temp;
        var toSendk = resk.toFixed(1);
        if (err) {
          $.sendMessage("Can't retrieve weather now.");
          console.log(err);
        } else {
          $.sendMessage(
            "Tempreature is: " +
              toSend +
              "°C" +
              "\nIn Fahrenheit: " +
              toSendf +
              "°F" +
              "\nIn Kelvin: " +
              toSendk +
              "°K" +
              "\nWind speed: " +
              aData.values.wind.speed +
              " with a " +
              aData.values.wind.deg +
              "° in elevation" +
              "\nHumidity: " +
              aData.values.main.humidity +
              "\nCity is " +
              cityloc +
              " with a country code located in " +
              aData.values.sys.country +
              ", which is above sea level by " +
              aData.values.main.sea_level +
              " and above ground level by " +
              aData.values.main.grnd_level +
              "\nClouds: " +
              aData.values.clouds.all +
              "\nCity (for more accurate searches): " +
              aData.values.id
          );
        }
      });
    }
  }

  get routes() {
    return {
      weatherCommand: "weatherHandler",
      wExtendCommand: "wExtendHandler"
    };
  }
}
module.exports = WeatherController;
