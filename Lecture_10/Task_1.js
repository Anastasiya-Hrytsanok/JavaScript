// function Car(name, year, color) {
//     this.name = name;
//     this.year = year;
//     this.color = color;
//     this.changeColor = function (newColor) {
//     this.color = newColor;
//     }
//    }


class Car {
    constructor(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    }
    changeColor(newColor) {
        this.color = newColor;
    }
}

let car = new Car('BMW', 2012, 'red');
car.changeColor('black');
console.log(car);