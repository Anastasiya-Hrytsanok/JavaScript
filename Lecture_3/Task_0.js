let name = prompt("Enter your name, please");

function sayHello() {
    if (name === "Mark") {
        console.log("Hi, " + name + "!");
    } else {console.log("Hello, " + name + "!");}
}

sayHello(name);