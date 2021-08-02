console.log('');
const generatePage = () => 'Name: Andrew, Github: bwogihub';
console.log(generatePage());

console.log('----------------------------------------------------------------');

const generateNewPage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
console.log(generateNewPage('Andrew Bwogi','Bwogi'));
console.log('');

// multi-line strings

const generateAnotherPage = (userName, githubName) => {
   return `Name: ${userName} 
Github: ${githubName}
    `;
};

// console.log(generateAnotherPage('abwogi@ereports.net','bwogi'));

const cLCapture = process.argv.slice(2, process.argv.length);
// // instead of  
// const theName = cLCapture[0];
// const githubName = cLCapture[1];

// use destructuring 
let [theName, githubName] = cLCapture;

console.log(theName, githubName);
console.log(generateAnotherPage(theName, githubName));


 const generateThisPage = (name, githubName) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Demo</title>
    </head>
    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${githubName}">Github</a></h2>
    </body>
    </html>`
};

console.log(generateThisPage(theName, githubName));



// const ourCLInput = process.argv.slice(2, process.argv.length); // capture CLI input from third index
// // console.log(ourCLInput);

// const printOutCLInput = theArray => console.log(theArray); // arrow function to display it

// printOutCLInput(ourCLInput);

// console.log('----------------------------------------------------------------');


// /* history */

// // const animalArray = ['dog','cat','cow'];
// // animalArray.push('pig');

// // console.log(animalArray);

// // const personalObj = {
// //     name: 'Bwogi',
// //     age: 99
// // }

// // personalObj.age = 66;

// // personalObj.occupation = "Developer";

// // console.log(personalObj);


// // var transcriptObj = {
// //     id: '1101',
// //     studentId: '331313AS',
// //     status: 'partial'
// // }
// // transcriptObj.semID = '1';

// // console.log(transcriptObj);

// // console.log('---');



// // // const message = 'Hello Node!';

// // // message = 'Goodbye node!'

// // // console.log(message);


// // // console.log('Hello Node!');
// // // console.log(document);
// // // var message = 'Hello Node';



// // // var sum = 3 + 4;

// // // console.log(message);
// // // console.log(sum);

// // // var commandLineArgs = process.argv;

// // // console.log(commandLineArgs);
// // // // console.log(process.env);
// // // console.log(`process.argv[1]:  ${process.argv[1]}`);
// // // console.log(`process.argv[0]:  ${process.argv[0]}`);
// // // console.log(`process.argv:  ${process.argv}`);
// // // console.log('');
// // // const profileDataArgs = process.argv.slice(2, process.argv.length);
// // // // console.log(profileDataArgs);

// // // const printProfileData = (profileDataArr) => {
// // //     console.log(profileDataArr);
// // // }

// // // printProfileData(profileDataArgs);


// // // arrow functions 
// // // old way of doing things
// // function addNums(numOne, numTwo){
// //     return numTwo + numOne;
// // }

// // // new ways 
// // const addNumbers = function(numOne, numTwo){
// //     return numOne + numTwo;
// // }

// // // another new way 
// // const addTheNos = (numOne, numTwo) => {
// //     return numTwo + numOne;
// // }

// // // they can all be rewritten
// // const addThoseNos = (numOne, numTwo) => numTwo + numOne;

// // console.log(`addNums: ${addNums(2,1)}`);
// // console.log(`addNumbers: ${addNumbers(2,1)}`);
// // console.log(`addTheNos: ${addTheNos(2,1)}`);
// // console.log(`addThoseNos: ${addThoseNos(2,1)}`);
// // console.log('---');
// // console.log('---');

// // const profileDataArgs = process.argv.slice(2, process.argv.length); // slice('start from index' , 'end at index') in other words, skip the first 2 indexes 
// // console.log(profileDataArgs);
// // console.log('---');

// // const profileDataArgsNew = process.argv.slice(0, 2); // slice('start from index' , 'end at index') in other words, skip the first 2 indexes 
// // console.log(profileDataArgsNew);
// // console.log('---');

// // const profileDataArgsNewOne = process.argv.slice(0, process.argv.length); // slice('start from index' , 'end at index') in other words, skip the first 2 indexes 
// // console.log(profileDataArgsNewOne);
// // console.log('---');

// // const printProfileData = profileDataArr => {
// //     for (let i = 0; i < profileDataArr.length; i++) {
// //        console.log(profileDataArr[i]);  
// //     }
// // }

// // printProfileData(profileDataArgs);

// // console.log('---');

// // const profile = process.argv.slice(2, process.argv.length); // slice('start from index' , 'end at index') in other words, skip the first 2 indexes 
// // console.log(profile);
// // console.log('---');

// // const printProfile = theArray => console.log(theArray);


// // printProfile(profile);

// // console.log('---');
// // console.log('---');

// // // cleaner loops

// // const printProfileDataNew = profileDataArr => {
// //     for (let i = 0; i < profileDataArr.length; i++){
// //         profileDataArr[i];
// //     }
// //     console.log('---');

// //     // is the same as
    
// //     profileDataArr.forEach((profileItem) => {
// //         console.log(profileItem);
// //     });

// // };




