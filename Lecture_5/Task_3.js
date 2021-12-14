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
        // default:
        //     throw new Error;
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