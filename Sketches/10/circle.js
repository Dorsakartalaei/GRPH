var r;
var g;
var b;
var a;


class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.growing = true;
  }

  grow() {
    if (this.growing) {
      this.r += 1;
    }
  }

  show() {
    
    r = random(255); 
    g = random(255); 
    b = random(255); 
    a = random(255); 
    
    fill(r, g, b);
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  edges() {
    return (
      this.x + this.r >= width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= height ||
      this.y - this.r <= 0
    )
  }
}
