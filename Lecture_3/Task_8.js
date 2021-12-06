let num = prompt("Enter a number");
let arr;
let sum;

function sumDidits() {
    debugger;
    if (num.length > 1) {
        sum = 0;
        arr = [];
        for (let i = 0; i < num.length; i++) {
            arr.push(Number(num.charAt(i)));
        }
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        num = sum.toString();
        if (num.length > 1) {sumDidits(num)}
        return num;
    }
}
console.log(sumDidits(num));