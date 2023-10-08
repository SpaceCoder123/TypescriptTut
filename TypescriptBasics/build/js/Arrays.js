"use strict";
let stringArr = ["one", "two", "three"];
// stringArr.push(32); // throws an error since it is not the type string
stringArr.push("four");
console.log(stringArr);
let mixedData = ["string", 1, true]; // this can be any datatype since it is declared as an any type
mixedData.push("pushed");
// tuples
let customTuple = ["Dave", 32, false];
customTuple.push(312);
customTuple.push(312);
console.log(customTuple);
//objects
let myCustomObj;
myCustomObj = []; // converting the object type into array type
console.log(typeof myCustomObj);
let obj1 = {
    name: "Obj1",
    isStudent: true,
    class: 5,
};
console.log(obj1.name);
console.log(obj1.isStudent);
console.log(obj1.class);
const myStudent = {
    Registration_Number: crypto.randomUUID(),
    StudentName: "Dave",
    StudentClass: 5,
    StudentBirthday: Date.now(),
};
const myCitizen = {
    AadharNumber: crypto.randomUUID(),
    RegistrationNumber: crypto.randomUUID(),
    DateOfBirth: Date.now(),
    Name: "",
    Location: "",
    PhoneNumber: 82731873127319312,
};
// implementation of student and citizen mapper
const CitizanToStudentMapper = (student, citizen) => {
    var _a;
    const mappedStudent = {
        Registration_Number: student.Registration_Number,
        StudentName: citizen.Name ? (_a = citizen.Name) === null || _a === void 0 ? void 0 : _a.toUpperCase() : "",
        StudentClass: 5,
        StudentBirthday: citizen.DateOfBirth,
    };
    return mappedStudent;
};
const printCitizenName = (citizen) => {
    var _a;
    return citizen.Name ? (_a = citizen.Name) === null || _a === void 0 ? void 0 : _a.toUpperCase() : "Name Empty";
};
console.log(CitizanToStudentMapper(myStudent, myCitizen));
console.log(printCitizenName(myCitizen));
