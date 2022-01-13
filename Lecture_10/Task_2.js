class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name}'s age ${this.age}`;
    }
}

console.log(new Person("Ira", 19).getInfo());