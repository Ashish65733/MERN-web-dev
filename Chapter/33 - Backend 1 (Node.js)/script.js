// console.log (process.argv);

// let args = process.argv;

// for (let i = 2; i < args.length; i++) {
//     console.log("Hello to ", args[i]);
// }


// const someValue = require('./math');

// console.log(someValue);

// const fruits = require('./Fruits');

// console.log(fruits);

// for globle npm installation example
// const figlet = require('figlet');

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// for import example
import {sum, g} from './math.js';
import { generate } from "random-words";

console.log("Random word is: ", generate());
// console.log("Sum is: ", sum(10,5));