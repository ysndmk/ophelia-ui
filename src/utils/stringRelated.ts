const turkishToLower = function (word) {
  var letters = { İ: "i", I: "ı", Ş: "ş", Ğ: "ğ", Ü: "ü", Ö: "ö", Ç: "ç" };
  word = word.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) {
    return letters[letter];
  });
  return word.toLowerCase();
};

export function validateEmail(email) {
  const re =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const firstUpperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

// menti istenilen karakter kadar kısaltma
// hyphenActive = çizgi atmasına kara veriyor
export function shortenText(text, length, hyphenActive) {
  if (length && text?.length >= length) {
    return text.substring(0, length) + "...";
  }

  return text ? text : hyphenActive ? "-" : "";
}
