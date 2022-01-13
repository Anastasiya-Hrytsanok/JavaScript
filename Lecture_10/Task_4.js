class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.eats = true;
    }
    speak() {
        console.log("dialog");
    }
    move() {
        console.log("walk");
    }
}

class Child extends Person {
    constructor(name, age, toys) {
        super(name, age);
        this.toys = toys;
    }
    speak() {
        console.log("crying");
    }
    move() {
        console.log("crawl");
    }
    play() {
        console.log(`play with ${this.toys}`);
    }
}

class Adult extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.hasJob = true;
        this.salary = salary;
    }
    move() {
        console.log("walk, drive");
    }
    work() {
        if (this.hasJob) {
            console.log(`I work`);
        } else {
            console.log("I don't work");
        }
    }
}