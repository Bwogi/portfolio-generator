const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.html');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });




// console.log(inquirer);
// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'Your name',
//             message: 'What is your name?'
//         }
//     ])
//     .then(answers => console.log(answers))

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
}


const promptProject = () => {

    console.log(` 
    
    ==================
    Add a New Project
    ==================
    
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your Project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this Project with? (Check all that apply)',
            choices: ['Javascript','HTML','CSS','ES6','jQuery','Bootstrap','Node']
        },
        {
            type: 'link',
            name: 'link',
            message: 'Enter the Github link to this project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]);
};

promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));
