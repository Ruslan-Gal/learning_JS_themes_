"use strict";

// function copy(mainObj) {
//     let objCopy = {};
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//         z: {
//             aa: 7
//         }
//     }
// }

// const newNumbers = copy(numbers);
// newNumbers.c.x = 'rrrr';
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17
// };

// // Поверхностное копирование
// const clone = Object.assign({}, numbers, add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'rrrrrr';
// console.log(oldArray);
// console.log(newArray);

//// Spread operator
// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// log(...num); // 2 5 7

// const array = ['a', 'b'];
// const newArray = [...array];
// console.log(newArray);

// const obj = {
//     one: 1,
//     two: 2
// };

// const newObj = { ...obj };
// console.log(newObj);

const x = {
    a: 5
};

const y = {
    b: x.c
};

console.log(y);