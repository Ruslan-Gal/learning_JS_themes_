// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello');

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000, 'Hello');
//     timerId = setInterval(logger, 1000, 'Hello');
// });

// function logger(text) {
//     if (i === 3) {
//         clearInterval(timerId)
//     }
//     console.log(text);
//     i++;
// }

// // рекурсивный вызов setTimeout
// let id = setTimeout(function log() {
//     console.log("Hello");
//     id = setTimeout(log, 1000);

// }, 1000);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = `${pos}px`;
            elem.style.left = `${pos}px`;
        }
    }
}

btn.addEventListener('click', myAnimation);
