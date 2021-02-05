const inquirer = require('inquirer');
const fs = require('fs');
const md = require("./utils/generateMarkdown.js");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is the description of your project?',
    },
    {
      type: 'checkbox',
      name: 'License',
      choices: ["none", "Mit", "Apache"],
    },
    {
      type: 'input',
      name: 'Contributers',
      message: 'Guidelines for how you want others to contribute?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Do you have any tests for your application?',
    }
    
  ]) .then((data) =>{ 
       console.log(data)
    let makereadme = generateMarkdown(data)
    
    fs.writeFile("README.md", makereadme, (err)=>
    err ? console.error(err):console.log("Good job"))
  })
// TODO: Create a function to write README file





// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
