let speed = 30;
var mask;

function preload() {
  mask = loadImage('mask.png')
}

function setup() {
	createCanvas(1000, 1000)
	
	noLoop()
}

function draw() {
  
	background(random(255), random(255), random(255))
   
	let x = width/2
	let y = height/2

	noStroke()

	//noFill()


	//push()
	//translate(50, 50)
	fill(random(255), random(255), random(255))
	beginShape()
	for (let i = 0; i < 100000; i ++) {
		vertex(x, y);
		// x += random(-speed, speed)
		// y += random(-speed, speed)

		if (random(0, 100) < 50) {
			//x += random(-speed, speed)
			if(random(100) <50) {
				x -= speed
			}
			else {
				x += speed
			}
		}

		if (random(100) < 50) {
			y -= speed
		}

		else {
			y += speed
		}
	}
	endShape()
	//pop()
    filter(BLUR, 7)

	 image(mask, 0, 0, 1000, 1000)
	

}

/////



// let scale;
// let speed = 12;
// let img;

// function preload() {
//   img = loadImage('mask.png')
// }

// function setup() {
//   createCanvas(1000, 1000);
//   noStroke();
//   scale = width / 20;
// }

// function draw() {
  
//     let x = width/2;
//     let y = height/2;
  
//   for (let i = 0; i < scale; i++) {
//     colorMode(RGB, (i + 1) * scale * 10);
//     fill(millis() % ((i + 1) * scale * 10));
//     rect(i * scale, 0, scale, height);
//   }
//   push() 
//   beginShape();
//   fill(248, 51, 105, 50)
//   stroke(255)
//   strokeWeight(2)
//     for (let i=0; i<1000; i++) {
      
//       vertex(x, y);
// 		// x += random(-speed, speed)
// 		// y += random(-speed, speed)

// 		if (random(-50, 10) < 50) {
// 			//x += random(-speed, speed)
// 			if(random(100) <50) {
// 				x -= speed
// 			}
// 			else {
// 				x += speed
// 			}
// 		}

// 		if (random(100) < 50) {
// 			y -= speed
// 		}

// 		else {
// 			y += speed
// 		}
// 	}
// 	endShape()
//   pop()

//   image(img, 0, 0, 1000, 1000)
// }

// function mousePressed() {
//     saveCanvas("s1","png")
// }


