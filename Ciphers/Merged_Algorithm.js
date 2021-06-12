let CeasarCipher = require("./CeasarCipher");
let ROT = require("./ROT13");
let Vigenere = require("./VigenereCipher");
let rot47 = require("./ROT47");

print = (...objects) => console.log(...objects);

let ceasarCipher = new CeasarCipher();
let rot = new ROT();
let viginere = new Vigenere();

const [, , username, password] = process.argv;

key = undefined;

function encryption(username, password) {
  let ceasarEncrypt = ceasarCipher.encrypt(password, username.length);
  let rotEncrypt = rot.encrypt(password);
  key = ceasarEncrypt;
  let viginereEncrypt = viginere.encrypt(rotEncrypt, ceasarEncrypt);
  viginereEncrypt = rot47(viginereEncrypt);
  return viginereEncrypt;
}

function decryption(input_string) {
  input_string = rot47(input_string);
  let viginereDecrypt = viginere.decrypt(input_string, key);
  return rot.encrypt(viginereDecrypt);
}

let enc_string = encryption(username, password);
print("Encrypted Password :- ", enc_string);
let dec_string = decryption(enc_string);
print("Decryption Password :- ", dec_string);
