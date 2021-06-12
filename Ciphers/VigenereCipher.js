function isLetter(char) {
  return char.toUpperCase() != char.toLowerCase();
}

function isUpperCase(character) {
  if (character === character.toUpperCase()) {
    return true;
  }
  return false;
}

print = (...object) => console.log(...object);

function encrypt(input_string, key) {
  let j = 0;
  let result = "";

  for (character of input_string) {
    if (isLetter(character)) {
      if (isUpperCase(character)) {
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
}

function decrypt(input_string, key) {
  let j = 0;
  let result = "";

  for (character of input_string) {
    if (isLetter(character)) {
      if (isUpperCase(character)) {
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

const [, , ...args] = process.argv;

// Encryption
let enc_result = encrypt(args[0], args[1]);
console.log(enc_result);

// Decryption
let dec_result = decrypt(enc_result, args[1]);
console.log(dec_result);
