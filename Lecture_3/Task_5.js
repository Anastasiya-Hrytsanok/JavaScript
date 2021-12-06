let floor = prompt("Enter a floor");
floor = Number(floor);

function convertFloor(floor) {
    if (floor % 1 === 0, floor != 13) {
        if (floor < 0) {return floor;}
        else if (floor >= 0 && floor < 13) {return floor + 1;}
        else if (floor > 13) {return floor} 
    } else {console.log("Wrong floor")}
}

console.log(convertFloor(floor));