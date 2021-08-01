const ourCLInput = process.argv.slice(2, process.argv.length); // capture CLI input from third index
// console.log(ourCLInput);

const printOutCLInput = theArray => console.log(theArray); // arrow function to display it

printOutCLInput(ourCLInput);


/* history */

// const animalArray = ['dog','cat','cow'];
// animalArray.push('pig');

// console.log(animalArray);

// const personalObj = {
//     name: 'Bwogi',
//     age: 99
// }

// personalObj.age = 66;

// personalObj.occupation = "Developer";

// console.log(personalObj);


// var transcriptObj = {
//     id: '1101',
//     studentId: '331313AS',
//     status: 'partial'
// }
// transcriptObj.semID = '1';

// console.log(transcriptObj);

// console.log('---');



// // const message = 'Hello Node!';

// // message = 'Goodbye node!'

// // console.log(message);


// // console.log('Hello Node!');
// // console.log(document);
// // var message = 'Hello Node';



// // var sum = 3 + 4;

// // console.log(message);
// // console.log(sum);

// // var commandLineArgs = process.argv;

// // console.log(commandLineArgs);
// // // console.log(process.env);
// // console.log(`process.argv[1]:  ${process.argv[1]}`);
// // console.log(`process.argv[0]:  ${process.argv[0]}`);
// // console.log(`process.argv:  ${process.argv}`);
// // console.log('');
// // const profileDataArgs = process.argv.slice(2, process.argv.length);
// // // console.log(profileDataArgs);

// // const printProfileData = (profileDataArr) => {
// //     console.log(profileDataArr);
// // }

// // printProfileData(profileDataArgs);


// // arrow functions 
// // old way of doing things
// function addNums(numOne, numTwo){
//     return numTwo + numOne;
// }

// // new ways 
// const addNumbers = function(numOne, numTwo){
//     return numOne + numTwo;
// }

// // another new way 
// const addTheNos = (numOne, numTwo) => {
//     return numTwo + numOne;
// }

// // they can all be rewritten
// const addThoseNos = (numOne, numTwo) => numTwo + numOne;

// console.log(`addNums: ${addNums(2,1)}`);
// console.log(`addNumbers: ${addNumbers(2,1)}`);
// console.log(`addTheNos: ${addTheNos(2,1)}`);
// console.log(`addThoseNos: ${addThoseNos(2,1)}`);
// console.log('---');
// console.log('---');

// const profileDataArgs = process.argv.slice(2, process.argv.length); // slice('start from index' , 'end at index') in other words, skip the first 2 indexes 
// console.log(profileDataArgs);
// console.log('---');

// const profileDataArgsNew = process.argv.slice(0, 2); // slice('start from index' , 'end at index') in other words, skip the first 2 indexes 
// console.log(profileDataArgsNew);
// console.log('---');

// const profileDataArgsNewOne = process.argv.slice(0, process.argv.length); // slice('start from index' , 'end at index') in other words, skip the first 2 indexes 
// console.log(profileDataArgsNewOne);
// console.log('---');

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//        console.log(profileDataArr[i]);  
//     }
// }

// printProfileData(profileDataArgs);

// console.log('---');

// const profile = process.argv.slice(2, process.argv.length); // slice('start from index' , 'end at index') in other words, skip the first 2 indexes 
// console.log(profile);
// console.log('---');

// const printProfile = theArray => console.log(theArray);


// printProfile(profile);

// console.log('---');
// console.log('---');

// // cleaner loops

// const printProfileDataNew = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++){
//         profileDataArr[i];
//     }
//     console.log('---');

//     // is the same as
    
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem);
//     });

// };




