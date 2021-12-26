let perv = new Date(1590749435756);

let data = (data) => {
    if (data.getDate() < 10) {
        return `0${data.getDate()}`;
    } else {
        return data.getDate();
    }
}

let month = (data) => {
    if (data.getMonth() < 9) {
        return `0${data.getMonth() + 1}`;
    } else {
        return data.getMonth() + 1;
    }
}

let year = (data) => {
    return data.getFullYear();
}

let hours = (data) => {
    if (data.getHours() < 10) {
        return `0${data.getHours()}`;
    } else {
        return data.getHours();
    }
}

let minutes = (data) => {
    if (data.getMinutes() < 10) {
        return `0${data.getMinutes()}`;
    } else {
        return data.getMinutes();
    }
}

console.log(`${data(perv)}.${month(perv)}.${year(perv)} ${hours(perv)}:${minutes(perv)}`)