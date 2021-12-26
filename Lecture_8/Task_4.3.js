let button = document.getElementsByTagName("button")[0];
let div = document.createElement("div");
document.body.append(div);

let showMessage = () => {
    div.innerText = "loading...";
    setTimeout(() => div.innerText = "Прошло 5 секунд", 5000);
}

button.onclick = showMessage;