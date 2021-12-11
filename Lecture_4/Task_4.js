let ul = document.createElement("ul");
document.body.append(ul);
console.log(ul);
let sum = 0;

let num = Number(prompt("Введите число:"));
while (typeof(num) === "number") {
    sum = sum + num;
    let il = document.createElement("li");
    il.innerText = sum;
    ul.append(il);
    num = Number(prompt("Введите число:"));
}