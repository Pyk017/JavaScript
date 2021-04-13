const counter = require('./myModule.js');

counter.inc();
counter.inc();
counter.inc();
counter.dec();
console.log(counter.getCount());



// const { inc, dec, getCount } = require('./myModule.js');

// inc();
// inc();
// inc();
// dec();
// console.log(getCount());