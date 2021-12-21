let send = document.getElementById("send");

let informationOutput = (e) => {
    let inputText = document.getElementsByTagName("textarea")[0];
    if (inputText.value === "") {
        inputText.focus();
    }
    e.preventDefault();
}

send.onclick = informationOutput;