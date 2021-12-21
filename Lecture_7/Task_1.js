let add = document.getElementById("add");
let takeAway = document.getElementById("takeAway");
let amount;
let sum = 0;
let calculator;
let dohod = document.getElementById("dohod");
let rashod = document.getElementById("rashod");
let itog = document.getElementById("itog");
let sumPlus = 0;
let sumMinus = 0;
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

let addSum = () => {
    calculator = document.forms['calculator'];
    amount = Number(document.getElementById("amount").value);
    sum = sum + amount;
    itog.innerText = "Итого: " + sum;
    sumPlus = sumPlus + amount;
    dohod.innerText = "Доход: " + sumPlus;
    calculator.reset();
    drawDiagram();
}

let takeAwaySum = () => {
    calculator = document.forms['calculator'];
    amount = Number(document.getElementById("amount").value);
    sum = sum - amount;
    itog.innerText = "Итого: " + sum;
    sumMinus = sumMinus + amount;
    rashod.innerText = "Расход: " + sumMinus;
    calculator.reset();
    drawDiagram();
}

let drawDiagram = () => {
    if (sumPlus > sumMinus) {
        itog.style.color = "green";
        plus.style.height = "0%";
        minus.style.height = ( 1 - sumMinus / sumPlus) * 100 + "%";
    }
    else if (sumMinus > sumPlus) {
        itog.style.color = "red";
        minus.style.height = "0%";
        plus.style.height = (1 - sumPlus / sumMinus) * 100 + "%";
    } else {
        itog.style.color = "black";
        plus.style.height = "0%";
        minus.style.height = "0%";
    }
}

add.onchange = addSum;
takeAway.onchange = takeAwaySum;