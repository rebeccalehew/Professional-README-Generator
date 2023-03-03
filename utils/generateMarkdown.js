// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    gplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  };
  return badges[license];
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    gplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  };
  return licenseLink[license];
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `Licensed under the ${this.renderlicenseLink(license)} license.`
  } else {
    return ``
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Project Description](#Description)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contribution
${answers.contribution}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseSection(answers.license)}
`
};

module.exports = generateMarkdown;