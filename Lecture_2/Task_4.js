let i = 1;
let a = prompt('Введите, пожалуйста, число для возведения в восьмую степень или воспользуйтесь нормальным калькулятором:');
let result = 1;

while (i <= 8) {
    result *= a;
    i++;
};
console.log(result);