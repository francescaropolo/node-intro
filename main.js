'use strict'

const functions = require('./functions');
const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));

let counter = 0;

const intervalId = setInterval(() => {
    const option = functions.getRandomOption();
    console.log(chalk.red(option));
    counter++;
    if (counter === 10) {
        clearInterval(intervalId);
    }
}, 5000)

console.log(chalk.yellow(functions.options))

    
