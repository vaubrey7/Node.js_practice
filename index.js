const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([{
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'Language',
    },
    {
      type: 'checkbox',
      message: 'what is your prefferd mode of communication?',
      choices: ["email",  "phone",  "in-person"],
      name: 'communication',
    },
  ])
  .then((answers) => {
    fs.writeFile(`${answers.username}.txt`, JSON.stringify(answers), (err) => {
      if (err) throw err;
      console.log("File saved!");

    });
  });