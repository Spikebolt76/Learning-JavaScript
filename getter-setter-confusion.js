class User {
    constructor (n) {
        this._name = n;
    }

    get name () {
        console.log('Getter called!'); // For demonstration
        return this._name;
    }

    set name (value) {
        console.log('Setter called!'); // For demonstration
        this._name = value;
    }
}

let u1 = new User('Jinesh'); // Constructor runs

console.log(u1.name); // This calls the GETTER

// Now, let's assign a new value. THIS calls the SETTER.
u1.name = 'Patel';

console.log(u1.name); // This calls the GETTER again to show the new value

// D:\JavaScript Prog\js-hindi-youtube-main\10_classes_and_oop\getter_setter.js