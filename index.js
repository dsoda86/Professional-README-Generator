const inquirer = require('inquirer');
const fs = require('fs');


function createLicenseBadge(license) {
  if (!license || license.length === 0) {
    throw new Error("Please choose ONE license to use.");
  }

  // Handle single license selection
  if (license.length === 1) {
    const selectedLicense = license[0];
    if (selectedLicense === "MIT License") {
      return `[![License](https://img.shields.io/badge/License-MIT%20License-yellow.svg)](https://choosealicense.com/licenses/mit/)`;
    } else if (selectedLicense === "APACHE License 2.0") {
      return `[![License](https://img.shields.io/badge/License-APACHE%20License%202.0-red.svg)](https://choosealicense.com/licenses/apache-2.0/)`;
    } else if (selectedLicense === "Boost Software License 1.0") {
      return `[![License](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-blue.svg)](https://choosealicense.com/licenses/bsl-1.0/)`;
    } else if (selectedLicense === "Mozilla Public License 2.0") {
      return `[![License](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-orange.svg)](https://choosealicense.com/licenses/mpl-2.0/)`;
    } else if (selectedLicense === "GNU AGPLv3") {
      return `[![License](https://img.shields.io/badge/License-GNU%20AGPLv3-blue.svg)](https://choosealicense.com/licenses/agpl-3.0/)`;
    } else if (selectedLicense === "GNU GPLv3") {
      return `[![License](https://img.shields.io/badge/License-GNU%20GPLv3-success.svg)](https://choosealicense.com/licenses/gpl-3.0/)`;
    } else if (selectedLicense === "The Unlicense") {
      return `[![License](https://img.shields.io/badge/License-The%20Unlicense-red.svg)](https://choosealicense.com/licenses/unlicense/)`;
    }
  }

  throw new Error("Please choose ONE license to use.");
}




const generateReadme = ({ title, description, link, screenshot, demo, languages, installation, usage, contributors, testing, license, github, email }) => {
    return `# ${title} 
${createLicenseBadge(license)}
## Description
${description}
## Deployed Application Link
${link}
## Table of Contents
* [Languages & Technologies](#languagesandtechnologies)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
* [License](#license)


## Languages & Technologies Used
${languages}
## Installation
${installation}
## Usage
${usage}
![alt-text](${screenshot})
![alt-text]${demo}
## Contributors
${contributors}
## Testing
${testing}
## Questions
Check out my work at [github/${github}](https://github.com/${github}).


Please send your questions to  [${email}](mailto:${email}?subject=[GitHub]%20Dev%20Connect).
## License
${createLicenseBadge(license)}


Click to learn more about this license and other commonly used licenses.
`;
};
    

const main = async() => {
    const answers = await inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the title of your project?",
        },
        {
          type: "input",
          name: "description",
          message: "Please provide a short, detailed description of the project.",
        },
        {
          type: "input",
          name: "link",
          message: "Please provide the deployed application URL.",
        },
        {
          type: "input",
          name: "screenshot",
          message: "Please provide a link to any screenshots of the application.",
        },
        {
          type: "input",
          name: "demo",
          message: "Please provide a link to a demo gif or video of the application.",
        },
        {
          type: "input",
          name: "installation",
          message: "How do you install your application?",
        },
        {
          type: "input ",
          name: "usage",
          message: "How do you use this application? Instructions to include in the usage section?",
            
        },
        {
          type: "input ",
          name: "languages",
          message: "What languages or technologies are used with this application?(comma-separated answers)",
          
        },
        {
          type: "input",
          name: "contributors",
          message: "List any contributors to the project here.",
        },
        {
          type: "input",
          name: "testing",
          message: "Add any tests you want to be able to run here.",
        },
        {
          type: "checkbox",
          name: "license",
          message: "What type of license would you like to use for this project?(Please choose ONE)",
          choices: ["MIT License", "APACHE License 2.0", "Boost Software License 1.0", "Mozilla Public License 2.0", "GNU AGPLv3", "GNU GPLv3", "The Unlicense"]
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter your email address.',
        },
      ]);
  
    const readmeMarkdownContent = generateReadme(answers);
    try{
      fs.writeFileSync('exampleReadme.md', readmeMarkdownContent);
      console.log('Successfully created exampleReadme.md!');
    } catch (err) {
      console.log(err)
    }
  }
  main();

