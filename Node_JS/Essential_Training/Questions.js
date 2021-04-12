const question = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred Programming Languange"
];

const ask = (i = 0) => {
    process.stdout.write(`\n ${question[i]}`);
    process.stdout.write(` > `);
};

ask();

answers = []

process.stdin.on('data', data => {
    // process.stdout.write(`\n\n ${data.toString().trim()}\n\n`);
    // process.exit();

    answers.push(data.toString().trim());

    if(answers.length < question.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;

    console.log(`
        Thank you for your answers.
        GO ${activity} ${name} you can write ${lang} code later!!
    `);
});