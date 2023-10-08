"use strict";
let testName = "name"; // by default takes it into a string
// testName=12; // throws error

let testName1: string; // by default takes it into a string
testName1 = "John Snow";

let meaningOfLife: number;
meaningOfLife = 1;

let isLoading: boolean;
isLoading = true;

let album: any;
album = 1;
album = "abc";
album = true;

let dynAlbum: number | string; // union type, can only be a string or a number
dynAlbum = "test";
dynAlbum = 1;
// dynAlbum = false;  throws error

let isActive: number | boolean; // union type, can only be a string or a number

// isActive  =  "test"; throws error
isActive = 1;
isActive = false;

// declare methods
const sum = (a: number, b: number) => {
  return a + b;
};

let sumTest: number;
sumTest = sum(1, 2);

let sumTest1: string;
// sumTest1 = sum(1,2); // throws error

// Regular expressions
let re: RegExp = /\w+/g;
