class Coder {
  name: string; // ts doesn't like this instruction, have to be initialized in the constructor;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

class Teacher {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Kannada"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
  }

  public getAge() {
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
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
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
