class Bubble {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xoff = 0;
    this.vel = {
      x: random(-2, 2),
      y: random(-2, 2),
    };
  }

  getRadius() {
    return this.radius;
  }

  getX() {
    return this.x;
  }

  setX(x) {
    this.x = x;
  }

  getY() {
    return this.y;
  }

  setY(y) {
    this.y = y;
  }

  move(force) {
    this.x += force.x;
    this.y += force.y;
  }

  display() {
    circle(this.x, this.y, this.radius);
  }
}
