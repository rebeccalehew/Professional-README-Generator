// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// App questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of project?',
    },
    {
        type: 'input',
        name: 'project description',
        message: 'Description of project?',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage guidelines?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Directions for future contributors?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(GitHub)?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license?',
        choices: ['MIT', 'GPLv3', 'Apache'],
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = './test/README.md';
    fs.writeFile(fileName, data, (err) => {
        if(err){
            console.log('Could not save this file!');
        } else {
            console.log('Success! New README file created in the current directory!');
        }
    })
};

// TODO: Create a function to initialize app
function initialize() {
    inquirer.prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))

    .catch((error) => {
        console.log(error);
    })
};

// Function call to initialize app
initialize();