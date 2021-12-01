let a = 1;
let b = 1;
let c;

console.log(0);
console.log(a);
console.log(b);

while(a + b < 927372692193079200000n) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
};