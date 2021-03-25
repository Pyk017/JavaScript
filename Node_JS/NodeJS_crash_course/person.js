// Module Wrapper Function

// (function (exports, require, module, __filename, __dirname){

// });
// console.log(__filename, __dirname);


// const person = {
//     name: "Prakhar", 
//     age: 21
// };

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My Name is ${this.name} and my age is ${this.age}!`);
    }
}
module.exports = Person;