const canvas = document.getElementById("myCanvas");

const drawByKey = (e) => {
    const ctx = canvas.getContext("2d");
    switch (e.code) {
        case "KeyQ":
            drawCircle(ctx);
            break;
        case "KeyW":
            drawSquare(ctx);
            break;
        case "KeyL":
            drawRectangle(ctx);
            break;
    }
    unsubscribeHandlers();
}

const unsubscribeHandlers = () => {
    window.onkeydown = undefined;
}

let getFormData = () => {
    let shapeRequest = document.forms['shapeRequest'];
    var color = shapeRequest.elements['figureColor'].value;
    var top = Number(shapeRequest.elements['topDistance'].value);
    var left = Number(shapeRequest.elements['leftDistance'].value);
    var radiusOrSide = Number(shapeRequest.elements['radiusOrSide'].value);
    var side = Number(shapeRequest.elements['side'].value);
    return {
        color,
        top,
        left,
        radiusOrSide,
        side
    };
}

let clearCanvas = (ctx) => {
    ctx.clearRect(0, 0, 500, 500);
}

let drawCircle = (ctx) => {
    const {
        color,
        top,
        left,
        radiusOrSide
    } = getFormData();
    ctx.fillStyle = color;
    clearCanvas(ctx);
    ctx.beginPath();
    ctx.arc(left + radiusOrSide, top + radiusOrSide, radiusOrSide, 0, 2 * Math.PI);
    ctx.fill();
}

let drawSquare = (ctx) => {
    const {
        color,
        top,
        left,
        radiusOrSide
    } = getFormData();
    ctx.fillStyle = color;
    clearCanvas(ctx);
    ctx.beginPath();
    ctx.rect(left, top, radiusOrSide, radiusOrSide);
    ctx.fill();
}

let drawRectangle = (ctx) => {
    const {
        color,
        top,
        left,
        radiusOrSide,
        side
    } = getFormData();
    ctx.fillStyle = color;
    clearCanvas(ctx);
    ctx.beginPath();
    ctx.rect(left, top, radiusOrSide, side);
    ctx.fill();
}

let subscribeHandlers = (e) => {
    e.preventDefault();
    window.onkeydown = drawByKey;
}

document.getElementById("send").onclick = subscribeHandlers;