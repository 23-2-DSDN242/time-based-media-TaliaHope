// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  angelMode DEGREES ; 
  background(200); //  pink
  fill(0); // dark grey
  textSize(400);
  textAlign(CENTER, CENTER);
  
  translate (width/2, height/2)
  Push()
  rotate ((360/12)+11)
  Text ("11",0,0)
  Pop()

  let blockSize = 50;

  noStroke()
  push()
  rotate
  
}
