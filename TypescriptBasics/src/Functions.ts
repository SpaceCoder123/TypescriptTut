type stringNumber = string | number;

type stringOrNumberArray = (string | number)[];

type userId = stringNumber;

//literal types
let myName: "dave";

const add = (a: number, b: number): number => {
  return a + b;
};
// if there is no return of any data then the data type should be a void
const logMsg = (message: any): void => {
  console.log(message);
};

console.log(logMsg("message"));

const sumAll = (a: number = 2, b: number, c: number = 2): number => {
  return a + b + c;
};

console.log(sumAll(1, 2, 3));

const total1 = (...nums: number[]): number => {
  return nums.reduce((previous, current) => previous + current);
};

const total2 = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((previous, current) => previous + current);
};

console.log(total1(1, 2, 3, 4, 5, 6, 7)); // not i am not passing an actual array into the method
console.log(total2(1, 2, 3, 4, 5, 6, 7));
