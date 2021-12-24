let user = {
    name: "Vasya",
    email: "vasyaK@mail.ru",
    phone: 375666666666,
    id: "numberone"
}

let firstUser = {};

Object.assign(firstUser, user);

console.log(firstUser);