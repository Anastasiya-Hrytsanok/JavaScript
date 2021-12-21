let up = document.getElementById("up");
let mediana = document.getElementById("mediana");

mediana.style.backgroundColor = "blue";

let scrollUp = () => {
    window.scrollTo(0, 0);
}

let mediumScroll = () => {
    mediana.scrollIntoView(top);
}

up.onclick = scrollUp;
mediana.onclick = mediumScroll;