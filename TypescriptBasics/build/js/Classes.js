"use strict";
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
class Teacher {
    constructor(name, music, age, lang = "Kannada") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
// const Teacher1 = new Teacher("Mohan", "DeGhumake", 23, "Kannada");
const Teacher1 = new Teacher("Mohan", "DeGhumake", 23);
console.log(Teacher1.name);
console.log(Teacher1.music);
// console.log(Teacher1.age); // cannot access these since it is private, getters and setters are required
// console.log(Teacher1.lang); // cannot access these since it is protected and only parent or child classes can access the information.
console.log(Teacher1.getAge());
// console.log(Teacher1.getLang());
// Inheritance
class Webdev extends Teacher {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return this.lang;
    }
}
const dev = new Webdev("MacBook", "Mohan", "Shaabhashiyan", 23);
console.log(dev.computer);
console.log(dev.music);
console.log(dev.name);
// console.log(dev.age); does not allow for implementation since it is not a child class
// console.log(dev.lang);
console.log(dev.getAge());
console.log(dev.getLang());
