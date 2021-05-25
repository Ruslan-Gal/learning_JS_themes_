'use strict';

// to String
console.log(String(null)); // старый способ

const num = 5;

console.log(`https://vk.com/catalog/${num}`); // новый способ

let ver ={}
console.log(`${ver.prop}`); // undefined

const fontSize = 26 + 'px';

// to Number
console.log(Number('4'));
console.log(typeof(+'4'));
console.log(typeof(parseInt("15px", 10))); 

// const answer = +prompt('Write number', '');

// to boolean

// false: 0, '', null, undefined, NaN

let switcher = null;
// 1
if (switcher) {
    console.log('Working...');
}
// 2
console.log(Boolean('3'));
// 3
console.log(!!'3');