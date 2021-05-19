// In Node.js, we have objects that can be used directly in our application and those objects are called Global Objects.

// 1. __filename = This represents the file name of the code being executed.
// console.log(__filename);  Output :- E:\Workspace\Node_JS\Global_Objects_and_Timers.js


// 2. __dirname = This represents the directory in which the file recites.
// console.log(__dirname);   Output :- E:\Workspace\Node_JS


// 3. setTimeout() = A Global function that takes two parameter, a function and time in milliseconds (1000 -> 1sec), used to execute the function after
                        // time defined.
// Example :- 
// function printstuff(){
//     console.log("This is setTimeout.");
// }
// setTimeout(printstuff, 5000);


// 4. setInterval() = This Global function is used to call function again and again after a fixed interval of Time. This takes two parameters function and time.Global
// Example :- 
// setInterval(printstuff, 2000);
