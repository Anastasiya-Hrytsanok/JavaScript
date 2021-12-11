let arr = [];
let sum = 0;
let i = 0;
let userInput = prompt('Введите число');
while (userInput !== '15') {
    arr.push(userInput);
    userInput = prompt('Введите число');
};
console.log(arr);
arr = arr.map(item => item = Number(item));
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
};
console.log(sum);