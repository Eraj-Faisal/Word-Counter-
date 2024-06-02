#! /usr/bin/env node
//import pakages chalk and inquirer.
import inquirer from "inquirer";
import chalk from "chalk";
//write welcome message
console.log(chalk.bold.magentaBright("\n \t\tWELCOME TO WORD COUNTER"));
console.log("=".repeat(65));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//Trimming the sentence and splitting it into words based on spaces.
let words = answers.sentence.trim().split(" ");
//check the user's input sentence.
console.log("=".repeat(65));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.cyanBright(words.length)}`));
console.log("=".repeat(65));
