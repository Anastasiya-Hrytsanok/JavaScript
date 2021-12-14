let entereElement = () => {
    let li = document.createElement("li");
    li.innerText = "petuh";
    document.body.append(li);
    console.log(li);
}

let deleteElement = () => {
    let lis = document.getElementsByTagName("li");
    lis[lis.length - 1].remove();
}

document.getElementById("enter").addEventListener('click', entereElement);
document.getElementById("delete").addEventListener('click', deleteElement);