let user = {
    name: "User photo",
    size: "200 x 200"
}

let lil = JSON.stringify(user);
console.log(lil);

let lolk = JSON.parse(lil);
console.log(lolk);