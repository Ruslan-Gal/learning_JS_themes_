function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function done() {
    console.log('I learned JS');
}

learnJS('JS', done);




function r(f, cb) {
    console.log(`function f: ${f}`);
    cb('hello');
}

r('fff', call => console.log(call));