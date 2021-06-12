class ROT {
  constructor() {
    this.isLetter = (char) => char.toUpperCase() != char.toLowerCase();
    this.isUpperCase = (char) => char == char.toUpperCase();
  }

  encrypt(input_string, key = 13) {
    let result = "";
    let character = undefined;
    let new_index = undefined;
    for (character of input_string) {
      if (this.isLetter(character)) {
        if (this.isUpperCase(character)) {
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
}

// Input from command line
// const [, , ...args] = process.argv;

// Creating object of ROT Class
// let rot = ROT();

// let enc_encrypt = rot.encrypt(args[0]);
// print(enc_encrypt);

// let dec_result = rot.encrypt(enc_encrypt);
// print(dec_result);

module.exports = ROT;
