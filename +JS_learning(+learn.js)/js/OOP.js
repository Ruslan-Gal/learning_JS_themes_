"use strict";

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHi() {
//         console.log('Hello');
//     }
// };

// const john = {
//     health: 100
// };

// // john.__proto__ = soldier; // устаревший формат

// Object.setPrototypeOf(john, soldier)

// console.log(john); //{ health: 100 }
// console.log(john.armor); // 100
// john.sayHi(); // Hello


const soldier = {
    health: 400,
    armor: 100,
    sayHi() {
        console.log('Hello');
    }
};

// создаем обьект john, который будет 
// прототипно наследоваться от soldier
const john = Object.create(soldier);

console.log(john.health); // 400
console.log(john.armor); // 100
john.sayHi(); // Hello