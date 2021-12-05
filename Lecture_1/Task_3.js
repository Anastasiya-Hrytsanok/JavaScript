let new_object = createObject();

console.log(new_object);

function createObject() {
    let a = 9;
    let b = "Девять"
    let array = [1, 5, 345, 756, 34, 78, 4, 6, 35, 2566];
    let sum = array[3] + array[7] + array[8];

    [a, b] = [b, a];

    return {a, b, sum};
}