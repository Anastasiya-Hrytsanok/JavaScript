let userInput = prompt("Enter a number");

function sumDidits(num) {
    if (num.length > 1) {
        let sum = 0;
        let arr = [];
        for (let i = 0; i < num.length; i++) {
            arr.push(Number(num.charAt(i)));
        }
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        num = sum.toString();
        if (num.length > 1) {
            sumDidits(num)
        }
        return num;
    }
}
console.log(sumDidits(userInput));