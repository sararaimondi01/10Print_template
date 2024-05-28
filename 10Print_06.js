let x = 0;
let y = 0;
let size = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(5);

  if(random(1) < 0.5) {
    noStroke();
    //fill(0);
    rect(x + size, y + size, size, size);
  } else {
    //fill(255);
    //rect(x + size, y + size, size, size);
    //line(x, y+size, x+size, y);
  }

  x += size;
  
  if (x > width) {
    x = 0;
    y += size;
  }
}
