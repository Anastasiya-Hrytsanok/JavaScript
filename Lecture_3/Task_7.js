let arr;
let index1;
let index2;
let adding;

let transformArray = function(arr, index1, index2, adding) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    for (let i = 0; i < arr.length; i++) {
        arr[i] += adding;
    }
    return arr;
}

console.log(transformArray(["lol", "kek", "kak", "kuk", "krik"], 1, 2, "hu"));