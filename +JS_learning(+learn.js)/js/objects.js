"use strict";

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };

// let doublePrices = Object.fromEntries(
//     // преобразовать в массив, затем map, затем fromEntries обратно объект
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(doublePrices.meat); // 8

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// // const sumSalaries = (obj) => {
// //     let summ = 0;
// //     for (let value of Object.values(obj)) {
// //         summ += value
// //     }
// //     return summ
// // }

// // alternative solution
// const sumSalaries = (obj) => {
//     return Object.values(obj).reduce((summ, value) => summ + value, 0);
// };

// console.log(sumSalaries(salaries)); //650

// let user = {
//     name: "John",
//     age: 30,
// };

// const count = (obj) => {
//     return Object.keys(obj).length;
// };

// let user = {
//     name: "John",
//     age: 30,
// };

// // цикл по ключам и значениям
// for (let [key, value] of Object.entries(user)) {
//     alert(`${key}:${value}`); // name:John, затем age:30
// }

// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// for (let [key, value] of user) {
//     alert(`${key}:${value}`); // name:John, затем age:30
// }
// //
// let [name1, name2, ...rest] = [
//     "Julius",
//     "Caesar",
//     "Consul",
//     "of the Roman Republic",
// ];

// alert(name1); // Julius
// alert(name2); // Caesar

// // Обратите внимание, что `rest` является массивом.
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// let [name1 = prompt("name?"), surname = prompt("surname?")] = ["Ivan"];
// alert(name1);
// alert(surname);

// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     items: ["Cake", "Donut"],
//     extra: true,
// };

// let {
//     size: {
//         width,
//         height
//     },
//     items: [item1, item2],
//     title = 'Menu'
// } = options;

// console.log(width);

// let user = {
//     name: "John",
//     years: 30,
// };

// let { name, years: age, isAdmin = false } = user;

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// function topSalary(salaries) {
//     if (Object.keys(salaries).length === 0) {
//         return null;
//     }
//     return Object.entries(salaries).reduce((max, [key, value]) => {
//         max = max < value ? value : max;
//         return max;
//     }, 0);
// }

// function topSalary(salaries) {
//     if (Object.keys(salaries).length === 0) {
//         return null;
//     }
//     let max = 0;
//     let maxName = null;

//     for (let [name, value] of Object.entries(salaries)) {
//         if (value > max) {
//             max = value;
//             maxName = name;
//         }
//     }
//     return maxName;
// }

// console.log(topSalary(salaries));

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// function topSalary(salaries = {}) {
//     let max = 0;
//     return Object.entries(salaries).reduce((maxName, [name, value]) => {
//         if (max < value) {
//             max = value;
//             maxName = name;
//         }
//         return maxName;
//     }, null);
// }

// console.log(topSalary(salaries)); // Pete

// console.log(...'abc') // a b c

////  вывод значений объекта, включая вложенные обьекты
// const options = {
//     name: 'Ivan',
//     age: 30,
//     films: {
//         favorite: 'Harry Potter'
//     }
// };

// for (const key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} has value ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key} has value ${options[key]}`);
//     }
// }

// const options = {
//     name: 'Ivan',
//     age: 30,
//     films: {
//         favorite: 'Harry Potter',
//         bestHero: 'Harry'
//     },
//     makeTest() {
//         console.log(Object.keys(this).length);
//     }
//     makeTest: function () {
//         console.log('test');
//     }
// };
// console.log(Object.keys(options).length);
// options.makeTest()

// const { favorite: filmName, bestHero: hero } = options.films;
// const { films: {
//     favorite: filmName, bestHero: hero
// } } = options;
// console.log(filmName);

const obj = {};
obj.prop = undefined;
const x = obj.prop?.y;
console.log(x);
