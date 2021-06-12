const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function checkKeywordValidity(keyword) {
  keyword.split("").forEach((char, index) => {
    const rest = keyword.slice(0, index) + keyword.slice(index + 1);
    if (rest.indexOf(char) !== -1) {
      return false;
    }
  });
  return true;
}

function getEncryptedAlphabet(keyword) {
  const encryptedAlphabet = keyword.split("");
  alphabet.forEach((char) => {
    if (encryptedAlphabet.indexOf(char) === -1) {
      encryptedAlphabet.push(char);
    }
  });
  return encryptedAlphabet;
}

function translate(sourceAlphabet, targetAlphabet, message) {
  return message.split("").reduce((encryptedMessage, char) => {
    const isUpperCase = char === char.toUpperCase();
    const encryptedCharIndex = sourceAlphabet.indexOf(char.toLowerCase());
    const encryptedChar =
      encryptedCharIndex !== -1 ? targetAlphabet[encryptedCharIndex] : char;
    encryptedMessage += isUpperCase
      ? encryptedChar.toUpperCase()
      : encryptedChar;
    return encryptedMessage;
  }, "");
}

function checkInputs(keyword, message) {
  if (!keyword || !message) {
    throw new Error("Both keyword and message must be specified");
  }

  if (!checkKeywordValidity(keyword)) {
    throw new Error("Invalid keyword!");
  }
}

function encrypt(keyword, message) {
  checkInputs(keyword, message);
  return translate(
    alphabet,
    getEncryptedAlphabet(keyword.toLowerCase()),
    message
  );
}

function decrypt(keyword, message) {
  checkInputs(keyword, message);
  return translate(
    getEncryptedAlphabet(keyword.toLowerCase()),
    alphabet,
    message
  );
}

console.log(encrypt("keyword", "Hello world!")); // Prints 'Aoggj ujngw!'
console.log(decrypt("keyword", "Aoggj ujngw!")); // Prints 'Hello world!
