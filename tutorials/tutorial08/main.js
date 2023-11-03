function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight;
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged() {
    const color = document.querySelector("#color").value;
    fill(color);
    const size = document.querySelector("#size").value;
    const shape = document.querySelector("#shape").value;
    if (shape === 'circle') {
        circle(mouseX, mouseY, size);
    } else if (shape === 'square') {
        square(mouseX, mouseY, Number(size), 3, 3, 3, 3);
    } else {
        const r = size / 2;
        triangle(
            mouseX, mouseY - r, // first point
            mouseX - r, mouseY + r, // second point
            mouseX + r, mouseY + r, // third point
        );
    }
}
// 1.  figure out the selected shape by reaching into the dom (#shape).//
// 2.  Store that in a variable... shape//
// 3. Write an if else, if else statement so that only one of the shapes draws at any one time.//
