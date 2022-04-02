var nParticles = 100
var particles = []
var particleSize = 50

function createParticle () {
    var Particle = {}

    particle.position = createVector (
        Math.random() * width, Math.random() * height
        )
    particle.direction = createVector(
        Math.random () * width,
        Math.random () * height
        )

    particle.update = funciton() {
        this.position.add(this.direction);
        if(this.position.x > width || 
            this.position.x < 0)
            this.position.x = width / 2;
        if(this.position.y > height || 
            this.position.x < 0)
            this.position.x = height / 2;
    }
    return particle;

}


function setup () {

    for (var i = 0; i < nParticles; i ++ )
        particle.push(createParticle())

    createCanvas (1000, 1000)
    background (30)
    stroke(0, 80)
    noFill(0, 90)


}

function draw() {
    background(255)
    for (var i = 0; i < nParticles; i ++) {
        particles[i].update()
        ellipse(
            particles[i].position.x,
            particles[i].position.y,
            particleSize
            )
    }

}