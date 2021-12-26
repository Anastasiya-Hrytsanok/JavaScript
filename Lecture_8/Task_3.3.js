let printNumbers = (from, to) => {
    if (from === to) {
        console.log(from);
    } else if (from < to) {
        let plus = () => {
            console.log(from);
            if (from !== to) {
                from = from + 1;
            }
        }
        let timer = setInterval(plus, 1000);
        setTimeout(() => clearInterval(timer), (to - from + 1) * 1000);
    } else if (from > to) {
        let minus = () => {
            console.log(from);
            if (from !== to) {
                from = from - 1;
            }
        }
        let timer = setInterval(minus, 1000);
        setTimeout(() => clearInterval(timer), (from - to + 1) * 1000);
    }
}

printNumbers(2, -10);