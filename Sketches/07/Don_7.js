const canvasSize = 1000;
const grSize = canvasSize;
function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(30);
  angleMode(DEGREES)
  pg = createGraphics(grSize, grSize);
}

function draw() {
  background(0);
  rotate(3)
  pg.background(0);
  pg.fill(255);
  pg.textFont("Hind");
  pg.textSize(canvasSize/2);
  pg.push();
  pg.translate(grSize/2, grSize/2);
  pg.textAlign(CENTER);
  //pg.textLeading(canvasSize/6.6+10);
  pg.text("N N N N N", -canvasSize/3.5, -canvasSize/5.25, 300);
  //pg.filter(BLUR, 6)
  pg.fill(169, 188, 208)
  pg.text("n n n n", -canvasSize/4.5, -canvasSize/5.5, 700);
  pg.pop();
  
 

  let tilesX = 18;
  let tilesY = 20;

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

 
      let wave = int(sin(frameCount * 0.3 + ( x * y ) * 0.7) * 60);
      //wave = 0;
  
      let sx = x*tileW + wave;
      let sy = y*tileH + wave * 5;
      let sw = tileW;
      let sh = tileH;


      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}
