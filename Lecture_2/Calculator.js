let arr = [];
let sum = 0;
let i = 0;
arr[0] = prompt('Введите число');
while (arr[i] != 15) {
    arr.push(arr[i]);
    i++;
    arr[i] = prompt('Введите число');
};
console.log(arr);
arr = arr.map(item => {
    return item = Number(item);
});
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
};
console.log(sum);