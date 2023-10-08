"use strict";
let userName = "Mohan";
console.log(userName);
// tsc main.ts to compile the ts file into js file 
// main.js writes let as var to make the sure is compatible with the older versions 
// tsc main.ts -w will compile and update the dom directly once the file is saved along with any modifications 
let a = 12;
let b = '6';
let c = 2;
// console.log(a+c);
// console.log(a/b); // this is allowed by JS but not in TS
// console.log(c*b); // this is allowed by JS but not in TS
let d = 12;
let f = 6;
let e = 2;
console.log(e + d);
console.log(e / f);
console.log(f * d);
