let a = 0;

let showCoordinates = () => {
    if (window.pageYOffset > a) {
        console.log('вниз');
    } else {console.log('вверх');}
    a = window.pageYOffset;
}

window.onscroll = showCoordinates;