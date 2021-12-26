function* generator(from, to) {
    for (let i = from; i <= to; i++) {
        if (i % 2 === 0) {
            yield i
        };
    }
}

let gen = generator(2, 10);