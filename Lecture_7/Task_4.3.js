let product = {
    name: "John",
    price: 30,
    sold: false
};

let {name: productName, price: productPrice, sold: productSold} = product;

console.log(productName, productPrice, productSold);