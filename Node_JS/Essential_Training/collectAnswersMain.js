const collectAnswers = require('./lib/collectAnswers.js');

const questions = [
    "What is your name?", 
    "Where do you live?",
    "What are you going to do with NODE JS?"
]


// collectAnswers(questions); // calling with default callback .

// collectAnswers(questions, answers => {
//     console.log("Thank you for your answers. ");
//     console.log(`
//         ${answers[0]} of ${answers[1]} wants ${answers[2]} in Node JS!
//     `);
//     process.exit();
// });



// using eventEmitter

const answerEvents = collectAnswers(questions);

answerEvents.on('answer', answer => {
    console.log(`Question answered: ${answer}`);
});

answerEvents.on('complete', answers => {
    console.log("Thank you for your answers. ");
    console.log(`
        ${answers[0]} of ${answers[1]} wants ${answers[2]} in Node JS!
    `);
});

answerEvents.on('complete', () => process.exit());
