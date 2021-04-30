const fs = require("fs");

function checkMonth(month) {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
}

function checkHours(hour) {
  if (hour == 0) return 12;
  return hour;
}

exports.log = (text) => {
  let year = new Date().getFullYear();
  let month = checkMonth(new Date().getMonth());
  let day = new Date().getDate();
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  let log = `[${day}-${month}-${year} | ${checkHours(
    hour
  )}:${minutes}:${seconds}]: ${text}\n`;

  fs.appendFile("./logs/logs.txt", log, (err) => {
    if (err) console.log(err);
    return;
  });
};
