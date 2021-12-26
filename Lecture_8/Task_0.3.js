let degree = (x, n) => {
    if (n == 0) {
        return 1;
    } else if (n > 0) {
         return x * degree(x, n - 1);
    }
}

console.log(degree(2, 10));