"use strict";
// const num = 50;
// (num === 50) ? console.log('Ok') : console.log('Error');

// конструкция switch всегда идет на строгое соответствие
// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Неверное');
//         break;
//     case 100:
//         console.log('Неверное');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// const num = 50;
// switch (num) {
//     case 50:
//         console.log(true);
//     default:
//         console.log(false);
// } // true
// // false

// const num = 52;
// switch (num) {
//     case 50:
//         console.log(true);
//         break;
//     default:
//         console.log(false);
//         break;
// }

///////////////////////////

function check(light) {
    switch (light) {
        case "red":
            return console.log("Стой");
        case "yellow":
            return console.log("Готовься");
        case "green":
            return console.log("Едь");
        default:
            return console.log("Не верные данные");
    }
}

function check(light) {
    switch (light) {
        case "green":
            return console.log("Stay");
            break;
        case "green":
            return console.log("stay2");
        default:
            return console.log("incorrect data");
    }
}
check("green");

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i == 0) {
            console.log(`j: ${j}`);
            return console.log("finish");
        }
    }
    console.log(`i: ${i}`);
}

const arr = [1, 2, 3, 4];
// const res = arr.filter(item => item % 2 === 0).reduce((sum, value) => sum + value, 0);
const res = arr
    .filter((item) => item % 2 === 0)
    .reduce((sum, value) => {
        return [+sum + value];
    }, 0);
console.log(res); // [6]

const arr = [1, 2, 3, 4];
const res = arr.map((num) => num * 2);
console.log(res);

const names = ["HTML", "CSS", "JavaScript"];

const nameLengths = names.map((name) => name.length);

console.log(nameLengths);

console.log(+[5]);

const arr = [1, 2, 3, 4];
const res = arr.reduce((sum, value) => value % 2 === 0 ? [+sum + value] : [+sum], 0)
console.log(res); // [6]

// const res = arr.reduce((sum, value) => {
//     if (value % 2 === 0) {
//         return [+sum + value];
//     } else return [+sum];
// }, 0);
console.log(res); // [6]
