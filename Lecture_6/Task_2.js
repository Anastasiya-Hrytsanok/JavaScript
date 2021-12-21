let send = document.getElementById("send");

let changeValue = (e) => {
    const nameForm = document.forms['nameForm'];
    nameForm.elements.text.value = "огурчик rip";
    e.preventDefault();
}

send.onclick = changeValue;