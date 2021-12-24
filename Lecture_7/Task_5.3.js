let arr = ["Tony", "Stark", 1, 45, 2, 5, 34, 9, 11];

let [name, surname, ...numbers] = ["Tony", "Stark", 1, 45, 2, 5, 34, 9, 11];

let sum = 0;

for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log(name, surname, sum);