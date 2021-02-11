// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  if(license === "None") {

 return "None" 
  }
 if(license === "Mit") {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

} if(license === "Apache") {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

} if(license=== "IBM") {
  return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title
   ${data.Title}

 # Description:
${data.Description}

## License:
${renderLicenseBadge(data.license)}

# Contributors:
${data.Contributors}

# Tests:
${data.Tests}
`;
}

module.exports = generateMarkdown;


// * [Usage](#usage)
// * [Credits](#credits)
// * [License](#license)