console.log(Array.from(document.getElementsByTagName("li"))
.map((el, number) => number + 1 + ") " + el.innerText));