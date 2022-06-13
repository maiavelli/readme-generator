// TODO: Create a function that returns a license badge based on which license is passed in
// array for rendering license badges1
const licenseBadges = {
  'None': {
    badge: '',
    link: ''
  },
  'Apache License 2.0': {
    badge: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  'GNU General Public License v3.0': {
    badge: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  'MIT License': {
    badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    link: 'https://opensource.org/licenses/MIT'
  },
  'Mozilla Public License 2.0': {
    badge: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    link: 'https://opensource.org/licenses/MPL-2.0'
  },
  'The Unlicense': {
    badge: '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)',
    link: 'http://unlicense.org/'
  }
}



// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    licenseBadge = '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  else if (license === 'GNU General Public License v3.0') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  }
  else if (license === 'MIT License') {
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  else if (license === 'Mozilla Public License 2.0') {
    licenseBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }
  else if (license === 'The Unlicense') {
    licenseBadge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
  }
  else {
    licenseBadge = ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    licenseLink = `![License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'GNU General Public License v3.0') {
    licenseLink = `![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === 'MIT License') {
    licenseLink = `![License: MIT(https://opensource.org/licenses/MIT)`
  }
  else if (license === 'Mozilla Public License 2.0') {
    licenseLink = `![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'The Unlicense') {
    licenseLink = `![License: Unlicense](http://unlicense.org/)`
  }
  else {
    licenseLink = ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license)  
  [Contribution](#contribution)  
  [Tests](#tests)  
  
  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Tests

  ${data.tests}

  ## License
  ${renderLicenseLink(data.license)}

  ## Questions

  For more information and to see more of my work, please visit my GitHub: [${data.github}](https://github.com/${data.github}/)

  For any additional questions, you can contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
