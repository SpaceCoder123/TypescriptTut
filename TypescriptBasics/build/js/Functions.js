"use strict";
//literal types
let myName;
const add = (a, b) => {
    return a + b;
};
// if there is no return of any data then the data type should be a void
const logMsg = (message) => {
    console.log(message);
};
console.log(logMsg("message"));
const sumAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(1, 2, 3));
const total1 = (...nums) => {
    return nums.reduce((previous, current) => previous + current);
};
const total2 = (a, ...nums) => {
    return a + nums.reduce((previous, current) => previous + current);
};
console.log(total1(1, 2, 3, 4, 5, 6, 7)); // not i am not passing an actual array into the method
console.log(total2(1, 2, 3, 4, 5, 6, 7));
