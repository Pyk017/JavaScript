const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;


const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitInterval) * 10);
    // console.log(`waiting ${currentTime / 1000} seconds`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

console.log(`Setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done")

};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime); // first parameter will be the function invoked after the time delay and second parameter is the time delay in ms.
