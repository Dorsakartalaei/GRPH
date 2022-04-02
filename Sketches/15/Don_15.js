// Polar Perlin Noise Loop
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/136-polar-perlin-noise-loops.html
// https://youtu.be/ZI1dmHv3MeM
// https://editor.p5js.org/codingtrain/sketches/sy1p1vnQn

let phase = 0;
let zoff = 0;
let slider;
// let letter


// function preload() {
//   letter = loadImage('letter2.png')
// }

function setup() {
  createCanvas(1000, 1000);
  slider = createSlider(0, 10, 3, 0.1);
}

function draw() {
  background(28, 66, 95);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);
  //noStroke()
  fill(88, 164, 176, 95);
  
  textSize(800)
  textAlign(CENTER)
  text('N', 0, 300)
 
  beginShape();
  let noiseMax = slider.value();
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, width / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x * 2, y * 2);
  }
  
    
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x * 2, y * 2);
  }
 
  endShape(CLOSE);
  
  rotate(3)
  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, width / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x * 2, y * 2);
  }
  
    
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x * 2, y * 2);
  }
 
  endShape(CLOSE);
  
   rotate(6)
  beginShape();
  for (let a = 0; a < TAU; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, width / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  
    
  for (let a = 0; a < TAU; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
 
  endShape();
  
 
  
  phase += 0.003;
  zoff += 0.01;
}