var x = 0;
var y = 0;
var gap = 20;
var deg = 10;
var color2 = 'cyan';

function setup() {
    createCanvas(1000,1000);
    background(34, 30, 34);
    frameRate(60);
    
}

function mousePressed() { //If you click the mouse, the lines and shapes will turn cyan.
    color2 = 'yellow'; 
}

function mouseReleased() { //If you release the mouse click, the lines and shapes will turn red.
    color2 = 'pink'; 
}

function draw() {
    spin();
    maze(400, 200);
    //grid();
}

function maze() { // This creates a random pattern of lines.
    
    stroke(color2);
    strokeWeight(1);
    if (random(0.1) < 2) { // The if statement changes the direction of the lines.
    line(x, y, x + gap, y + gap);
    } else {
    line(x, y + gap, x + gap, y);
    }
    
    y = y + 60; //This allows the lines to go across the canvas.
    if (y > height) {
    y = 10;
    x = x + gap;
    }
    
}

// function grid() { // This creates a grid of ellipse.
    
//     for ( var i = 0; i < 1000; i += 45 ) {
//     for ( var j = 0; j < 1000; j += 45 ) {
//     noStroke();
//     fill(color2);
//     rotate(PI);
//     ellipse(i, j, 20, 10,);
                    
//         }
//     }
// }
                    
function spin() { //This creates the circle in the middle of the canvas.
    push();
    scale(1);
    translate(width / 2,height / 2);
    rotate(radians(deg));
    deg++;
    fill(color2);
    rect(0,0,150,0);
    pop();
    }

function keyPressed() { //Saves Canvas as a PNG.
    if (keyCode == 32) {
    saveCanvas('','png');
  }
} 


