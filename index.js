// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

inquirer
.prompt([
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
        message: 'What is the usage of this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the names of the contributors to this application (if applicable)?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'How can someone contribute to this application?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What would you like to call this document?',
        name: 'filename',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



