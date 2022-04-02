// var font;

// function preload() {
//   font = loadFont('RedHat.ttf')
// }



function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES)
  //background(30)
  // textFont(font)
  // textSize(128)
  // fill(255)
  // text('No', 30, 200)

}

function draw() {

  background(30)

  fill("Salmon");
  textSize(16);
  textAlign(CENTER);
  text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);

  // beginShape()
  // fill(255, 255, 255, 90)
  // vertex(344, 155)
  // vertex(445, 155)
  // vertex(800, 900)
  // vertex(200, 500)
  // endShape()
  
   textSize(900)
   textAlign(CENTER)
   fill(255)
   text('N', 600, 800)
   fill(255, 255, 255, 90)
   text('N', 570, 800)
   fill(255, 255, 255, 80)
   text('N', 540, 800)
   fill(255, 255, 255, 70)
   text('N', 510, 800)
   fill(255, 255, 255, 60)
   text('N', 470, 800)
   fill(255, 255, 255, 50)
   text('N', 420, 800)
   fill(255, 255, 255, 40)
   text('N', 350, 800)
   fill(255, 255, 255, 20)
   text('N', 300, 800)
   fill(255, 255, 255, 10)
   text('N', 260, 800)

   rotate(80)

   fill(255, 255, 255, 10)
   text('N', 900, 490)
   fill(255, 255, 255, 20)
   text('N', 870, 490)
   fill(255, 255, 255, 30)
   text('N', 840, 490)
   fill(255, 255, 255, 40)
   text('N', 810, 490)
   fill(255, 255, 255, 50)
   text('N', 770, 490)
   fill(255, 255, 255, 60)
   text('N', 720, 490)
   fill(255, 255, 255, 70)
   text('N', 750, 490)
   fill(255, 255, 255, 80)
   text('N', 700, 490)
   fill(255, 255, 255)
   text('N', 660, 490)

   rotate(-90)

   fill(255, 255, 255, 10)
   text('N', 900, 490)
   fill(255, 255, 255, 20)
   text('N', 870, 490)
   fill(255, 255, 255, 30)
   text('N', 840, 490)
   fill(255, 255, 255, 40)
   text('N', 810, 490)
   fill(255, 255, 255, 50)
   text('N', 770, 490)
   fill(255, 255, 255, 60)
   text('N', 720, 490)
   fill(255, 255, 255, 70)
   text('N', 750, 490)
   fill(255, 255, 255, 80)
   text('N', 700, 490)
   fill(255, 255, 255)
   text('N', 660, 490)

   rotate(50)

   fill(255)
   text('N', 600, 800)
   fill(255, 255, 255, 90)
   text('N', 570, 800)
   fill(255, 255, 255, 80)
   text('N', 540, 800)
   fill(255, 255, 255, 70)
   text('N', 510, 800)
   fill(255, 255, 255, 60)
   text('N', 470, 800)
   fill(255, 255, 255, 50)
   text('N', 420, 800)
   fill(255, 255, 255, 40)
   text('N', 350, 800)
   fill(255, 255, 255, 20)
   text('N', 300, 800)
   fill(255, 255, 255, 10)
   text('N', 260, 800)



}

function mousePressed() {
  saveCanvas("s1","png")
}




