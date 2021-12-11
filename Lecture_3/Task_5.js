let enFloor = Number(prompt("Enter a floor"));

function convertFloor(floor) {
    if (floor % 1 === 0, floor != 13) {
        if (floor < 0 || floor > 13) {
            return floor;
        } else if (floor >= 0 && floor < 13) {
            return floor + 1;
        }
    } else {
        console.log("Wrong floor")
    }
}

console.log(convertFloor(enFloor));