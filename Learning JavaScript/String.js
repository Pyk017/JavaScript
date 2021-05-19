var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     
var sln = txt.length;       // To find the length of the string
// console.log(sln);

var x = "My name is \"Prakhar Kumar\"";     // My name is "Prakhar Kumar"
var y = "My name is \'Prakhar Kumar\'";     // My name is 'Prakhar Kumar'
var z = "My name is \\Prakhar Kumar";     // My name is \Prakhar Kumar
// console.log(z);

var a = "Prakhar";
var b = new String("Prakhar");
// console.log(a == b);    // returns true because compares the data items.
// console.log(a === b);   // returns false as data items are same but types are different (string and object).

//  String Methods.

var x = 'This is string methods of string';
// console.log(x.indexOf('string'));   // returns the first index of string present, if not present, returns -1.
// console.log(x.lastIndexOf('string'));   // returns the last index of string present.

// console.log(x.indexOf('string', 10));   // second parameter represents the starting position of the search.


// console.log(x.search('string'));    // indexOf and search are similar but 
                                        // 1. The search() method cannot take a second start position argument.
                                        // 2. The indexOf() method cannot take powerful search values (regular expressions).


// slice(start, end)    := slice the string from the starting position to the ending position(excluding the end)
// substing(start, end) := similar to slice but different from slice as substring does not supports negative indices.
// substr(start, length) := similar to slice but difference is the second parameter takes length of the extracted part.
// replace(oldValue, newValue) := The replace() method replaces a specified value with another value in a string.
                                // The replace() method does not change the string it is called on. It returns a new string.

// toUpperCase() :- Convert to uppercase returns new string
// toLowerCase() := Convert to lowercase returns new string

// var t = 'I can eat bananas all day';
// console.log(t.slice(10,17));

var num = 25;
var x = num.toString(16);   // used to convert a number into string, in parameter is the base in which you want to convert octal, hexadecimal etc.

console.log(x, typeof x);