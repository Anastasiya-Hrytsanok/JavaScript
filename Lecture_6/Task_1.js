let send = document.getElementById("send");

let getFormData = () => {
    const nameForm = document.forms['nameForm'];
    let name = nameForm.elements.name.value;
    let surname = nameForm.elements['surname'].value;
    console.log(name, surname);
    send.disabled = 'true';
    nameForm.reset();
}

send.onclick = getFormData;