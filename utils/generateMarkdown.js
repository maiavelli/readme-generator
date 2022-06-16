// TODO: Create a function that returns a license badge based on which license is passed in
// array for rendering license badges1
const licenseArr = ['none', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense']
  

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArr[1]) {
    return `![license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  else if (license === licenseArr[2] ) {
    return `![license badge](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }
  else if (license === licenseArr[3]) {
    return `![license badge](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  else if (license === licenseArr[4]) {
    return `![license badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }
  else if (license === licenseArr[5]) {
    return `![license badge](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[1]) {
    return `[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === licenseArr[2]) {
    return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === licenseArr[3]) {
    return `[License: MIT](https://opensource.org/licenses/MIT)`
  }
  else if (license === licenseArr[4]) {
    return `[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === licenseArr[5]) {
    return `[License: Unlicense](http://unlicense.org/)`
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[1]) {
    return `## License
    This application is licensed under the ${licenseArr[1]}. You may not use this file except in compliance with this license.
    ${renderLicenseLink(licenseArr[1])}` 
  }
  else if (license === licenseArr[2]) {
    return `## License
    This application is licensed under the ${licenseArr[2]}. You may not use this file except in compliance with this license.
    ${renderLicenseLink(licenseArr[2])}` 
  }
  else if (license === licenseArr[3]) {
    return `## License
    This application is licensed under the ${licenseArr[3]}. You may not use this file except in compliance with this license.
    ${renderLicenseLink(licenseArr[3])}` 
  }
  else if (license === licenseArr[4]) {
    return `## License
    This application is licensed under the ${licenseArr[4]}. You may not use this file except in compliance with this license.
    ${renderLicenseLink(licenseArr[4])}` 
  }
  else if (license === licenseArr[5]) {
    return `## License
    This application is licensed under the ${licenseArr[5]}. You may not use this file except in compliance with this license.
    ${renderLicenseLink(licenseArr[5])}` 
  }
  else {
    return ''
  }
}

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

  ${renderLicenseSection(data.license)}

  ## Questions

  For more information and to see more of my work, please visit my GitHub: https://github.com/${data.github}/

  For any additional questions, you can contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
