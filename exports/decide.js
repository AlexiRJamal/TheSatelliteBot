exports.headsOrTails = times => {
  //Heads = 0
  //Tails = 1
  let hotArr = [];
  if (checkNumber(times) && times <= 20) {
    let counter = 1;
    while (times > 0) {
      let i = Math.floor(Math.random() * 2);
      if (i == 1) {
        let myObj1 = new Object();
        myObj1.num = counter;
        myObj1.value = "Tails";
        hotArr.push(myObj1);
      }
      if (i == 0) {
        let myObj2 = new Object();
        myObj2.num = counter;
        myObj2.value = "Heads";
        hotArr.push(myObj2);
      }
      counter++;
      times--;
    }
  } else return false;
  return hotArr;
};

exports.randomNums = (from, to) => {
  if (checkNumber(from) && checkNumber(to) && from < to && to < 100000) {
    from = Math.ceil(from);
    to = Math.floor(to);
    let ran = Math.floor(Math.random() * (from - to)) + to;
    return ran;
  } else {
    return false;
  }
};

exports.getChoice = msg => {
  let temp = msg.toString();
  let decided = temp.split(",");
  let i = Math.floor(Math.random() * decided.length);
  return decided[i];
};

exports.rollDice = times => {
  let diceArr = [];
  if (checkNumber(times) && times <= 20) {
    let counter = 1;
    while (times > 0) {
      let myObj = new Object();
      let dice = Math.floor(Math.random() * 5) + 1;
      myObj.num = counter;
      myObj.value = dice;
      diceArr.push(myObj);
    }
    counter++;
    times--;
  } else {
    return false;
  }
};

exports.getCard = () => {
  let ran = Math.floor(Math.random() * 12);
  let brand = [
    " of Clubs ♣️",
    " of Diamonds ♦️",
    " of Spades ♠️",
    " of Hearts ♥️"
  ];
  let i = Math.floor(Math.random() * 3);
  let cardVal;
  if (ran < 11 && ran != 0 && ran != 1) {
    cardVal = ran + brand[i];
  } else {
    if (ran == 11) {
      cardVal = "Jack" + brand[i];
    }
    if (ran == 12) {
      cardVal = "Queen" + brand[i];
    }
    if (ran == 0) {
      cardVal = "King" + brand[i];
    }
    if (ran == 1) {
      cardVal = "Ace" + brand[i];
    }
  }
  return cardVal;
};

exports.generatePassword = len => {
  if (len <= 100 && len > 0) {
    let length = len ? len : 10;
    let string = "abcdefghijklmnopqrstuvwxyz"; //to upper
    let numeric = "0123456789";
    let punctuation = "!@#$%^&*_+[]:;?><,./-=";
    let password = "";
    let character = "";
    while (password.length < length) {
      let entity1 = Math.ceil(string.length * Math.random() * Math.random());
      let entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
      let entity3 = Math.ceil(
        punctuation.length * Math.random() * Math.random()
      );
      let hold = string.charAt(entity1);
      hold = password.length % 2 == 0 ? hold.toUpperCase() : hold;
      character += hold;
      character += numeric.charAt(entity2);
      character += punctuation.charAt(entity3);
      password = character;
    }
    password = password
      .split("")
      .sort(function() {
        return 0.5 - Math.random();
      })
      .join("");
    return password.substr(0, len);
  } else {
    return false;
  }
};

exports.shuffle = arr => {
  var cfe = arr.length;
  var index, temp;
  while (cfe > 0) {
    index = Math.floor(Math.random() * cfe);
    cfe--;
    temp = arr[cfe];
    arr[cfe] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

function checkNumber(num) {
  if (!isNaN(num) && num > 0) return true;
  else return false;
}
