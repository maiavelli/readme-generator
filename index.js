// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mrkdwn = require('./utils/generateMarkdown');
let fileName = `SAMPLEREADME.MD`;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a short description of what your application does.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How should the user install this application?',
        name: 'installation',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',  'Mozilla Public License 2.0', 'The Unlicense', 'none'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is the usage of this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can someone contribute to this application?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How should a user test this application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = mrkdwn(data);
    fs.writeFile(fileName, markdown, (err) => {
        err ? console.error(err) : console.log('readme generated');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        writeToFile(fileName, response)
    )
}

// Function call to initialize app
init();



