function setup() {
  createCanvas (960, 500);
  draw_clock();
}

function draw_clock() {
 background(140, 82, 255); //border
 fill(74, 203, 174);
 noStroke()
 rect(20, 20, 920, 460, 10);
  
  // flower 1
  push();
  translate(765, 250);
  fill(253, 221, 241); // pink
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 50, 50, 150);
    rotate(PI/5);
  }
  noStroke();
  fill(255, 178, 226); // dark pink
  ellipse(0, 0, 60, 60);
  pop();

  // flower 2
  push();
  translate(480, 250);
  fill(255, 247, 211); // yellow
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 50, 50, 150);
    rotate(PI/5);
  }
  fill(255,218,123); // orange-yellow
  ellipse(0, 0, 60, 60);
  pop();

  // flower 3
  push();
  translate(200, 250);
  fill(165,217,250); // light blue
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 50, 50, 150);
    rotate(PI/5);
  }
  fill(5, 112, 255); // dark blue
  ellipse(0, 0, 60, 60);
  pop();

  // ":"flower 1
  push();
  translate(340, 295);
  fill(255, 222, 89); // orange
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 7, 7, 22);
    rotate(PI/5);
  }
  fill(255, 255, 255); // white
  ellipse(0, 0, 9, 9); 
  pop();    

   // ":"flower 2
   push();
   translate(340, 205);
   fill(255, 222, 89); // orange
   noStroke();
   for (let i = 0; i < 10; i ++) {
     ellipse(0, 7, 7, 22);
     rotate(PI/5);
   }
   fill(255, 255, 255); // white
   ellipse(0, 0, 9, 9); 
   pop();  

   // ":"flower 3
   push();
   translate(625, 205);
   fill(255, 222, 89); // orange
   noStroke();
   for (let i = 0; i < 10; i ++) {
     ellipse(0, 7, 7, 22);
     rotate(PI/5);
   }
   fill(255, 255, 255); // white
   ellipse(0, 0, 9, 9); 
   pop();    

   // ":"flower 4
   push();
   translate(625, 295);
   fill(255, 222, 89); // orange
   noStroke();
   for (let i = 0; i < 10; i ++) {
     ellipse(0, 7, 7, 22);
     rotate(PI/5);
   }
   fill(255, 255, 255); // white
   ellipse(0, 0, 9, 9); 
   pop();    

  // background flowers
  push();
  translate(60, 60);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple 
  ellipse(0, 0, 15, 15);
  pop();

  // background flowers
  push();
  translate(115, 80);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
   ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();

  // background flowers
  push();
  translate(76, 110);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
   ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();
    
  // background flowers
  push();
  translate(165, 50);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
   ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();

  // background flowers
  push();
  translate(185, 90);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
   ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();

    // background flowers
    push();
    translate(230, 55);
    fill(134, 156, 255); // purple
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
      rotate(PI/5);
    }
    fill(140, 82, 255); // dark purple
    ellipse(0, 0, 15, 15);
    pop();

    // background flowers
    push();
    translate(290, 47);
    fill(134, 156, 255); // purple
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
      rotate(PI/5);
    }
    fill(140, 82, 255); // dark purple
    ellipse(0, 0, 15, 15);
    pop();

    // background flowers
    push();
    translate(265,89);
    fill(134, 156, 255); // purple
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
      rotate(PI/5);
    }
    fill(140, 82, 255); // dark purple
    ellipse(0, 0, 15, 15);
    pop();

      // background flowers
    push();
    translate(339, 60);
    fill(134, 156, 255); // purple
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
      rotate(PI/5);
    }
    fill(140, 82, 255); // dark purple
    ellipse(0, 0, 15, 15);
    pop();

      // background flowers
      push();
      translate(318, 115);
      fill(134, 156, 255); // purple
      noStroke();
      for (let i = 0; i < 10; i ++) {
       ellipse(0, 10, 10, 30);
        rotate(PI/5);
      }
      fill(140, 82, 255); // dark purple
      ellipse(0, 0, 15, 15);
      pop();

  // background flowers
  push();
  translate(371, 100);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(400, 53);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
 
  // background flowers
  push();
  translate(147, 120);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(50, 152);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
 
  // background flowers
  push();
  translate(233, 120);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(97, 173);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();

  // background flowers
  push();
  translate(55, 205);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();

   // background flowers
   push();
   translate(68, 255);
   fill(134, 156, 255); // purple
   noStroke();
   for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
     rotate(PI/5);
   }
   fill(140, 82, 255); // dark purple
   ellipse(0, 0, 15, 15);
   pop(); 

  // background flowers
  push();
  translate(47, 297);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(90, 325);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 

  // background flowers
  push();
  translate(57, 360);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
 
  // background flowers
  push();
  translate(47, 407);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
 
  // background flowers
  push();
  translate(65, 453);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(100, 418);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();
 
  // background flowers
  push();
  translate(140, 380);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(140, 447);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(177, 417);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(209, 455);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(223, 397);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(258, 440);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(273, 381);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(310, 445);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(322, 397);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(305, 340);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(305, 167);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(355, 151 );
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(450, 62);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
   // background flowers
   push();
   translate(420, 110);
   fill(134, 156, 255); // purple
   noStroke();
   for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
     rotate(PI/5);
   }
   fill(140, 82, 255); // dark purple
   ellipse(0, 0, 15, 15);
   pop(); 

  // background flowers
  push();
  translate(490, 100);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(505, 50);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(545, 115);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(560, 67);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(614, 58);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(600, 108);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    
  
  // background flowers
  push();
  translate(590, 165);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(640, 147);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(650, 90);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(675, 46);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(690, 119);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(719, 67);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(740, 107);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(770, 50);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(790, 95);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(823, 60);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(873, 50);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(915, 70);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(910, 123);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(860, 96);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    
  
  // background flowers
  push();
  translate(822, 125);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(869, 151);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(908, 184);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    
  
  // background flowers
  push();
  translate(905, 235);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(913, 285);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(875, 325);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(910, 360);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 

  // background flowers
  push();
  translate(890, 400);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(850, 434);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(905, 454);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(840, 381);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(800, 445);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(788, 395);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(746, 425);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(700, 453);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(710, 385);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(660, 420);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate( 655, 359);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(600, 340);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(613, 395);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(625, 455);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(580, 436);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(555, 382);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(530, 450);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(507, 400);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(480, 442);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(432, 454);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(445, 400);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(400, 380);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(353, 355);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(367, 430);
  fill(134, 156, 255); // purple
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(140, 82, 255); // dark purple
  ellipse(0, 0, 15, 15);
  pop();    
}



