const inquirer = require('inquirer');
const fs = require('fs');

function createLicenseBadge(license) {
    if (license !== "none") {
      return`[![Github License](https://img.shields.io/badge/License-${license}-blue.svg)](https://choosealicense.com/licenses/)`;
    }else
      return "";
  };

const generateReadme = ({ title, description, link, screenshot, demo, languages, installation, usage, contributors, testing, license, github, email }) => {
    return `# ${title} 
${createLicenseBadge(license)}
## Description
${description}
## Deployed Application Link
${link}
## Table of Contents
* [Screenshot](#screenshot)
* [Demo](#demo)
* [Languages & Technologies](#languagesandtechnologies)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
* [License](#license)
 
## Screenshot
![alt-text](${screenshot})
## Demo
![alt-text]${demo}
## Languages & Technologies Used
${languages}
## Installation
${installation}
## Usage
${usage}
## Contributors
${contributors}
## Testing
${testing}
## Questions
Check out my work at [github/${github}](https://github.com/${github}).
Please send your questions to  [${email}](mailto:${email}?subject=[GitHub]%20Dev%20Connect).
## License
${license}
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
          message: "What languages or technologies are used with this application?",
          
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
          message: "What type of license would you like to use for this project?",
          choices: ["MIT", "APACHE 2.0", "Boost 1.0", "MPL 2.0", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "none"]
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
      fs.writeFileSync('README.md', readmeMarkdownContent);
      console.log('Successfully created README.md!');
    } catch (err) {
      console.log(err)
    }
  }
  main();

