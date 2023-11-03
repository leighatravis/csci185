let x = 100;
let y = 200;
let width = 150;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill (fillColor);
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
    noFill();
    if (ev.code === 'ArrowUp') {
        //do something 
        y = y-10;
    }
    else if (ev.code === 'ArrowDown') {
        //do something 
        y = y+10;
    }
    else if (ev.code === 'ArrowRight') {
        //do something 
        x = x+10; 
    }
    else if (ev.code === 'ArrowLeft') {
        //do something 
        x = x-10;
    }
    else if (ev.code === 'Space') {
        width = width + 3;
    }
    else if (ev.code === 'KeyR') {
        fillColor = "red";
    }
    else if (ev.code === 'KeyB') {
        fillColor = "blue";
    }  
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawCreature (x,y,fillColor, width, false);
    drawGrid(canvasWidth, canvasHeight);

}
function drawCreature(x, y, color, size, isZombie) {
    fill(color);
    //let size=150;
    let eyeball=150/7.5
    circle(x,y,150); //base face shape//
    if (isZombie) {
        fill ("red)")
    }
    else {
        fill ("white")
    }
    fill("white")
    circle(x-eyeball,y-eyeball,2*eyeball); // left eyeball//
    fill("white")
    circle(x+eyeball,y-eyeball,2*eyeball);//right eyeball//

    fill("black");
    circle(x-eyeball,y-eyeball,eyeball); // left eyeball//
    circle(x+eyeball,y-eyeball,eyeball);//right eyeball//

}

// Add event listener on keydown
document.addEventListener("keydown", moveController);
