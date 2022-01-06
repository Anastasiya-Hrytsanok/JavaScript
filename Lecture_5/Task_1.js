const showSubmenu = (e) => {
    e.target.getElementsByClassName("submenu")[0].classList.toggle('display-none')
}

const menuItems = document.getElementsByClassName("menuItem");

for (const i of menuItems) {
    i.addEventListener("mouseenter",showSubmenu);
    i.addEventListener("mouseleave",showSubmenu);
}
