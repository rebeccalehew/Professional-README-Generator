// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  console.log(license);

  switch(license) {
    case 'MIT':
      return 'README.md', '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'GPLv3':
      return 'README.md', '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    case 'Apache':
      return 'README.md', '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    case 'None':
      return 'README.md', ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  console.log(license);

  switch(license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)'
    case 'GPLv3':
      return '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)'
    case 'Apache':
      return '[Apache](https://opensource.org/licenses/Apache-2.0)'
    case 'None':
      return ''
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `${renderLicenseBadge(license)}  Licensed under the ${renderLicenseLink(license)} license.`

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

${renderLicenseSection(answers.license)}

## Table of Contents
- [Project Description](#description)
- [Usage](#usage)
- [Contribution](#contribution)
- [Installation](#installation)
- [Questions](#questions)

## Project Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contribution
${answers.contribution}

## Questions
- Email: ${answers.email}
- GitHub: ${answers.github}

  `
};

module.exports = generateMarkdown;