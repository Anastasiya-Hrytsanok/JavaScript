const regex = new RegExp("/(<([^>]+)>)/ig");

const checkStr = (str) => {
    if (str === undefined || str === null) {
        throw new ReferenceError();
    }
    if (typeof str !== "string") {
        throw new TypeError();
    }
    if (str.length > 255 || str.length === 0) {
        throw new RangeError();
    }
    return !regex.test(str);
}