/**
 * @author Alexi Jamal
 *
 * @description
 * This file handles all /lyricPrecise requests
 */

const Telegram = require("telegram-node-bot");
const lyricsModule = require("../exports/lyrics");
//const lyric = require("lyric-get");

class LyricPrecise extends Telegram.TelegramBaseController {
  lyricPreciseHandler($) {
    $.sendMessage("To be edited later because of bugs");
    // let id = parseInt($.message.from.id);
    // let userSong = $.message.text.split(" ").slice(1).join(" ");
    // if (!userSong) {
    //   this._localization.forUser(id).then((phrases) => {
    //     $.sendMessage(phrases.lyricPreciseRequestSong);
    //     $.waitForRequest.then(($) => {
    //       let userSong = $.message.text;
    //       $.sendMessage(phrases.lyricPreciseRequestArtist);
    //       $.waitForRequest.then(($) => {
    //         let userArtist = $.message.text;
    //         $.sendMessage(
    //           `Searching for ${lyricsModule.capFirst(
    //             userSong
    //           )} by ${lyricsModule.capFirst(userArtist)}`
    //         );
    //         lyric.get(userArtist, userSong, (err, songData) => {
    //           if (err) $.sendMessage("An error has occured :/");
    //           else {
    //             if (
    //               lyricsModule.capFirst(userArtist) ===
    //               lyricsModule.checkArtist(userArtist)
    //             ) {
    //               $.sendMessage("Hey! The artist is my creator's favorite!");
    //               $.sendMessage(
    //                 `Song by *${lyricsModule.capFirst(
    //                   userArtist
    //                 )}*\n\n${songData}`
    //               );
    //             } else {
    //               $.sendMessage(
    //                 `Song by *${lyricsModule.capFirst(
    //                   userArtist
    //                 )}*\n\n${songData}`
    //               );
    //             }
    //           }
    //         });
    //       });
    //     });
    //   });
    // } else {
    //   this._localization.forUser(id).then(($) => {
    //     $.sendMessage(phrases.lyricPreciseRequestArtist);
    //     $.waitForRequest.then(($) => {
    //       let userArtist = $.message.text;
    //       $.sendMessage(
    //         `Searching for ${lyricsModule.capFirst(
    //           userSong
    //         )} by ${lyricsModule.capFirst(userArtist)}`
    //       );
    //       lyric.get(userArtist, userSong, (err, songData) => {
    //         if (err) $.sendMessage("An error has occured :/");
    //         else {
    //           if (
    //             lyricsModule.capFirst(userArtist) ===
    //             lyricsModule.checkArtist(userArtist)
    //           ) {
    //             $.sendMessage("Hey! The artist is my creator's favorite!");
    //             $.sendMessage(
    //               `Song by *${lyricsModule.capFirst(
    //                 userArtist
    //               )}*\n\n${songData}`
    //             );
    //           } else {
    //             $.sendMessage(
    //               `Song by *${lyricsModule.capFirst(
    //                 userArtist
    //               )}*\n\n${songData}`
    //             );
    //           }
    //         }
    //       });
    //     });
    //   });
    // }
  }

  get routes() {
    return {
      lyricPreciseCommand: "lyricPreciseHandler",
    };
  }
}

module.exports = LyricPrecise;
