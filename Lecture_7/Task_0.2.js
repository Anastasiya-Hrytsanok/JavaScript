let user = {
    name: "Elena",
    age: 29,
    sayIntro () {
        alert(`My name is ${this.name}, I am ${this.age}.`)
    }
};

user.sayIntro();