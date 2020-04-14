// function relay(){
//     console.log("This is a Relay Function.");
// }
// function longjump(){
//     console.log("This is Long Jump Function.");
// }

// module.exports.relays = relay;
// module.exports.longjumps = longjump;

// module.exports = {
//     relay1 : relay,
//     longjump1 : longjump
//  };

module.exports = {
    relays: function(){
        console.log("This is Relay Function.");
    },
    longjumps: function(){
        console.log("This is a Long Jumps Function")
    } 
}