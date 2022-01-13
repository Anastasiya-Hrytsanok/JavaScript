let getDayOfWeekName = (dat) => {
    switch (dat) {
        case 0:
            console.log("воскресенье");
            break;
        case 1:
            console.log("понедельник");
            break;
        case 2:
            console.log("вторник");
            break;
        case 3:
            console.log("среда");
            break;
        case 4:
            console.log("четверг");
            break;
        case 5:
            console.log("пятница");
            break;
        case 6:
            console.log("суббота");
            break;
    }
}

getDayOfWeekName((new Date(2000, 2, 4).getDate()));