let enteredStr = prompt("Enter a string");

let deleteChars = (str) => str.slice(1, str.length - 1);

console.log(deleteChars(enteredStr));