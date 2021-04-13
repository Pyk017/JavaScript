const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "What is your name?", 
    "Where do you live?",
    "What are you going to do with NODE JS?"
]

let answers = []

const collectAnswers = (questions, done) => {
    const [firstQ] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        } else{
            done(answers);
        }
    }

    rl.question(firstQ, questionAnswered);
}


collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(`
        ${answers[0]} of ${answers[1]} wants ${answers[2]} in Node JS!
    `);
    process.exit();
})