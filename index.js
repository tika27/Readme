// TODO: Include packages needed for this application
//fs (activity 13)
//inquirer (28 mini project)

//output readme.md
//ask user for repo info
//the title of my project and sections entitled (project title)
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    //shields.io to build badge

//Description, 
//Table of Contents, 
//Installation, 
//Usage, 
///License, (give list of options)
//Contributing, 
//Tests, and 
//Questions
    //github name -> get link to github profile
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    //email address
// make a working Table of
 ////Contents (LATER)
    // THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Write description of your project',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Write the process of installation',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'What license was used for this README?',
      name: 'License',
      default: 'MIT',
      choices: [
          'Apache 2.0',
          'MIT',
          'GNU GPL v3.0'
      ]
    },
    {
      type: 'input',
      message: 'Please add contributors',
      name: 'Contributors',
    },
    {
      type: 'input',
      message: 'What command do you use to test this README?',
      name: 'Test',
    },
    {
      type: 'input',
      message: 'What are some of your issue?',
      name: 'Question',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username:',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Enter your email:',
      name: 'Email',
    },
    {
      type: 'input',
      message: 'What is your usage?',
      name: 'usage',
    },
    
  ];

  //TODO: Create a function to initialize app
  function init() {
    inquirer.prompt (questions).then((answers) => {
        console.log(answers);
        
       
        
      //TODO: Create a function to write README file

    fs.writeFile("DemoREADME.md", generateMarkdown(answers),function(err) {
     if (err) {
       console.log(err);
     
      }
      console.log("Success!");
   
    });

  });

  
  }


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

//   fs.watchFile(fileName,data, function(err) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

// function template(data){
//     //readme template 
// }

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt (
//         questions
//     )
//     .then((response) =>
//     {
//         console.log(response)
//         //call template and pass the object (response)
//         //write readme file writeToFile
//         writeToFile("README.md", generateMarkdown(data));
//         response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   });
// }
process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
  process.exit(1)
});

// Function call to initialize app
init();
