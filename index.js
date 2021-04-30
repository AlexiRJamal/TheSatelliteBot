/**
 * @author Alexi Jamal
 *
 *
 * @version 2.5.0
 * @description
 * This bot allows the users to access an enormous range of commands to facilitate their daily
 * lives inside the chat app Telegram.
 *
 */

//? Should be using instant require?

//-----------------------------------------------------------------------------------------
//*                                 START OF THE BOT
//-----------------------------------------------------------------------------------------
"use strict";

/**
 * @constant TOKEN
 * Instead of saving the tokens, I require them.
 *
 * @constant {Telegram}
 * Main library
 *
 * @param {REQUIRES} English
 * @param {REQUIRES} Arabic
 * @param {REQUIRES} Russian
 * @param {REQUIRES} Greek
 * Each language created.
 *
 * @constant {Telegram} bot
 * The main middleware to handle everything
 */

const TOKEN = require("./tokens/telegram");
const Telegram = require("telegram-node-bot");
//const PersistentMemoryStorage = require("./adapters/PersistentMemoryStorage");

//const storage = new PersistentMemoryStorage(path, path);
let English, Arabic, Russian, Greek;
English = require("./locales/en.json");
Arabic = require("./locales/ar.json");
Russian = require("./locales/ru.json");
Greek = require("./locales/gr.json");

//*Create the bot
const bot = new Telegram.Telegram(TOKEN.getToken(), {
  workers: 2,
  localization: [English, Arabic, Russian, Greek]
});

//Reference constants
const startController = require("./controllers/start");
const todoController = require("./controllers/todo");
const qrController = require("./controllers/qr");
const weatherController = require("./controllers/weather");
const defineController = require("./controllers/define");
const settingsController = require("./controllers/settings");
const lyricsController = require("./controllers/lyrics");
const lyricPreciseController = require("./controllers/lyricPrecise");
const bugController = require("./controllers/bug");
const decideController = require("./controllers/decide");
const lmgtfyController = require("./controllers/lmgtfy");
const catsController = require("./controllers/cats");
const flagController = require("./controllers/flag");
const wotdController = require("./controllers/wotd");
const easterEggsController = require("./controllers/eg");
const morseController = require("./controllers/morse");
const helpController = require("./controllers/help");
const nativeController = require("./controllers/native");
const aboutController = require("./controllers/about");
const contactController = require("./controllers/contact");
const telCodeController = require("./controllers/telcode");
const generateController = require("./controllers/generate");
const downloadController = require("./controllers/download");
const convertController = require("./controllers/convert");
const warnController = require("./controllers/warn");
const wikiController = require("./controllers/wiki");
const googleController = require("./controllers/google");
const remindController = require("./controllers/remind");
const excuseController = require("./controllers/excuse");
const mathController = require("./controllers/math");
const pingController = require("./controllers/ping");
const movieController = require("./controllers/movie");
const afkController = require("./controllers/afk");
const shoutController = require("./controllers/shout");
const whisperController = require("./controllers/whisper");
const logsController = require("./sendLogs");
const otherwiseController = require("./controllers/otherwise");

//Controllers objects
const startCtrl = new startController();
const todoCtrl = new todoController();
const qrCtrl = new qrController();
const weatherCtrl = new weatherController();
const defineCtrl = new defineController();
const lyricsCtrl = new lyricsController();
const lyricPreciseCtrl = new lyricPreciseController();
const settingsCtrl = new settingsController();
const decideCtrl = new decideController();
const lmgtfyCtrl = new lmgtfyController();
const catsCtrl = new catsController();
const flagCtrl = new flagController();
const wotdCtrl = new wotdController();
const egCtrl = new easterEggsController();
const morseCtrl = new morseController();
const helpCtrl = new helpController();
const nativeCtrl = new nativeController();
const aboutCtrl = new aboutController();
const contactCtrl = new contactController();
const bugCtrl = new bugController();
const telCodeCtrl = new telCodeController();
const generateCtrl = new generateController();
const downloadCtrl = new downloadController();
const convertCtrl = new convertController();
const warnCtrl = new warnController();
const wikiCtrl = new wikiController();
const googleCtrl = new googleController();
const remindCtrl = new remindController();
const excuseCtrl = new excuseController();
const pingCtrl = new pingController();
const mathCtrl = new mathController();
const movieCtrl = new movieController();
const afkCtrl = new afkController();
const shoutCtrl = new shoutController();
const whisperCtrl = new whisperController();
const logsCtrl = new logsController();

//-----------------------------------------------------------------------------------------
//?                           START OF TEXT COMMANDS
//-----------------------------------------------------------------------------------------
bot.router
  .when(new Telegram.TextCommand("/add", "addCommand"), todoCtrl)
  .when(new Telegram.TextCommand("/get", "getCommand"), todoCtrl)
  .when(new Telegram.TextCommand("/remove", "removeCommand"), todoCtrl)
  .when(new Telegram.TextCommand("/start", "startCommand"), startCtrl)
  .when(new Telegram.TextCommand("/qr", "qrCommand"), qrCtrl)
  .when(new Telegram.TextCommand("/weather", "weatherCommand"), weatherCtrl)
  .when(new Telegram.TextCommand("/wExtend", "wExtendCommand"), weatherCtrl)
  .when(new Telegram.TextCommand("/lyrics", "lyricsCommand"), lyricsCtrl)
  .when(
    new Telegram.TextCommand("/lyricprecise", "lyricPreciseCommand"),
    lyricPreciseCtrl
  )
  .when(new Telegram.TextCommand("/define", "defineCommand"), defineCtrl)
  .when(new Telegram.TextCommand("/bug", "bugCommand"), bugCtrl)
  .when(new Telegram.TextCommand("/settings", "settingsCommand"), settingsCtrl)
  .when(new Telegram.TextCommand("/decide", "decideCommand"), decideCtrl)
  .when(new Telegram.TextCommand("/lmgtfy", "lmgtfyCommand"), lmgtfyCtrl)
  .when(new Telegram.TextCommand("/cats", "catsCommand"), catsCtrl)
  .when(new Telegram.TextCommand("/flag", "flagCommand"), flagCtrl)
  .when(new Telegram.TextCommand("/wotd", "wotdCommand"), wotdCtrl)
  .when(new Telegram.TextCommand("/morse", "morseCommand"), morseCtrl)
  .when(new Telegram.TextCommand("/help", "helpCommand"), helpCtrl)
  .when(new Telegram.TextCommand("/native", "nativeCommand"), nativeCtrl)
  .when(new Telegram.TextCommand("/about", "aboutCommand"), aboutCtrl)
  .when(new Telegram.TextCommand("/contact", "contactCommand"), contactCtrl)
  .when(new Telegram.TextCommand("/telcode", "telcodeCommand"), telCodeCtrl)
  .when(new Telegram.TextCommand("/generate", "generateCommand"), generateCtrl)
  .when(new Telegram.TextCommand("/download", "downloadCommand"), downloadCtrl)
  .when(new Telegram.TextCommand("/dl", "downloadCommand"), downloadCtrl)
  .when(new Telegram.TextCommand("/convert", "convertCommand"), convertCtrl)
  .when(new Telegram.TextCommand("/wiki", "wikiCommand"), wikiCtrl)
  .when(new Telegram.TextCommand("/google", "googleCommand"), googleCtrl)
  .when(new Telegram.TextCommand("/remind", "remindCommand"), remindCtrl)
  .when(new Telegram.TextCommand("/excuse", "excuseCommand"), excuseCtrl)
  .when(new Telegram.TextCommand("/math", "mathCommand"), mathCtrl)
  .when(new Telegram.TextCommand("/ping", "pingCommand"), pingCtrl)
  .when(new Telegram.TextCommand("/movie", "movieCommand"), movieCtrl)
  .when(new Telegram.TextCommand("/afk", "afkCommand"), afkCtrl)
  .when(new Telegram.TextCommand("/shout", "shoutCommand"), shoutCtrl)
  .when(new Telegram.TextCommand("/whisper", "whisperCommand"), whisperCtrl)
  .when(new Telegram.TextCommand("/requestLogs", "sendLogsCommand"), logsCtrl)
  .when(new Telegram.TextCommand(["/warn"], "warnCommand"), warnCtrl)

  //? Easter Eggs
  .when(new Telegram.TextCommand("We were on a break", "wewereCommand"), egCtrl)
  .when(new Telegram.TextCommand("In London", "londonCommand"), egCtrl)
  .when(new Telegram.TextCommand("Emma", "emmaCommand"), egCtrl)
  .when(new Telegram.TextCommand("My eyes", "myEyesCommand"), egCtrl)
  .when(new Telegram.TextCommand("Gladys", "gladysCommand"), egCtrl)
  .when(new Telegram.TextCommand("Annulment", "annulmentCommand"), egCtrl)
  .otherwise(new otherwiseController());
