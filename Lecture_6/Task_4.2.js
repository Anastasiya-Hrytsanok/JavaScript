let RickAndMorty = document.getElementById("RickAndMorty");
let Spongebob = document.getElementById("Spongebob");
let GravityFalls = document.getElementById("GravityFalls");
let info = document.getElementById("info");

let returnButtonStyle = () => {
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "burlywood";
    }
}

let textRickAndMorty = () => {
    returnButtonStyle();
    info.innerText = "«Рик и Морти» — американский комедийный научно-фантастический анимационный сериал, созданный Джастином Ройландом и Дэном Хармоном и выпускаемый в рамках блока Adult Swim на телеканале Cartoon Network.";
    RickAndMorty.style.backgroundColor = "rgb(247, 229, 205)";
    RickAndMorty.style.borderBottom = "none";
}

let textSpongebob = () => {
    returnButtonStyle();
    info.innerText = "«Гу́бка Боб Квадра́тные Штаны́», также известный как «Спанч Боб Сквэр Пэнтс», — американский мультипликационный сериал, который транслируется на телеканале «Nickelodeon».";
    Spongebob.style.backgroundColor = "rgb(247, 229, 205)";
    Spongebob.style.borderBottom = "none";
}

let textGravityFalls = () => {
    returnButtonStyle();
    info.innerText = "«Гравити Фолз» — американский анимационный телевизионный сериал, созданный Алексом Хиршем и компанией Disney Television Animation для телеканалов Disney Channel и Disney XD.";
    GravityFalls.style.backgroundColor = "rgb(247, 229, 205)";
    GravityFalls.style.borderBottom = "none";
}

RickAndMorty.onclick = textRickAndMorty;
Spongebob.onclick = textSpongebob;
GravityFalls.onclick = textGravityFalls;