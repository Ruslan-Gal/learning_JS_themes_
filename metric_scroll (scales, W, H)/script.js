'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // setInterval(logScales, 3000);
    const box = document.querySelector('.box');

    function logScales() {

        // clientWidth = общая ширина - ширина скролла (т.е. 400px - 17px)
        const width = box.clientWidth; // 383 333
        const height = box.clientHeight;

        const offsetWidth = box.offsetWidth;
        const offsetHeight = box.offsetHeight;

        const scrollWidth = box.scrollWidth;
        const scrollHeight = box.scrollHeight;

        console.log("client: ", width, height);
        console.log("offset: ", offsetWidth, offsetHeight);
        console.log("scroll: ", scrollWidth, scrollHeight);
    }

    const btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        box.style.height = box.scrollHeight + 'px';
        console.log(box.scrollTop);
    });

    logScales();
    // размеры и координаты эл-та
    console.log(box.getBoundingClientRect());
    console.log(box.getBoundingClientRect().top);

    // Работа с Computed styles

    const boxStyle = window.getComputedStyle(box);
    // console.log(boxStyle);
    console.log(boxStyle.display);

    // Работа с document, window
    // documentElement will always be an <html> element
    const doc = document.documentElement;
    console.log(doc.clientWidth);
    console.log(doc.scrollTop);

    const btnUp = document.querySelector('.up');
    btnUp.addEventListener('click', () => {
        // проскролит страницу до самого верха
        doc.scrollTop = 0;
    });

    // scroll the window 400px down from the current position
    const x = 0;
    window.scrollBy(x, 400);

    // scroll the window to x: 0, y: 400px 
    window.scrollTo(x, 400);
});


