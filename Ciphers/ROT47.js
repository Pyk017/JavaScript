function rot47(a, b) {
  return ++b
    ? String.fromCharCode(((a = a.charCodeAt() + 47), a > 126 ? a - 94 : a))
    : a.replace(/[^ ]/g, rot47);
}

module.exports = rot47;

// const [, , ...args] = process.argv;
// let enc = rot47(args[0]);
// console.log(enc);
// let dec = rot47(enc);
// console.log(dec);
