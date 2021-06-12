isLetter = (char) => char.toUpperCase() != char.toLowerCase();

isUpperCase = (char) => char == char.toUpperCase();

print = (...object) => console.log(...object);

function encrypt(input_string, key = 13) {
  let result = "";
  for (character of input_string) {
    if (isLetter(character)) {
      if (isUpperCase(character)) {
        new_index = 65 + ((character.charCodeAt(0) - 65 + key) % 26);
        result += String.fromCharCode(new_index);
      } else {
        new_index = 97 + ((character.charCodeAt(0) - 97 + key) % 26);
        result += String.fromCharCode(new_index);
      }
    } else {
      result += character;
    }
  }
  return result;
}

const [, , ...args] = process.argv;
let enc_encrypt = encrypt(args[0]);
print(enc_encrypt);

let dec_result = encrypt(enc_encrypt);
print(dec_result);
