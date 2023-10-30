function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

  
    drawCreature(100, 400, 'teal', 200, true);
    drawCreature(250, 100, 'orange', 88, false);
    drawCreature(400, 300, 'green', 100, true);
    drawCreature(550, 500, 'hotpink', 120, true);
    drawCreature(700, 340, 'yellow', 140, false);
    

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
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

