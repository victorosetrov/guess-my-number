//Excercices

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI); 
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark has higher BMI because he has ${markBMI} in comperison with John because he has ${johnBMI}`)
} else {
    console.log(`John has higher BMI because he has ${johnBMI} in comparision with Mark because he has ${markBMI}`)
};

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI); 
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark has higher BMI because he has ${markBMI} in comperison with John because he has ${johnBMI}`)
} else {
    console.log(`John has higher BMI because he has ${johnBMI} in comparision with Mark because he has ${markBMI}`)
};

// checking backticks

const name = 'Victor';
const dateBirth = 1988;
const job = 'analyst';
const currentYear = 2021;

const results = "I'm" + ' ' + name + " " + 'and' + ' ' + "I'm" + " " + (currentYear - dateBirth) + ' ' + 'and' + ' ' + "I'm" + ' ' + 'an' + ' ' + job;
console.log(results);

const resultsNew = `I'm ${name} and I'm ${currentYear - dateBirth} and I'm an ${job}`;
console.log(resultsNew);

// checking if/else statement

const age = 17;
const leftAge = 18 - age

if (age >= 18) {
    console.log('Sarah is legal')
} else {
    console.log(`Sarah is illegal, please wait ${leftAge} years`)
};

const birthAge = 2005;
if ((birthAge >= 1901) & (birthAge <= 2000)) {
    console.log('You are from XX century')
} else {
    console.log('You are from XXI century')
};