// let a = 0;
// let b = 1;
// let c;

// console.log(a);
// console.log(b);

// while(a + b < 927372692193079200000n) {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// };

const firstNumber = 0;
const secondNumber = 1;

function fib(lastNumber, a, b) {
    let nextNumber = a + b;
    if (nextNumber < lastNumber) {
        console.log(nextNumber);
        fib(lastNumber, b, nextNumber);
    }
}
console.log(firstNumber);
console.log(secondNumber);
fib(927372692193079200000n, firstNumber, secondNumber);