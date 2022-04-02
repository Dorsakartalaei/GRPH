

let font;
let vehicles = [];

function preload() {
  font = loadFont('BebasNeue.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  background(51);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('N', 320, 800, 900, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(51);
  
  beginShape()
  fill(320, 189, 189 )
  noStroke()
  rect(300, 100, 415, 750)
  endShape()
  
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

