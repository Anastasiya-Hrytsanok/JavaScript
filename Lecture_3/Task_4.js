let str = prompt("Enter a string");

function deleteChars(str) {
    let cutStr = str.slice(1, str.length - 1);
    return cutStr;
}

console.log(deleteChars(str));