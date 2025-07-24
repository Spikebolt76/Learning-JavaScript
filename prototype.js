function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const alice = new Person("Alice");
// alice.sayHello();

console.log(alice);
console.log(alice.__proto__)

