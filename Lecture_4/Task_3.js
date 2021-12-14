let amount = 0;

let checkPosition = (top, left) => {
    let messages = [...document.getElementsByTagName("div")];
    let messageWithPosition = messages.find((message) => message.style.top === top + "px" && message.style.left === left + "px");
    return !!messageWithPosition;
}

let getNextPosition = (top, left) => {
    let newTop = top;
    let newLeft = left;
    while (checkPosition(newTop, newLeft)) {
        newTop = newTop + 25;
        newLeft = newLeft + 25;
    }
    return {
        newTop,
        newLeft
    };
}

let createMessage = (text, backgroundColor, top, left, id) => {
    let message = document.createElement("div");
    message.id = id;
    message.className = "message";
    message.innerText = text;
    message.style.backgroundColor = backgroundColor;
    message.style.top = top + "px";
    message.style.left = left + "px"
    return message;
}

let showMessage = (text, backgroundColor, top, left) => {
    let obj = getNextPosition(top, left);
    let message = createMessage(text, backgroundColor, obj.newTop, obj.newLeft, amount + 1);
    document.body.append(message);
    amount++;
    let divs = document.getElementsByTagName("div");
    let messages = [...divs];
    if (messages.length > 3) {
        let ids = messages.map((div) => div.id);
        let min = Number(Math.min(...ids));
        let delDiv = messages.find((message) => message.id == min);
        delDiv.remove();
        console.log(messages);
    }
}