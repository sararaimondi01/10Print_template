let x = 0;
let y = 0;
let size = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(200);
  strokeWeight(5);
  fill(255);
  rect(x, y, size);

  x = x + size;

  if (x > width) {
    x = 0;
    y = y + size;
  }
  //y = y + 100;
}
