function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    let y = 0;
    let w = 50;
    let x = 0;
    while (y <= 600) {
        console.log ("y=", "y*2=", 2 * y, "x=", x);
        // circle that goes horizonatally:
     circle (x, 200, w);
     x += 5;
        //circles that go vertically:
     circle(100, y, w);
     circle(300, y * 2, w); //gets bigger faster 
     circle(500, y, w);
     circle(700, y * 2, w); //gets bigger faster 
        y += 5;
        w += 1;
    }

    drawGrid(canvasWidth, canvasHeight);
}
