let angle = 0;

let N;

let graphics;

let letter;

let words = 'NNNNNNN'

// function preload() {
//   N = loadImage("letter2.png");
// }

function setup() {
  createCanvas(1000, 1000, WEBGL);
  graphics = createGraphics(300, 300);
  graphics.background(0, 0, 0, 0);

  letter = createGraphics(300, 200);
  letter.fill(255)
  letter.textAlign(CENTER)
  letter.textSize(90)
  letter.text(words, 200, 200)
}

function draw() {
  background(255, 100);

  graphics.fill(30);
  graphics.noStroke();
  graphics.ellipse(mouseX, mouseY, 20);

  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, 1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.2);
  noStroke()
  box(400);

  texture(letter);

  angle += 0.02;
}
