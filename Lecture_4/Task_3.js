let amount = 0;

let createMessage =  (text, backgroundColor, top, left, id) => {
    let message = document.createElement("div");
    message.id = id;
    message.className = "message";
    message.style.position = "fixed";
    message.innerText = text;
    message.style.backgroundColor = backgroundColor;
    message.style.top = top + "px";
    message.style.left = left + "px";  
    return message;
}

let showMessage = (text, backgroundColor, top, left) => {
    let message = createMessage(text, backgroundColor, top, left, amount + 1);
    document.body.append(message);
    amount++;
    let divs = document.getElementsByTagName("div");
    let messages = [...divs];
    if (messages.length > 3) {
        let ids = messages.map((div) => div.id);
        let min = Number(Math.min(...ids));
        let delDiv = messages.find((message) => message.id == min);
        delDiv.remove();
    }
}