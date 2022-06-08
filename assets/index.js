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
        name: 'project title',
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
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



