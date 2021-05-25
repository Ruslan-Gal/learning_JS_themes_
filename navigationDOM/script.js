// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);

//  получаем все узлы (все ноды) родителя (здесь: body)
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);


// // узел - родитель родителя #current
// console.log(document.querySelector('#current').parentNode.parentNode);
// // получаем узлы
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// // получаем элемент
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('#current').parentElement);

console.log(document.body.childNodes);

// Перебор элементов в псевдо-массиве
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}