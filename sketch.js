var col = {
  r: 255,
  g: 0,
  b: 0
}

var spot = {
  x: 100,
  y: 50
}

function setup() {
createCanvas(600,400);
background(0);
}


function draw() {
  col.r = random(100, 255);
  col.g = random(50,200);
  col.b = random(100, 200);
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  // fill(col.r, col.g, col.b);
  // ellipse(spot.x, spot.y, 24, 24);

  fill(col.r, col.g, col.b);
  ellipse(mouseX, mouseY, 24, 24);
//   if(mouseX > 300){
//   ellipse(mouseX, mouseY, 24, 24);
// } else{
//   rect(mouseX, mouseY, 24, 24);
// }
}
