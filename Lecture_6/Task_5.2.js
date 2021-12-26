let header = document.getElementById("header");
let info = document.getElementById("info");
let contacts = document.getElementById("contacts");

console.log(info.getBoundingClientRect().height);

let showMenuItem = () => {
    if (window.pageYOffset < header.style.height) {
        document.getElementsByClassName("nav")[0].style.textDecoration = "underline";
    }
}

window.addEventListener('scroll', showMenuItem);