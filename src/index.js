import './style.scss';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}
const john = new Person('John', 3);
john.sayHello(); // Output: "Hello, my name is John and I'm 30 years old."
