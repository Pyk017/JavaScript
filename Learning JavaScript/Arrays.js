// To sort a String array
// var n = ['Apples', 'Bananas', 'Oranges', 'Mangoes'];
// console.log(n.sort());


// To sort a integer array
// var nums = [10, 40, 4, 100, 23, 89];
// var nums = nums.sort(function(a, b){
//                         return a - b;
//                     })
// console.log(nums)


// To find the Maximum of array. (similar can be done to find the minimum as well)
// function maximum(nums){
//     return Math.max.apply(null, nums);
// }
// console.log(maximum(nums))



// Sorting an array of objects based on a specified attribute.
// var cars = [
//     {'type': 'Fiat', 'year': '2019'},
//     {'type': 'Tesla', 'year': '2020'},
//     {'type': 'Ferrari', 'year': '1998'},
//     {'type': 'Mercedes', 'year': '2017'}
// ]


// Comparing integer properties.

// cars.sort(function(a, b){
//     return a.year - b.year;
// })


// Comparing String properties is a little complex.

// cars.sort(function(a, b){
//     var x = a.type.toLowerCase();
//     var y = b.type.toLowerCase();
//     if(x < y)
//         return -1;
//     if(x > y)
//         return 1;
//     return 1;
// });

// console.log(cars)



// Array Iteration Methods.
// 1. Array.forEach()

// var n = 10;
// nums.forEach(myFunction);
// function myFunction(value, index, nums){         // value is the data item.
//     nums[index] = value + n;                    // index is the index of the data item in the array
// }                                              //   nums is the original array.

// console.log(x, nums);


// 2. Array.map()   // similar as it is in python

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }

// console.log(numbers2);


// 3. Array.filter()

// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(over18)


// 4. Array.reduce()

// var numbers1 = [45, 4, 9, 16, 25];
// var sum = numbers1.reduce(myFunction, 100);

// function myFunction(total, value, index, array) {
//   return total + value;
// }

// console.log(sum)


// 5. Array.every()     // return boolean      

// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 1;
// }

// console.log(allOver18)      // returns true as all elements of numbers are greater than 1.


// 6. Array.some()
// The some() method check if some array values pass a test.

// var numbers = [45, 4, 9, 16, 25];
// var someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(someOver18)


// 7. Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.

// var numbers = [4, 9, 16, 25, 29];
// var first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(numbers)