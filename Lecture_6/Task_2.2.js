let showButton = () => {
    if (window.pageYOffset > document.documentElement.clientHeight) {
        document.getElementsByTagName("a")[1].style.display = "block";
    }
}

let hideButton = () => {
    if (window.pageYOffset < document.documentElement.clientHeight) {
        document.getElementsByTagName("a")[1].style.display = "none";
    }
}

window.addEventListener('scroll', showButton);
window.addEventListener('scroll', hideButton);