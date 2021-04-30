exports.cap_First = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

exports.noData = () => {
  return "You're not a user yet. Please send /start.";
};

//!NOT READY FOR USAGE YET!

exports.download = (link, name) => {
  const http = require("http");
  const fs = require("fs");

  let file = fs.createWriteStream(`${name}.wav`);
  let request = http.get(link, (response) => {
    response.pipe(file);
    file.on("finish", () => {
      console.log("File saved");
      return true;
    });
    file.on("error", (err) => {
      fs.unlink(`${name}.wav`);
      console.log(err);
      return false;
    });
  });
};

exports.getAFK = (seconds, username) => {
  let hour = seconds / 3600;
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  if (min < 1) return `User @${username} is back after ${sec} seconds.`;
  else if (hour < 1)
    return `User @${username} is back after ${min} minutes and ${sec} seconds.`;
  else
    return `User @${username} is back after ${hour} hours and ${min} minutes and ${sec} seconds.`;
};
