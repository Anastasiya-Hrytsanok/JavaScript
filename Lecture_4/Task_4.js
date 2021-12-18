let ul = document.createElement("ul");
document.body.append(ul);

let enteredNum = prompt("Введите число:");
console.log(enteredNum);

while (!!enteredNum && !isNaN(enteredNum)) {
    enteredNum = Number(enteredNum);
    let lis = [...document.getElementsByTagName("li")];
    let li = document.createElement("li");
    if (lis.length === 0) {
        li.innerText = enteredNum;
    } else {
        let values = lis.map((li) => Number(li.innerText));
        let summ = enteredNum;
        for (let i = 0; i < values.length; i++) {
            summ += values[i];
        }
        li.innerText = summ;
    }
    ul.append(li);
    enteredNum = prompt("Введите число:");
}