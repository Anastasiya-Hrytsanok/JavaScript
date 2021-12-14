let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
    "Sergey", "Ivan", "Alan"];

let ol = document.createElement("ol");
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerText = arr[i];
    if (i % 2 === 0) {
        li.className = "even";
        li.style.backgroundColor = "green";
        ol.append(li);
    } else {
        li.className = "odd";
        li.style.backgroundColor = "blue";
        ol.append(li);
    }
    let partArr = arr[i].toLowerCase();
    let dividedArr = [];
    for (j = 0; j < partArr.length; j++) {
        dividedArr.push(partArr.charAt(j));
    }
    for (k = 0; k < dividedArr.length; k++) {
        let n = 0;
        for (d = 0; d < dividedArr.length; d++) {
            if (dividedArr[k] === dividedArr[d]) {
                n++;
                if (n >= 2) {
                    li.style.color = "white";
                }
            }

        }
    }
}
document.body.append(ol);