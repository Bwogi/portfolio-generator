

const animalArray = ['dog','cat','cow'];
animalArray.push('pig');

console.log(animalArray);

const personalObj = {
    name: 'Bwogi',
    age: 99
}

personalObj.age = 66;

personalObj.occupation = "Developer";

console.log(personalObj);


var transcriptObj = {
    id: '1101',
    studentId: '331313AS',
    status: 'partial'
}
transcriptObj.semID = '1';

console.log(transcriptObj);




// const message = 'Hello Node!';

// message = 'Goodbye node!'

// console.log(message);


// console.log('Hello Node!');
// console.log(document);
// var message = 'Hello Node';



// var sum = 3 + 4;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;

// console.log(commandLineArgs);
// // console.log(process.env);
// console.log(`process.argv[1]:  ${process.argv[1]}`);
// console.log(`process.argv[0]:  ${process.argv[0]}`);
// console.log(`process.argv:  ${process.argv}`);
// console.log('');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
// }

// printProfileData(profileDataArgs);


// arrow functions 
// old way of doing things
function addNums(numOne, numTwo){
    return numTwo + numOne;
}

// new ways 
const addNumbers = function(numOne, numTwo){
    return numOne + numTwo;
}

// another new way 
const addTheNos = (numOne, numTwo) => {
    return numTwo + numOne;
}

// they can all be rewritten
const addThoseNos = (numOne, numTwo) => numTwo + numOne;

console.log(`addNums: ${addNums(2,1)}`);
console.log(`addNumbers: ${addNumbers(2,1)}`);
console.log(`addTheNos: ${addTheNos(2,1)}`);
console.log(`addThoseNos: ${addThoseNos(2,1)}`);
console.log('---');

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
       console.log(profileDataArr[i]);  
    }
}

printProfileData(profileDataArgs);

console.log('---');