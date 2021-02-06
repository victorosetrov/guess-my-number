'use strict';

// //Excercices

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI);
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markHigherBMI) {
//   console.log(
//     `Mark has higher BMI because he has ${markBMI} in comperison with John because he has ${johnBMI}`
//   );
// } else {
//   console.log(
//     `John has higher BMI because he has ${johnBMI} in comparision with Mark because he has ${markBMI}`
//   );
// }

// const mWeight = 95;
// const mHeight = 1.88;
// const jWeight = 85;
// const jHeight = 1.76;

// const mBMI = mWeight / mHeight ** 2;
// const jBMI = jWeight / jHeight ** 2;
// console.log(mBMI);
// console.log(jBMI);

// const mHigherBMI = mBMI > jBMI;
// console.log(mHigherBMI);

// if (mHigherBMI) {
//   console.log(
//     `Mark has higher BMI because he has ${mBMI} in comperison with John because he has ${jBMI}`
//   );
// } else {
//   console.log(
//     `John has higher BMI because he has ${jBMI} in comparision with Mark because he has ${mBMI}`
//   );
// }

// // checking backticks

// const name = 'Victor';
// const dBirth = 1988;
// const job = 'analyst';
// const curYear = 2021;

// const results =
//   "I'm" +
//   ' ' +
//   name +
//   ' ' +
//   'and' +
//   ' ' +
//   "I'm" +
//   ' ' +
//   (curYear - dBirth) +
//   ' ' +
//   'and' +
//   ' ' +
//   "I'm" +
//   ' ' +
//   'an' +
//   ' ' +
//   job;
// console.log(results);

// const resNew = `I'm ${name} and I'm ${curYear - dBirth} and I'm an ${job}`;
// console.log(resNew);

// // checking if/else statement

// const age = 17;
// const lAge = 18 - age;

// if (age >= 18) {
//   console.log('Sarah is legal');
// } else {
//   console.log(`Sarah is illegal, please wait ${lAge} years`);
// }

// const bAge = 2005;
// if ((bAge >= 1901) & (bAge <= 2000)) {
//   console.log('You are from XX century');
// } else {
//   console.log('You are from XXI century');
// }

// Conversion and coercion

// const fav = prompt('What is your favorite number?');
// console.log(fav);

// if (fav == 23) {
//   console.log('Your favorite number is 23');
// } else if (fav == 7) {
//   console.log('Your favorite number is 7');
// } else {
//   console.log('Your favorite number is different');
// }

// const hasDrLicense = true;
// const hasGoodVis = true;

// console.log(hasDrLicense && hasGoodVis);

// const dScore = [96, 108, 89];
// const kScore = [88, 91, 110];

// const dAverage = (dScore[0] + dScore[1] + dScore[2]) / 3;
// console.log(dAverage);

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

// const calcAverage = (a,b,c) => (a + b + c)/3;
// const dolphine1 = calcAverage(44, 23, 71);
// const dolphine2 = calcAverage(85, 54, 41);
// const koalas1 = calcAverage(65, 54, 49);
// const koalas2 = calcAverage(23, 34, 27);

// console.log(dolphine1)
// console.log(dolphine2)
// console.log(koalas1)
// console.log(koalas2)

// const checkWinner = function(avgDolphine, avgKoalas) {
//     if (avgDolphine >= 2*avgKoalas) {
//         console.log(`Dolphin is winner because dolphins have ${avgDolphine} score than ${avgKoalas}`)
//     } else if (avgKoalas >= 2*avgDolphine)  {
//         console.log(`Koalas is winner because dolphins have ${avgKoalas} score than ${avgDolphin}`)
//     } else {
//         console.log(`Apparantly, it's draw`)
//     }
// };

// checkWinner(dolphine1, koalas1);
// checkWinner(dolphine2, koalas2);

// function logger() {
//     console.log('My name is Viktor')
// }

// logger()
// logger()
// logger()
// logger()
// logger()

//1 Declarative functions

// function smallPiece(fruit) {
//     return fruit * 4;
// }

// function fruitMachine(apples, oranges) {
//     const applePieces = smallPiece(apples)
//     const orangePiece = smallPiece(oranges)
//     const juice = (`I have ${applePieces} pieces apples and ${orangePiece} pieces oranges`)
//     return juice
// };
// const fruitProcessor1 = fruitMachine(6, 7);
// console.log(fruitProcessor1)

// function calcAge1(dateBirth) {
//     const realAge = 2021 - dateBirth;
//     const retirement = 65 - realAge;
//     return retirement;
// }
// const outputAge1 = calcAge1(1988);
// console.log(outputAge1);

//2 Expression functions
// const outputFruit = function fruitMachine(apples, oranges) {
//     const juice = (`I have ${apples} apples and ${oranges} oranges`)
//     return juice
// };
// console.log(outputFruit(5, 8));

// const outputAge2 = function (dateBirth) {
//     const realAge = 2021 - dateBirth;
//     const retirement = 65 - realAge;
//     return retirement;
// }
// const calcAge2 = outputAge2(1990)
// console.log(calcAge2);

//3 Array functions
// const outputFruit2 = (apples, oranges) => (`I have ${apples} apples and ${oranges} oranges`);
// console.log(outputFruit2(4, 9));

// const outputAge3 = (dateBirth, nameMy) => {
//     const realAge = 2021 - dateBirth;
//     const retirement = 65 - realAge;
//     return `He has ${retirement} years before and his name is ${nameMy}`;
// }
// const calcAge3 = outputAge3(1995, 'Viktor')
// console.log(calcAge3);

// challenge

//1)
// const calcAverage = (a,b,c) => (a + b + c)/3

// //const avgDolphins = calcAverage(44,23,71)
// const avgDolphins = calcAverage(85,54,41)
// //const avgKoalas = calcAverage(65,54,49)
// const avgKoalas = calcAverage(23,34,27)

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return(`Dolphins winner with ${avgDolphins} Vs Koalas with ${avgKoalas}`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return(`Koalas winner with ${avgKoalas} Vs Dolphins with ${avgDolphins}`)
//     } else {
//         return(`It's draw, bro`)
//     }
// }

// console.log(checkWinner(avgDolphins, avgKoalas));

// const calcTip = (bill)  => { return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 }

// const bills = [125, 555, 44]
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]

// console.log(bills, tip, totals)

// const calcTip = (bill) =>  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(calcTip(125));

// const bill = [125, 555, 44]
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// const totals = [bill[0] + calcTip(bill[0]), bill[1] + calcTip(bill[1]), bill[2] + calcTip(bill[2])]
// console.log(bill, tips, totals)

// const mark = {
//     name: 'Mark Miller',
//     weight: 78,
//     height: 1.69,
//     calcBMI: function() {
//         return this.weight / this.height ** 2
//     }
// }

// console.log(mark.calcBMI());

// const john = {
//     name: 'John Smith',
//     weight: 92,
//     height: 1.95,
//     calcBMI: function() {
//         return this.weight / this.height ** 2
//     }

// }

// const outPut55 = function() {
//     return mark.calcBMI < john.calcBMI ?
//     console.log(`${john.name}  BMI ${john.calcBMI()} is lower than ${mark.name}'s ${mark.calcBMI()}`) :
//     console.log(`${john.name} BMI ${john.calcBMI()} is higher than ${mark.name}'s ${mark.calcBMI()}`)
// }

// console.log(outPut55())

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`I like coding ${rep} times`);
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`I like football ⚽️ ${rep} times`);
//     rep++;
// }

// const calcTip = (bill) =>  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// const totals = [bill[0] + calcTip(bill[0]), bill[1] + calcTip(bill[1]), bill[2] + calcTip(bill[2]), bill[3] + calcTip(bill[3]), bill[4] + calcTip(bill[4]), bill[5] + calcTip(bill[5]), bill[6] + calcTip(bill[6]), bill[7] + calcTip(bill[7]), bill[8] + calcTip(bill[8]), bill[9] + calcTip(bill[9])]

// const tips = [];
// const totals = [];

// for (let i = 0; i < bill.length; i++) {
//     const tip = calcTip(bill[i]);
//     tips.push(tip);
//     totals.push(tip + bill[i]);
// }

// console.log(bill, tips, totals)

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum/ arr.length
// }

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// console.log(calcAverage(bill));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// console.log(temperatures.max)

////////////////////////////////////
// Linking a JavaScript File
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Variable name conventions
// let jonas_matilda = 'JM';
// let $function = 27;

// let person = 'jonas';
// let PI = 3.1415;

// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);

////////////////////////////////////
// Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher';

// let lastName = 'Schmedtmann';
// console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const markW = 95;
// const markH = 188;
// const johnW = 85;
// const johnH = 176;

// const markBMI = markW / markH ** 2;
// const johnBMI = johnW / johnH ** 2;
// console.log(markBMI, johnBMI);
// if (markBMI > johnBMI) {
//   console.log(
//     `Mark has ${markBMI} BMI, its higher John' BMI who has ${johnBMI}`
//   );
// } else {
//   console.log(
//     `John has ${johnBMI} BMI, its higher Mark' BMI who has ${markBMI}`
//   );
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
// }

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

////////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dAverage = (97 + 112 + 101) / 3;
// console.log(dAverage);

// const kAverage = (109 + 95 + 106) / 3;
// console.log(kAverage);

// if (dAverage > kAverage && dAverage > 100) {
//   console.log(
//     `Dolphins won because they have ${dAverage} its higher than Koalas' score ${kAverage}`
//   );
// } else if (kAverage > dAverage && kAverage > 100) {
//   console.log(
//     `Koalas won because they have ${kAverage} its higher than Dolphins' score ${dAverage}`
//   );
// } else {
//   console.log(`Its draw because the score less 100`);
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }

////////////////////////////////////
// The switch Statement

// const day = 'friday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

////////////////////////////////////
// Statements and Expressions
// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
// const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 430;
// const tips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const final = bill + tips;
// console.log(
//   `You should pay ${bill} bill and ${tips} tips and all together is ${final}`
// );

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

//987666677788888888

///////////////////////////////////////
// Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////
// Functions

// function logger() {
//   console.log('My name is Jonas');
// }

// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

///////////////////////////////////////
// Arrow functions

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

///////////////////////////////////////
// Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// function calcAverage(a, b, c) {
//   return (a + b + c) / 3;
// }

// let dAverage = calcAverage(85, 54, 41);
// let kAverage = calcAverage(23, 34, 27);

// const checkWinner = function (dAverage, kAverage) {
//   if (dAverage >= 2 * kAverage) {
//     console.log(
//       `Dolphins win they have ${dAverage} its higher than Koalas score ${kAverage}`
//     );
//   } else if (kAverage >= 2 * dAverage) {
//     console.log(
//       `Koalas win they have ${kAverage} its higher than Dolphins score ${dAverage}`
//     );
//   } else {
//     console.log('Draw');
//   }
// };

// console.log(checkWinner(dAverage, kAverage));

const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// //console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// //console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Introduction to Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// Exercise

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const bills = [125, 555, 44];
// const tips = [
//   bills[0] > 50 && bills[0] < 300 ? bills[0] * 0.12 : bills[0] * 0.2,
//   bills[1] > 50 && bills[1] < 300 ? bills[1] * 0.12 : bills[1] * 0.2,
//   bills[2] > 50 && bills[2] < 300 ? bills[2] * 0.12 : bills[2] * 0.2,
// ];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills[0], bills[1], bills[1]);
// console.log(tips[0], tips[1], tips[2]);
// console.log(totals[0], totals[1], totals[2]);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects
// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ];

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };

///////////////////////////////////////
// Dot vs. Bracket Notation

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, job, and friends'
//   );
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

///////////////////////////////////////
// Object Methods

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

// calcAge: function (birthYeah) {
//   return 2037 - birthYeah;
// }

// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYeah;
// }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//   name: 'Mark Miller',
//   weight: 78,
//   tall: 1.69,
//   calcBMI: function () {
//     this.BMI = this.weight / this.tall ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   name: 'John Smith',
//   weight: 92,
//   tall: 1.95,
//   calcBMI: function () {
//     this.BMI = this.weight / this.tall ** 2;
//     return this.BMI;
//   },
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// const higherBMI =
//   mark.calcBMI() > john.calcBMI()
//     ? console.log(
//         `${mark.name} has higher ${mark.calcBMI()} because ${
//           john.name
//         } has less ${john.calcBMI()}`
//       )
//     : console.log(
//         `${john.name} has higher ${john.calcBMI()} because ${
//           mark.name
//         } has less ${mark.calcBMI()}`
//       );

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ];
// const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

// for (let i = 0; i < jonas.length; i++) {
// Reading from jonas array
// console.log(jonas[i], typeof jonas[i]);

// Filling types array
// types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// continue and break
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

///////////////////////////////////////
// Looping Backwards and Loops in Loops
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ];

// 0, 1, ..., 4
// 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

///////////////////////////////////////
// The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bill.length; i++) {
//   const tip = caclTip(bill[i]);
//   tips.push(tip);
//   totals.push(tip + bill[i]);
// }

// console.log(bill, tips, totals);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weight repetition ${i}`);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(`Lifting weight repetition ${i}`);
// }

// const vArray = [
//   'Viktor',
//   'Osetrov',
//   2037 - 1988,
//   'analyst',
//   ['Aliyah', 'Valera', 'Elena'],
// ];

// const types = [];

// console.log('----Strings----');
// for (let i = 0; i < vArray.length; i++) {
//   if (typeof vArray[i] === 'number') break;
//   console.log(vArray[i], typeof vArray[i]);
//   //types[i] = typeof vArray[i];
//   //types.push(typeof vArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }

// console.log(ages);

// const viktor = [
//   'Viktor',
//   'Osetrov',
//   2037 - 1988,
//   'analyst',
//   ['Aliyah', 'Valera', 'Elena'],
// ];

// for (let i = viktor.length - 1; i >= 0; i--) {
//   console.log(viktor[i]);
// }

// for (let i = 1; i <= 3; i++) {
//   console.log(`I like excercises ${i}`);
//   for (let i = 1; i <= 3; i++) {
//     console.log(`I like to repeat ${i}`);
//   }
// }

// let i = 1;
// while (i <= 3) {
//   console.log(`I like coffee ${i}`);
//   i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`I win ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end... ');
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

// console.log(`
//   there are bills: ${bills},
//   there are tips: ${tips},
//   they are totals: ${totals}`);

// const cAvg = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(cAvg(bills));
// console.log(cAvg(tips));
// console.log(cAvg(totals));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

for (let i = 0; i < temperatures.length; i++) {
  if (typeof temperatures[i] === 'string') continue;
  console.log(temperatures[i], typeof temperatures[i]);
  //types[i] = typeof vArray[i];
  //types.push(typeof vArray[i]);
}

const calcTempApmplitude = function (temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; ++i) {
    const curTemp = temperatures[i];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
};
calcTempApmplitude([3, 4, 7]);
