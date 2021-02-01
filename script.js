'use strict';

// //Excercices

// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI); 
// console.log(johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark has higher BMI because he has ${markBMI} in comperison with John because he has ${johnBMI}`)
// } else {
//     console.log(`John has higher BMI because he has ${johnBMI} in comparision with Mark because he has ${markBMI}`)
// };

// markWeight = 95;
// markHeight = 1.88;
// johnWeight = 85;
// johnHeight = 1.76;

// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI); 
// console.log(johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark has higher BMI because he has ${markBMI} in comperison with John because he has ${johnBMI}`)
// } else {
//     console.log(`John has higher BMI because he has ${johnBMI} in comparision with Mark because he has ${markBMI}`)
// };

// // checking backticks

// const name = 'Victor';
// const dateBirth = 1988;
// const job = 'analyst';
// const currentYear = 2021;

// const results = "I'm" + ' ' + name + " " + 'and' + ' ' + "I'm" + " " + (currentYear - dateBirth) + ' ' + 'and' + ' ' + "I'm" + ' ' + 'an' + ' ' + job;
// console.log(results);

// const resultsNew = `I'm ${name} and I'm ${currentYear - dateBirth} and I'm an ${job}`;
// console.log(resultsNew);

// // checking if/else statement

// const age = 17;
// const leftAge = 18 - age

// if (age >= 18) {
//     console.log('Sarah is legal')
// } else {
//     console.log(`Sarah is illegal, please wait ${leftAge} years`)
// };

// const birthAge = 2005;
// if ((birthAge >= 1901) & (birthAge <= 2000)) {
//     console.log('You are from XX century')
// } else {
//     console.log('You are from XXI century')
// };

// Conversion and coercion

// const favorite = prompt('What is your favorite number?')
// console.log(favorite)

// if (favorite === '23') {
//     console.log('Your favorite number is 23')
// } else if (favorite === '7') {
//     console.log('Your favorite number is 7')
// } else {
//     console.log('Your favorite number is different')
// }

// const hasDrivingLicense = true;
// const hasGoodVision = true;

// console.log(hasDrivingLicense && hasGoodVision);

// let dolphinScore1 = 96;
// let dolphinScore2 = 108;
// let dolphinScore3 = 89;

// let koalasScore1 = 88;
// let koalasScore2 = 91;
// let koalasScore3 = 110;

// let dolphinAvergae = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
// console.log(dolphinAvergae)

// let koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3
// console.log(koalasAverage)

// if (dolphinAvergae > koalasAverage) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinAvergae = koalasAverage) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore1 > koalasScore1) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore1 === koalasScore1) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore2 > koalasScore2) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore2 === koalasScore2) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore3 > koalasScore3) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore3 === koalasScore3) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// dolphinScore1 = 97;
// dolphinScore2 = 112;
// dolphinScore3 = 101;

// koalasScore1 = 109;
// koalasScore2 = 95;
// koalasScore3 = 123;

// dolphinAvergae = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
// console.log(dolphinAvergae)

// koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3
// console.log(koalasAverage)

// if (dolphinAvergae > koalasAverage) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinAvergae = koalasAverage) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore1 > koalasScore1) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore1 === koalasScore1) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore2 > koalasScore2) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore2 === koalasScore2) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore3 > koalasScore3) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore3 === koalasScore3) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// dolphinScore1 = 97;
// dolphinScore2 = 112;
// dolphinScore3 = 101;

// koalasScore1 = 109;
// koalasScore2 = 95;
// koalasScore3 = 106;


// dolphinAvergae = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
// console.log(dolphinAvergae)

// koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3
// console.log(koalasAverage)

// if (dolphinAvergae > koalasAverage) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinAvergae = koalasAverage) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore1 > koalasScore1) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore1 === koalasScore1) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore2 > koalasScore2) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore2 === koalasScore2) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }

// if (dolphinScore3 > koalasScore3) {
//     console.log('Dolphin has higher average in comparison with Koalas')
// } else if (dolphinScore3 === koalasScore3) {
//     console.log('Dolphin has the same average with Koalas')
// } else {
//     console.log('Koalas has higher average in comparison with Dolphin')
// }s

// const ageYou = 16;
// const drink = ageYou >= 18 ? 'I wanna wine' : 'I wanna water';
// console.log(drink)

// let drink2;
// if (ageYou >= 18) {
//     drink2 = 'wine'
// } else {
//     drink2 = 'water'
// }
// console.log(drink2)
// console.log(`I like to have a drink ${ageYou >= 18 ? drink2 = 'wine' : drink2 = 'water'}} `)


// const bill1 = 275;
// const bill2 = 40;
// const bill3 = 430;

// const tip1 = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.20 
// console.log(`Therefore you should pay ${tip1} and ${bill1} from bill and all together is ${tip1 + bill1}`);

// const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.20 
// console.log(`Therefore you should pay ${tip2} and ${bill2} from bill and all together is ${tip2 + bill2}`);

// const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 : bill3 * 0.20 
// console.log(`Therefore you should pay ${tip3} and ${bill3} from bill and all together is ${tip3 + bill3}`);

// function fruitMachine(apples, oranges) {
//     const juice = `I have ${apples} apples and ${oranges} oranges`;
//     return juice;
// };

// const appleJuice = fruitMachine(5, 7);
// console.log(appleJuice);

// const appleOrangeJuice = fruitMachine(2, 4);
// console.log(appleOrangeJuice);

// function calcYear1(birthYear) {
//     return 2037 - birthYear
// }
// const outPut1 = calcYear1(1988);

// const calcYear2 = function(birthYear) {
//     return 2056 - birthYear
// }
// const outPut2 = calcYear2(1995);

// const calcYear3 = birthYear => 2097 - birthYear;
// const outPut3 = calcYear3(2011);
// console.log(outPut1, outPut2, outPut3);

// const yearUntillRetirement = (dateBorn, firstName) => {
//     const age = 2086 - dateBorn;
//     const ready = 65 - age;
//     return `${firstName} is ${age} years before retirement`
// }

// const calcYear4 = yearUntillRetirement(2058, 'Sergio');
// console.log(calcYear4);



// //1 type
// function readyToGo(myBirth) {
//     let myAge = 2021 - myBirth;
//     let myPension = 65 - myAge;
//     return myPension; 
// } 

// let readyToSee = readyToGo(1988);
// console.log(`I have ${readyToSee} years before retirement`);

// //2nd type
// let readyToSee2 = function readyToGo(myBirth) {
//     myAge = 2021 - myBirth;
//     myPension = 65 - myAge;
//     return myPension; 
// }

// readyToSee2 = readyToGo(1990);
// console.log(`I have ${readyToSee2} years before retirement`);

// //3rd type
// const readyToSee3 = myBirth => 2056 - myBirth
// console.log(`I will have ${readyToSee3(1995)} years old in 2056`);


// const cutPieces = function(fruit) {
//     return fruit * 4
// }

// const fruitProcessor = function makeJuice(apples, oranges) {
//     const results1 = cutPieces(apples)
//     const results2 = cutPieces(oranges)
//     const results3 = results1 + results2
//     return results3
// }

// console.log(fruitProcessor(2,3))




const calcAverage = (a,b,c) => (a + b + c)/3;
const dolphine1 = calcAverage(44, 23, 71);
const dolphine2 = calcAverage(85, 54, 41);
const koalas1 = calcAverage(65, 54, 49);
const koalas2 = calcAverage(23, 34, 27);

console.log(dolphine1)
console.log(dolphine2)
console.log(koalas1)
console.log(koalas2)

const checkWinner = function(avgDolphine, avgKoalas) { 
    if (avgDolphine >= 2*avgKoalas) {
        console.log(`Dolphin is winner because dolphins have ${avgDolphine} score than ${avgKoalas}`)
    } else if (avgKoalas >= 2*avgDolphine)  {
        console.log(`Koalas is winner because dolphins have ${avgKoalas} score than ${avgDolphin}`)
    } else {
        console.log(`Apparantly, it's draw`)
    }
};

checkWinner(dolphine1, koalas1);

checkWinner(dolphine2, koalas2);