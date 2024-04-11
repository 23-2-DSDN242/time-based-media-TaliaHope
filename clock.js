function setup() {
  createCanvas (960, 500);
  draw_clock();
}

function draw_clock() {
  background(255, 218, 241); 
  
  translate( width/2 , height /2);
  
  fill(175, 133, 255); // purple
 
  // flower 1
  push();
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 50, 50, 150);
    rotate(PI/5);
  }

  // flower 2
  push();
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 50, 50, 150);
    rotate(PI/5);
  }
 pop()

 noStroke();
 fill(255, 244, 79); // yellow
 ellipse(0, 0, 60, 60);
}

