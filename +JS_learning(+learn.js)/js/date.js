"use struct";

let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(date.getTimezoneOffset()); // -180

let date = new Date(2016, 1, 28);
console.log(date);
date.setDate(date.getDate() +2);
console.log(date);

let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

let date = new Date(2012, 0, 3);  // 3 января 2012 года
const getWeekDay = (date) => {
    const dayIndex = date.getDay();
    const days = [ 'ВС','ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',]
    return days[dayIndex]
}
console.log( getWeekDay(date) );        // нужно вывести "ВТ"

let date = new Date(2021, 2, 28);
const getLocalDay = (date) => {
    let dayIndex = date.getDay();
    if (dayIndex === 0) {
        dayIndex = 7;
    }
    return dayIndex;
};
console.log(getLocalDay(date));

let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

console.log(getDateAgo(date, 365)); // 1, (1 Jan 2015)
console.log(date);

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month +1, 0)
    return date.getDate()
}
console.log(getLastDayOfMonth(2012, 1));

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let diff = now - today;
    return Math.round(diff/1000);
}
// or
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }

console.log(getSecondsToday());