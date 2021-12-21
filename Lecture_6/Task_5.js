const send = document.getElementById("send");

let getFormData = (e) => {
    let userInformation = document.forms['userInformation'];
    let name = userInformation.elements['name'].value;
    let surname = userInformation.elements['surname'].value;
    let tel = userInformation.elements['tel'].value;
    let message = document.getElementsByTagName("textarea")[0].value;
    console.log({
        name,
        surname,
        tel,
        message
    }) 
    e.preventDefault();
}

send.onclick = getFormData;