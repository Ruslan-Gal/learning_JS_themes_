"use strict";
// let num; // global variable
// function showMessage(text) {
//     console.log(text);
//     num = 3;
//     let num = 5; // local variable
// }


// // showMessage('nice')
// // console.log(num); // 3
// function showMessage(text) {
//     console.log(text);
//     let num = 3; // local variable
// }
// showMessage('nice')
// console.log(num); // num is not defined

// const obj = {
//     fun() {
//         console.log(true);
//     }
// };

// // equal

// const obj1 = {
//     fun: function () {
//         console.log(true);
//     }
// };
// obj.fun();

// let str = 'abc';
// console.log(str.indexOf('c'));
// console.log(str.slice(1)); // bc

// const num = 12.6;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));
// console.log(typeof test);


//// callback functions

// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second()
// console.log('rrrr');

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback()
}

function done() {
    console.log('I finished this lesson');
}

learnJS('JS', done)
// learnJS('JS', function() {
//     console.log('I finished this lesson');
// })