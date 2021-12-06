let num = prompt("Enter a number");
let deg = prompt("Enter a degree");

function pow (num, deg) {
    if (deg % 1 === 0, deg >= 0) {
        return num**deg;
    } else {console.log("Error")}
}

console.log(pow(num, deg));