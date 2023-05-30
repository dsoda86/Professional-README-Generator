const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title, description, installation, usage, contributing, tests, license, github, email }) => {
    return `
    `
}

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
          name: "installation",
          message: "How do you install your application?",
        },
        {
          type: "checkbox",
          name: "usage",
          message: "What languages or technologies are used with this application?",
          choices: ["HTML", "CSS", "JavaScript", "Bootstrap", "Materialize", "Node.js", "React"]
        },
        {
          type: "confirm",
          name: "contributing",
          message: "Would you like to let others be able contribute?",
        },
        {
          type: "confirm",
          name: "tests",
          message: "Are there any tests that can be run for this application?",
        },
        {
          type: "checkbox",
          name: "license",
          message: "What type of license would you like to use for this project?",
          choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter your contact email address.',
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

