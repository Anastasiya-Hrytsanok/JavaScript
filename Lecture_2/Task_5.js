let input = prompt('Введите число', '0');

// function maxDigit(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     return Math.max(n % 10, maxDigit(Math.floor(n / 10)));
//   }
// }

function maxDigit(n) {
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    arr.push(Number(n.charAt(i)));
  }
  return Math.max(...arr);
}

console.log(maxDigit(input));