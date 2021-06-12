class Vigenere {
  constructor() {
    this.isLetter = (char) => char.toUpperCase() != char.toLowerCase();
    this.isUpperCase = (char) => char == char.toUpperCase();
  }
  encrypt(input_string, key) {
    let j = 0;
    let result = "";
    let character = undefined;
    for (character of input_string) {
      if (this.isLetter(character)) {
        if (this.isUpperCase(character)) {
          result += String.fromCharCode(
            ((character.charCodeAt(0) +
              key.toUpperCase().charCodeAt(j) -
              2 * 65) %
              26) +
              65
          );
        } else {
          result += String.fromCharCode(
            ((character.charCodeAt(0) +
              key.toLowerCase().charCodeAt(j) -
              2 * 97) %
              26) +
              97
          );
          //   print(character, result);
        }
      } else {
        result += character;
      }
      j = ++j % key.length;
    }
    return result;
  }
  decrypt(input_string, key) {
    let j = 0;
    let result = "";
    let character = undefined;
    for (character of input_string) {
      if (this.isLetter(character)) {
        if (this.isUpperCase(character)) {
          result += String.fromCharCode(
            90 -
              ((25 -
                (character.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) %
                26)
          );
        } else {
          result += String.fromCharCode(
            122 -
              ((25 -
                (character.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) %
                26)
          );
        }
      } else {
        result += character;
      }
      j = ++j % key.length;
    }
    return result;
  }
}

isLetter = function (char) {
  return char.toUpperCase() != char.toLowerCase();
};

isUpperCase = function (character) {
  if (character === character.toUpperCase()) {
    return true;
  }
  return false;
};

print = (...object) => console.log(...object);

encrypt = function (input_string, key) {
  let j = 0;
  let result = "";

  for (character of input_string) {
    if (this.isLetter(character)) {
      if (this.isUpperCase(character)) {
        result += String.fromCharCode(
          ((character.charCodeAt(0) +
            key.toUpperCase().charCodeAt(j) -
            2 * 65) %
            26) +
            65
        );
      } else {
        result += String.fromCharCode(
          ((character.charCodeAt(0) +
            key.toLowerCase().charCodeAt(j) -
            2 * 97) %
            26) +
            97
        );
      }
    } else {
      result += character;
    }
    j = ++j % key.length;
  }
  return result;
};

decrypt = function (input_string, key) {
  let j = 0;
  let result = "";

  for (character of input_string) {
    if (this.isLetter(character)) {
      if (this.isUpperCase(character)) {
        result += String.fromCharCode(
          90 -
            ((25 -
              (character.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) %
              26)
        );
      } else {
        result += String.fromCharCode(
          122 -
            ((25 -
              (character.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) %
              26)
        );
      }
    } else {
      result += character;
    }
    j = ++j % key.length;
  }
  return result;
};

// const [, , ...args] = process.argv;
// let vigi = new Vigenere();
// // Encryption
// let enc_result = vigi.encrypt(args[0], args[1]);
// console.log(enc_result);

// // Decryption
// let dec_result = vigi.decrypt(enc_result, args[1]);
// console.log(dec_result);

module.exports = Vigenere;
