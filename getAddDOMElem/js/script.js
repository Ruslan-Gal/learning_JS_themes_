'use strict';

// псевдомассив  (HTMLCollection)
const btns = document.getElementsByTagName('button');
// берем вторую по счету кнопку
const btn = document.getElementsByTagName('button')[1];

// псевдомассив  (HTMLCollection)
const circles = document.getElementsByClassName('circle')

// более современные методы получения элементов

// в отличие от обычных псевдомассивов, 
// querySelectorAll поддерживаем метод forEach

// псевдомассив  (NodeList)
const hearts = document.querySelectorAll('.heart');

hearts.forEach((item) => {
    console.log(item);
})

// вернет первый попавшийся под критерий элемент
const oneHeart = document.querySelector('.heart');

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');
//  поиск по селектору внутри эл-та wrapper
// hearts = wrapper.querySelectorAll('.heart'),
// oneHeart = wrapper.querySelector('.heart');


// console.dir(box);

// то, что пишется в css через тире, 
// в JS запишется в формате camelCase

// задаст inline стили (те, что прописаны в атрибуте style в html)
box.style.backgroundColor = 'blue';
box.style.width = '500px';
//  or
let num = 500;
box.style.cssText = 'background-color: blue; width: 500px'
box.style.cssText = `background-color: blue; width: ${num}px`

btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red' // ко всем обращаться нельзя. Будет ошибка
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
})

//  существует только внутри JS. На странице не появится
const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// добавление элемента на страницу в конец body
// document.body.append(div);

wrapper.append(div);
// добавление элемента на страницу в начало wrapper (внутрь блока wrapper)
// wrapper.prepend(div);

// old
// wrapper.appendChild(div);

// вставить эл-т до/после
// hearts[0].before(div);
// hearts[0].after(div);

// old
// wrapper.insertBefore(div, hearts[1])

// circles[0].remove();
// old
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// old
// wrapper.replaceChild(circles[0], hearts[0])

div.innerHTML = "<h1>Hello World</h1>"
// div.textContent = "Hello"

// вставка html в начало элемента div
// div.insertAdjacentHTML('afterbegin', "<h2>Hello</h2>")

// вставка html до начала элемента div
// div.insertAdjacentHTML('beforebegin', "<h2>Hello</h2>")

// вставка html в конец элемента div
// div.insertAdjacentHTML('beforeend', "<h2>Hello</h2>")

// вставка html после элемента div
// div.insertAdjacentHTML('afterend', "<h2>Hello</h2>")


