const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) {
    // min and max included 
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    let counter = 0; // create a variable called counter and set to 0.//
    while (counter < 500);  // is the counter less than 500.//
}




    // // anything that you want to animate goes in this function:  
    let counter = 0;

    function draw() {
        const i = randomInt(0, 4); //give me a number between 0 and 4.//
        fill(colors[i]); // pretend i is 3: 
        stroke(colors[i]);
        strokeWeight(randomInt(1, 4));
     //draw a random circle:
        let x = randomInt(0, canvasWidth); // pick a number between 0 and 1400.//
        let y = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);
        circle(x, y, size); // create a circle with the given variable values.//
        counter += 1;
    }





// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

