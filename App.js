var printstuff = function(stuff){   // This is an anonymous function
    console.log(stuff)
}


// function printstuff(stuff){
//     console.log(stuff)
// }

// printstuff('This is Node Js')

function mainfunction(subfunction, value){
    subfunction(value);
}

mainfunction(printstuff, 'This is Node Js')

// or 

// mainfunction(function(stuff){console.log(stuff)}, "Hello This is Node JS.")       // It is also possible to define an anonymous function as a parameter or to another function.
