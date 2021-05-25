/* learning Promise */

// // callback examples

// console.log('Request data...');
// //по сути внутрь мы передаем callback
// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     };
//     //по сути внутрь мы передаем callback
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received', backendData);
//     }, 2000)
// }, 2000);


/* Promise */

console.log('Request data...');

//в конструкторе класса Promise ф-я callback
// resolve, reject - также являются ф-ями
const p = new Promise(function (resolve, reject) {
    // некий асинхронный код
    // переданный callback внутри setTimeout вызывается, когда 
    // асинхронная операция закончена
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        };
        resolve(backendData) // promise finished
        // resolve(); // promise finished
    }, 2000);
});

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
    .then(clientData => {
        console.log('Data received', clientData);
        clientData.fromPromise = true
        return clientData
    })
    .then(data => {
        console.log('Modified', data)
    })
    .catch(err => console.error('Error: ', err))

