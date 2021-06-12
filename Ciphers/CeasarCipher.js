class CeasarCipher {
  constructor() {
    this.eng_alpha_upper = Array.from(Array(26))
      .map((e, i) => i + 65)
      .map((x) => String.fromCharCode(x));

    this.eng_alpha_lower = Array.from(Array(26))
      .map((e, i) => i + 97)
      .map((x) => String.fromCharCode(x));

    this.eng_alpha = [...this.eng_alpha_upper, ...this.eng_alpha_lower];
  }

  encrypt(input_string, key, alphabets = undefined) {
    let alpha = alphabets || this.eng_alpha;

    let result = "";
    key = key % 52;
    let character = undefined;
    let new_key = undefined;
    for (character of input_string) {
      if (!alpha.includes(character)) {
        result += character;
      } else {
        new_key = (alpha.indexOf(character) + +key) % alpha.length;
        result += alpha[new_key];
      }
    }

    return result;
  }

  decrypt(input_string, key, alphabets = undefined) {
    let alpha = alphabets || this.eng_alpha;
    key = key % 52;
    key *= -1;
    return this.encrypt(input_string, key, alpha);
  }
}

// User input as command line arguments
// const [, , ...args] = process.argv;

// Creating object of CeasarCipher Class
// let ceasarCipher = new CeasarCipher();

// Encryption
// let res = ceasarCipher.encrypt(args[0], args[1], args[2]);
// console.log(res);

// Decryption
// let dec = ceasarCipher.decrypt(args[0], args[1], args[2]);
// print(dec);

// Debugging Purpose
// for ([index, element] of eng_alpha.entries()) {
//   console.log(index, element);
// }

// module.exports = {
//   eng_alpha,
//   encrypt,
// };

module.exports = CeasarCipher;
