let div = document.getElementById("dropdown-content");

let lol = document.getElementsByClassName("lol");
for (let i = 0; i < lol.length; i++) {
    lol[i].addEventListener('click', dropDownMenu);
}

const dropDownMenu = (e) => {
    div.style.display = "flex";
}