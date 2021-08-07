const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.html');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

// console.log(inquirer);
inquirer
    .prompt([
        {
            type: 'input',
            name: 'Your name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers))