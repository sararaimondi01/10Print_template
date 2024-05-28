let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  background(100);
}

function draw() {
  stroke(255, 0, 0);
  strokeWeight(5);
  ellipseMode(CORNER);
  ellipse(x, y, 50);

  x = x + 50;

  if (x > 400) {
    x = 0;
    y = y + 50;
  }
}
