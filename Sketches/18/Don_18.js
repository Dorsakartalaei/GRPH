var g;
var t;

function setup() {
  createCanvas(1000, 1000);
  background(252, 204, 156)
  stroke(239, 122, 6);
  
 
  g = 500;
  t = 0
}


function draw() {
  
  beginShape();
  
  stroke(59, 31, 2)
  fill(250, 159, 66, 30);
  
  
  var x1 = width * noise(g + 95);
  var x2 = width * noise(g + 105);
  var x3 = width * noise(g + 115);
  var x4 = width * noise(g + 125);
  var y1 = height * noise(g + 135);
  var y2 = height * noise(g + 145);
  var y3 = height * noise(g + 155);
  var y4 = height * noise(g + 165);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  g += 0.01;
  
  endShape(CLOSE);
 
  
  translate(width/2, height/2);
  beginShape();
  
  noFill()
  strokeWeight(0.15)
  for (var i = 0; i < 600; i++) {
    var ang = map(i, 0, 200, 0, TAU);
    var rad = 900 * noise(i * 0.001, t * 0.0005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x / 2, y / 2);
  }
  endShape(CLOSE);

  t += 9;

  
  if (frameCount % 1000 == 0) {
    background(252, 204, 156);
  }
}
