var events = require("events");
var eventEmitter = new events.EventEmitter();

var ringbell = function(){
    console.log("Ring Ring Ring!");
}

eventEmitter.on("Door Opens", ringbell);       //  Event emitter is a event handler. First parameter is the event and second is the corresponding handler of the event in the form of function.
eventEmitter.on("bell rings", function(message){
    console.log(message);
})

eventEmitter.emit("Door Opens");  // This is used to trigger the events.
eventEmitter.emit("bell rings", "Welcome");
