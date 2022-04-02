
//var e = 0


// let img

//  function preload() {
//      img = loadImage('assets/mask.png')
//  }



function setup() {
createCanvas (800, 800)
angleMode(DEGREES)

}

function draw() {
    background(40)
    stroke(216, 30, 91)

    // beginShape()
    //     fill(149, 215, 174)
    //     vertex(100, 90)
    //     vertex(150,60)
    //     vertex(200,90)
    //     vertex(150, 125)
    // endShape()


//background
    // for (let x = 0; x < 400; x += 10)
    // line (x, 0, x, 400)

    // for (let y = 0; y < 400; y += 10)
    // line (400, y, 800, y)

    // for (let x = 400; x < 800; x += 10)
    // line (x, 400, x, 800)

    // for (let y = 400; y < 800; y += 10)
    // line (0, y, 400, y)


//overlayer

push()
    

    for (let i = 0; i < 1500; i  += 20) {
    line(0, i, 800 + i, 0)
    line(800, i, 0 + i, 0)
    line(800, 0 + i, 0 + i, 0)
    line(0, 0 + i, 10 + i, 800)
    line(800, 800 - i, 10 + i, 800)
    line(0 + i, 0 , 0, 800 - i)
pop()


    //e = e + 0.05

    //ellipse(e, 400, 300, 300) 

    // image(mask, 0, 0)
    // img.resize(500, 100);
    

    }


    fill("Salmon");
    textSize(16);
    textAlign(CENTER);
    text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
    
}