let gettingTheForm = (e) => {
    var shapeRequest = document.forms['shapeRequest'];
    var color = form.elements['figureColor'].value;
    color = color.value;
    var top = form.elements['topDistance'];
    var left = form.elements['leftDistance'];
    var radiusOrSide = form.elements['radiusOrSide'];
    var side = form.elements['side'];
    e.preventDefault();
}
let div = document.createElement("div");

let drawFigure = (title, color, top, left, radiusOrSide, side) => {
    div.style.backgroundColor = color;
    div.style.top = top + "px";
    div.style.left = left + "px";
    div.style.width = radiusOrSide + "px";
    switch (title) {
        case "круг":
            drawCircle(color, top, left, radiusOrSide);
            break;
        case "квадрат":
            drawSquare(color, top, left, radiusOrSide);
            break;
        case "прямоугольник":
            drawRectangle(color, top, left, radiusOrSide, side);
        default:
            alert("Unknown figure");
    }
}

let drawCircle = (radiusOrSide) => {
    div.style.height = radiusOrSide + "px";
    div.style.borderRadius = "50%";
}

let drawSquare = (radiusOrSide) => {
    div.style.height = radiusOrSide + "px";
}

let drawRectangle = (side) => {
    div.style.height = side + "px";
}

document.body.append(div);