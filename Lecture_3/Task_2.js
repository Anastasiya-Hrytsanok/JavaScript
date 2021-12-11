let initialNum = prompt("Enter a number");
let initialDeg = prompt("Enter a degree");

function pow(num, deg) {
    if (deg % 1 === 0, deg >= 0) {
        return num ** deg;
    } else {
        console.log("Error")
    }
}

console.log(pow(initialNum, initialDeg));