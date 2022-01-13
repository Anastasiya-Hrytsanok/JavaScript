const animal = {
    eat:() => {console.log("true")}
}

function Dog() {
    
}

Dog.prototype.eat = animal.eat;

let dog = new Dog();

dog.eat();