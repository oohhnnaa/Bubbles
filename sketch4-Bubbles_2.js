let bubbles = [];
let w, h;
let bubblesAnzahl;
let xoff = 0;
let force = {
  x: 0,
  y: 0,
};

function setup() {
  w = windowWidth;
  h = windowHeight;
  bubblesAnzahl = 1000;
  createCanvas(w, h);
  for (let i = 0; i < bubblesAnzahl; i++)
    bubbles[i] = new Bubble(random(w), random(h), random(115));
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    xoff += TWO_PI / 25.0;
    force.x = random(3);
    force.y = random(sin(xoff) * 5);
    // console.log(force.y);
    bubbles[i].move(force);
    if (bubbles[i].getX() > w) bubbles[i].setX(20);
    if (bubbles[i].getX() < 0) bubbles[i].setX(w - 20);
    if (bubbles[i].getY() > h) bubbles[i].setY(20);
    if (bubbles[i].getY() < 0) bubbles[i].setY(h - 20);
    if (
      dist(mouseX, mouseY, bubbles[i].getX(), bubbles[i].getY()) <
      bubbles[i].getRadius()
    ) {
      bubbles[i].move({ x: 20, y: 20 });
    }
    noStroke();
    fill(255, 30);
    bubbles[i].display();
    // text(i, bubbles[i].getX() + 2, bubbles[i].getY() + 2);
  }
}
