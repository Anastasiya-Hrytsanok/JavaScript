const showSubmenu = (e) => {
    e.target.getElementsByClassName("submenu")[0].classList.toggle("display-none");
}

const menuItem = document.getElementsByClassName("menuItem");

for (const i of menuItem) {
    i.addEventListener("mouseenter", showSubmenu);
    i.addEventListener("mouseleave", showSubmenu)
}