"use strict";
const _ = require("lodash");

// const duplicateValues = (items) => items.flatMap((item) => [item, item]);

// const enlargeArrayImage = (items) => {
//   console.log(duplicateValues(['*'])); // [ '*', '*' ]
//   const horizontallyStretched = items.map(duplicateValues);
//   console.log(horizontallyStretched); // [ [ '*', '*' ] ]
//   return duplicateValues(horizontallyStretched); //[ [ '*', '*' ], [ '*', '*' ] ]
// };

// const arr = [
//   ['*'],
// ];

// const res = enlargeArrayImage(arr);
// console.log(res);  // [ [ '*', '*' ], [ '*', '*' ] ]

// const items = [
//   ['*'],
// ];
//                      //   [*]     // => [*,*]   *     [[*, *]]
// const test = items.map((item) => item.flatMap((it) => [it, it]));
// console.log(test); // [ [ '*', '*' ] ]
