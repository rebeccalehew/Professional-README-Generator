// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        // Why do you have to return to lowercase?
        filter(val) {
            return val.toLowerCase();
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', questions, (err) => {
        if(err){
            console.log('Could not save this file!');
        } else {
            console.log('Success! New README file created in the current directory!')
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch((error) => {
        console.log(error);
    })
};

// Function call to initialize app
init();