let send = document.getElementById("send");

let informationOutput = (e) => {
    let info = document.forms['Info'];
    console.log(document.getElementsByTagName("textarea")[0].value);
    let boxes = document.getElementsByTagName("input");
    console.log("Выбранные мульты:")
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked === true) {
            console.log("- " + boxes[i].parentElement.getElementsByTagName("label")[0].innerText);
        }
    }
    e.preventDefault();
}

send.onclick = informationOutput;