let car = {
    color: "red",
    model: "porsche",
    production_year: 2001
}

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}