"use strict";

// let student = {
//     name: "John",
//     age: 30,
//     isAdmin: false,
//     courses: ["html", "css", "js"],
//     wife: null,
// };

// let json = JSON.stringify(student);
// console.log(json);

// let parse = JSON.parse(json);
// console.log(typeof parse);
// console.log(parse);

// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     participants: [{ name: "John" }, { name: "Alice" }],
//     place: room, // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// const json = JSON.stringify(meetup, function replacer(key, value) {
//     return key === "occupiedBy" ? undefined : value;
// });

// const json = JSON.stringify(meetup, (key, value) => key === 'occupiedBy' ? undefined : value);

// console.log(json);

// let user = {
//     name: "John",
//     age: 25,
//     roles: {
//         isAdmin: false,
//         isEditor: true,
//     },
// };

// const json = JSON.stringify(user, null, 2);
// console.log(json);

// const room = {
//     num: 23,
//     toJSON() {
//         return this.num
//     }
// };

// const meetup = {
//     title: 'Conference',
//     room
// };

// const json = JSON.stringify(meetup, null, 2);
// console.log(json)

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function (key, value) {
//     if (key == "date") return new Date(value);
//     return value;
// });

// console.log(meetup);

// console.log(meetup.date.getDate()); // 30 - теперь работает!

// let user = {
//     name: "Василий Иванович",
//     age: 35,
// };

// const json = JSON.stringify(user, null, 2);

// console.log(json);

// const obj = JSON.parse(json);

// console.log(obj);

// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room,
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// // Здесь нам также нужно проверить key =="", чтобы исключить первый вызов, где значение value равно meetup.
// const json = JSON.stringify(meetup, function replacer(key, value) {
//     return (value == meetup && key != "") ? undefined : value;
// }, 2);

// console.log(json);
