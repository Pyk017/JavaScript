// Generating english alphabets (Upper + Lower)
const eng_alpha_upper = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map((x) => String.fromCharCode(x));

const eng_alpha_lower = Array.from(Array(26))
  .map((e, i) => i + 97)
  .map((x) => String.fromCharCode(x));

const eng_alpha = [...eng_alpha_upper, ...eng_alpha_lower];

// Just a helper function for python background folks.
print = (...object) => {
  console.log(...object);
};

function encrypt(input_string, key, alphabets = undefined) {
  let alpha = alphabets || eng_alpha;

  let result = "";
  key = key % 52;

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

function decrypt(input_string, key, alphabets = undefined) {
  let alpha = alphabets || eng_alpha;
  key = key % 52;
  key *= -1;
  return encrypt(input_string, key, alpha);
}

// User input as command line arguments
const [, , ...args] = process.argv;

// Encryption
let res = encrypt(args[0], args[1], args[2]);
console.log(res);

// Decryption
let dec = decrypt(args[0], args[1], args[2]);
print(dec);

// Debugging Purpose
// for ([index, element] of eng_alpha.entries()) {
//   console.log(index, element);
// }
