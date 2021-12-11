let value = prompt("Enter a value");
let toType = prompt("Enter the type of the value");

// function convertType (value, toType) {
//     if (toType === "boolean") {
//         return Boolean(value);
//     } else if (toType === "string") {
//         return String(value);
//     } else if (toType === "number") {
//         return Number(value);
//     }
// }

// console.log(convertType(value, toType));

// function convertType1 (value, toType) {
//     switch(toType) {
//         case "boolean":
//             return Boolean(value);
//         case "string":
//             return String(value);
//         case "number":
//             return Number(value);
//     }
// }

// console.log(convertType1(value, toType));

// let convertType2 = function (value, toType) {
//     switch (toType) {
//         case "boolean":
//             return Boolean(value);
//         case "string":
//             return String(value);
//         case "number":
//             return Number(value);
//         default: throw new Error("Error");
//     }
// }

console.log(convertType2(value, toType));

let convertType3 = (value, toType) =>
    toType === "boolean" ? Boolean(value) :
    toType === "string" ? String(value) :
    toType === "number" ? Number(value) :
    console.log("Error")

console.log(convertType3(value, toType));