let menuItem = document.getElementsByClassName("menuItem");

const showSubmenu = (e) => {
    if (e.target.tagName === "P") {
        e.target.parentElement.getElementsByClassName("submenu")[0].style.display = "flex";
    } else if (e.target.className === "menuItem") {
        e.target.getElementsByClassName("submenu")[0].style.display = "flex";
    } else {console.log(e.target);}
}

const hideSubmenu = (e) => {
    if (e.target.tagName === "P") {
        e.target.parentElement.getElementsByClassName("submenu")[0].style.display = "none";
    } else if (e.target.className === "menuItem") {
        console.log("ok");
        e.target.getElementsByClassName("submenu")[0].style.display = "none";
    } else {console.log(e.target);}
}

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onmouseover = showSubmenu;
    menuItem[i].onmouseout = hideSubmenu;
}