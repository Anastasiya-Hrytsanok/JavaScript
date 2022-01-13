const form = document.forms[0];
const firstField = form.elements["firstNumber"];
const secondField = form.elements["secondNumber"];
const calculateButton = form.elements["calculateButton"];


const showResult = (sum) => {
    const p = document.createElement("p");
    p.innerText = sum;
    document.body.append(p);
}

const calculate = (e) => {
    e.preventDefault();
    let firstNumber = Number(firstField.value);
    let secondNumber = Number(secondField.value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new TypeError();
    }
    const sum = firstNumber + secondNumber;
    showResult(sum);
}

const handleFieldChange = (e) => {
    if (firstField.value && secondField.value) {
        calculateButton.disabled = false;
    } else {
        calculateButton.disabled = true;
    }
}

form.addEventListener('submit', calculate);
firstField.addEventListener('input', handleFieldChange);
secondField.addEventListener('input', handleFieldChange);