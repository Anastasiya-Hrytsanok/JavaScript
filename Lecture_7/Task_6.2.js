let isEmpty = (obj) => {
    console.log(Object.getOwnPropertyNames(obj));
    return Object.getOwnPropertyNames(obj).length === 0;
}