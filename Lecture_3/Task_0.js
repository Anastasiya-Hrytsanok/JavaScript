let initialName = prompt("Enter your name, please");

function sayHello(name) {
    if (name === "Mark") {
        console.log(`Hi, ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

sayHello(initialName);