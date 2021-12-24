let prices = {
    apple: 20,
    tomato: 94,
    banana: 32,
    cucumber: 34
}

let sumPrices = (obj) => {
    let sum = 0;
    let vals = Object.values(obj);
    for (let i = 0; i < vals.length; i++) {
        sum = sum + vals[i];
    }
    return sum;
}

console.log(sumPrices(prices));