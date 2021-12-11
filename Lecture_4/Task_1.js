window.onload = () => {
    let text = document.createElement("p");
    text.setAttribute("class", "text");
    text.innerText = "Это всего лишь текст";
    document.body.append(text);
    let alert = document.createElement("div");
    text.classList = "alert";
    alert.textContent = "А это сообщение об ошибке";
    text.append(alert);
    alert.style.backgroundColor = "red";
    alert.style.color = "white";
    alert.style.padding = "20px";
}