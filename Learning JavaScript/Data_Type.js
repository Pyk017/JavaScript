// console.log(typeof 12);
// console.log(typeof 12.2);
// console.log(typeof "Prakhar");
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof None);
// console.log(typeof undefined);
// console.log("2" - "2" + "2");
// console.log(typeof ("2" - "21"));

var length = 16;    // Number
var last_name = "Johnson"; // String
var x = {
    "firstname": "John",
    "lastname": "Doe",
    print : function(){         // Method of an object.
        console.log("HEllo");
    }
};  // Object

// function print(){
//     console.log("Hello");
// }
// x.print = print;

var y;
// console.log(typeof y, y); // undefined
y = 5;
// console.log(typeof y, y);   // number 5
y = 'Prakhar';
// console.log(typeof y, y);   // string Prakhar

var num1 = 34;  // number 
var num2 = 34.05;   // number (only one data type for numeric as well as floating point number as well).

var num3 = 123e5;
var num4 = 123e-5;
// console.log(num3);
// console.log(num4)

// JavaScript arrays are written with square brackets.
// Array items are separated by commas.
// The following code declares (creates) an array called cars, containing three items (car names):

// Example
var cars = ["Saab", "Volvo", "BMW"];
// Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

// console.log(x.lastname)
// console.log(x.print())


// Difference between undefined and null.
// undefined and null are equal in value but different in type:

// typeof undefined           // undefined
// typeof null                // object

// null === undefined         // false
// null == undefined          // true
