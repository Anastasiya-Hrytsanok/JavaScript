// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
// return this.__name;
//     }
//     set name(val) {
//         this.__name = val;
//     }
//     speak() {
//         alert(this.name + ' says hi');
//     }
// }

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        alert(this.name + ' says hi');
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        alert(this.name + ' meow');
    }
}

console.log(new Cat("Maks").speak());