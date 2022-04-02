
let graphics;
let x = 100
let y = 100

function setup () {
	createCanvas (1000, 1000)
	graphics = createGraphics(1000, 1000)
	graphics.background (30)
}

function draw() {
	if (mouseIsPressed) {
		graphics.stroke(236, 167, 44)
		graphics.strokeWeight(2)
		graphics.noFill()
		graphics.ellipse(mouseX, mouseY, 100)
	}

	image(graphics, 0, 0)

	if (mouseIsPressed) {
		fill(236, 167, 44, 50)
		noStroke()
	    ellipse(mouseX, mouseY, 70)
	}
}