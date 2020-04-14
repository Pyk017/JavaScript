// Callback Function :- A callback functin is another function that is usually passed as an argument to another function and is usually invoked after some kind of event.


console.log("User 1 made a request.");
setTimeout(callback, 5000);
// console.log("Database operation takes 5 seconds.");
// console.log("Data Delivered to the User.");

console.log("User 2 made a request.");
setTimeout(callback, 5000);

// console.log("Database operation takes 5 seconds.");
// console.log("Data Delivered to the User.");

console.log("User 3 made a request.");
setTimeout(callback, 5000);
// console.log("Database operation takes 5 seconds.");
// console.log("Data Delivered to the User.");

function callback(){
    console.log("Queried the database and delivered data in 5 seconds.");
}