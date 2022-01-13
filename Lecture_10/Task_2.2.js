const find_index = (arr, value) => {
    const index = arr.indexOf(value, 0);
    if (index !== -1) {
        return index;
    } else {
        throw new Error("Not found");
    }
}

find_index([1, 2, 3, 4, 5], 6);