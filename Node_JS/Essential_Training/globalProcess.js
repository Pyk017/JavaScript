// console.log(process.pid)
// console.log(process.versions.node);

// console.log(process.argv); 

// const[,,firstName, lastName] = process.argv
// console.log(`Your name is ${firstName} ${lastName}`);

// using flags    i.e., node globalProcess --user Prakhar --greeting "HELLO PRAKHAR!"

grab = (flag) => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab('--greeting');
const user = grab('--user');



console.log(`${greeting} ${user}`);

