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

const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);

let dolphinScore1 = 96;
let dolphinScore2 = 108;
let dolphinScore3 = 89;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

let dolphinAvergae = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
console.log(dolphinAvergae)

let koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3
console.log(koalasAverage)

if (dolphinAvergae > koalasAverage) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinAvergae = koalasAverage) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore1 > koalasScore1) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore1 === koalasScore1) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore2 > koalasScore2) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore2 === koalasScore2) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore3 > koalasScore3) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore3 === koalasScore3) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

dolphinScore1 = 97;
dolphinScore2 = 112;
dolphinScore3 = 101;

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;

dolphinAvergae = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
console.log(dolphinAvergae)

koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3
console.log(koalasAverage)

if (dolphinAvergae > koalasAverage) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinAvergae = koalasAverage) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore1 > koalasScore1) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore1 === koalasScore1) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore2 > koalasScore2) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore2 === koalasScore2) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore3 > koalasScore3) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore3 === koalasScore3) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

dolphinScore1 = 97;
dolphinScore2 = 112;
dolphinScore3 = 101;

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106;


dolphinAvergae = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
console.log(dolphinAvergae)

koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3
console.log(koalasAverage)

if (dolphinAvergae > koalasAverage) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinAvergae = koalasAverage) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore1 > koalasScore1) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore1 === koalasScore1) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore2 > koalasScore2) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore2 === koalasScore2) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}

if (dolphinScore3 > koalasScore3) {
    console.log('Dolphin has higher average in comparison with Koalas')
} else if (dolphinScore3 === koalasScore3) {
    console.log('Dolphin has the same average with Koalas')
} else {
    console.log('Koalas has higher average in comparison with Dolphin')
}