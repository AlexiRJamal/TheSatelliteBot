exports.checkArtist = artist => {
  if (artist == "Taylor Swift") return true;
  else return false;
};

exports.capFirst = str => {
  return str.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
