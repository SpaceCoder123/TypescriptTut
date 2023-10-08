let stringArr = ["one", "two", "three"];
// stringArr.push(32); // throws an error since it is not the type string
stringArr.push("four");
console.log(stringArr);

let mixedData: any[] = ["string", 1, true]; // this can be any datatype since it is declared as an any type
mixedData.push("pushed");

// tuples

let customTuple: [string, number, boolean] = ["Dave", 32, false];
customTuple.push(312);
customTuple.push(312);
console.log(customTuple);

//objects

let myCustomObj: object;
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

// declaring a datatype object
interface Student {
  Registration_Number: string;
  StudentName: string;
  StudentClass?: number; // nullable types
  StudentBirthday: number;
}

interface Citizen {
  AadharNumber: string;
  RegistrationNumber: string;
  DateOfBirth: number;
  Name?: string;
  Location?: string; // nullable types
  PhoneNumber: number;
}

const myStudent: Student = {
  Registration_Number: crypto.randomUUID(),
  StudentName: "Dave",
  StudentClass: 5,
  StudentBirthday: Date.now(),
};

const myCitizen: Citizen = {
  AadharNumber: crypto.randomUUID(),
  RegistrationNumber: crypto.randomUUID(),
  DateOfBirth: Date.now(),
  Name: "",
  Location: "", // nullable types
  PhoneNumber: 82731873127319312,
};

// implementation of student and citizen mapper
const CitizanToStudentMapper = (student: Student, citizen: Citizen) => {
  const mappedStudent: Student = {
    Registration_Number: student.Registration_Number,
    StudentName: citizen.Name ? citizen.Name?.toUpperCase() : "",
    StudentClass: 5,
    StudentBirthday: citizen.DateOfBirth,
  };
  return mappedStudent;
};

const printCitizenName = (citizen: Citizen) => {
  return citizen.Name ? citizen.Name?.toUpperCase() : "Name Empty";
};

console.log(CitizanToStudentMapper(myStudent, myCitizen));
console.log(printCitizenName(myCitizen));
