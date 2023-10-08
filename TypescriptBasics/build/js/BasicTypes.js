"use strict";
let testName = "name"; // by default takes it into a string
// testName=12; // throws error
let testName1; // by default takes it into a string
testName1 = "John Snow";
let meaningOfLife;
meaningOfLife = 1;
let isLoading;
isLoading = true;
let album;
album = 1;
album = "abc";
album = true;
let dynAlbum; // union type, can only be a string or a number
dynAlbum = "test";
dynAlbum = 1;
// dynAlbum = false;  throws error
let isActive; // union type, can only be a string or a number
// isActive  =  "test"; throws error
isActive = 1;
isActive = false;
// declare methods
const sum = (a, b) => {
    return a + b;
};
let sumTest;
sumTest = sum(1, 2);
let sumTest1;
// sumTest1 = sum(1,2); // throws error
// Regular expressions
let re = /\w+/g;
