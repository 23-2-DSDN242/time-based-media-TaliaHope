function setup() {
  createCanvas (960, 500);
  draw_clock();
}

function draw_clock(obj) {
 background(140, 82, 255); //border
 fill(74, 203, 174);
 noStroke();
 rect(20, 20, 920, 460, 10);

 let hr = obj.hours;
 let mn = obj.minutes;
 let sc = obj.seconds;

 let purple = color(134, 156, 255);
 let darkPurple = color(140, 82, 255);

 let centerColor = color(140, 82, 255); 
 let petalColor = color(134, 156, 255); 

 let alarm_petal_color = color(255, 86, 86);
 let alarm_center_color = color(255, 102, 196);

 let alarmsetoffcolorP = color(140, 82, 255);
 let alarmsetoffcolorC = color(134, 156, 255);
 let background(165, 217, 250) = color_background;

 let alarm_color = color()

 if(alarm < 0) {
     alarm_color = centerColor, petalColor; 
 }
 else if(alarm == 0) {
     alarm_color = alarm_petal_color, alarm_center_color, color_background;
 }
 else {
     let seconds_remaining = int(alarm);
     alarm_color = alarmsetoffcolorP, alarmsetoffcolorC, color_background + seconds_remaining
 }


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
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color  
  ellipse(0, 0, 15, 15);
  pop();

  // background flowers
  push();
  translate(115, 80);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
   ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();

  // background flowers
  push();
  translate(76, 110);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
   ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();
    
  // background flowers
  push();
  translate(165, 50);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
   ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();

  // background flowers
  push();
  translate(185, 90);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
   ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();

    // background flowers
    push();
    translate(230, 55);
    fill(petalColor); // petal color 
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
      rotate(PI/5);
    }
    fill(centerColor); // center color 
    ellipse(0, 0, 15, 15);
    pop();

    // background flowers
    push();
    translate(290, 47);
    fill(petalColor); // petal color 
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
      rotate(PI/5);
    }
    fill(centerColor); // center color 
    ellipse(0, 0, 15, 15);
    pop();

    // background flowers
    push();
    translate(265,89);
    fill(petalColor); // petal color 
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
      rotate(PI/5);
    }
    fill(centerColor); // center color 
    ellipse(0, 0, 15, 15);
    pop();

      // background flowers
    push();
    translate(339, 60);
    fill(petalColor); // petal color 
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
      rotate(PI/5);
    }
    fill(centerColor); // center color 
    ellipse(0, 0, 15, 15);
    pop();

      // background flowers
      push();
      translate(318, 115);
      fill(petalColor); // petal color 
      noStroke();
      for (let i = 0; i < 10; i ++) {
       ellipse(0, 10, 10, 30);
        rotate(PI/5);
      }
      fill(centerColor); // center color 
      ellipse(0, 0, 15, 15);
      pop();

  // background flowers
  push();
  translate(371, 100);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(400, 53);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
 
  // background flowers
  push();
  translate(147, 120);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(50, 152);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
 
  // background flowers
  push();
  translate(233, 120);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(97, 173);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();

  // background flowers
  push();
  translate(55, 205);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();

   // background flowers
   push();
   translate(68, 255);
   fill(petalColor); // petal color 
   noStroke();
   for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
     rotate(PI/5);
   }
   fill(centerColor); // center color 
   ellipse(0, 0, 15, 15);
   pop(); 

  // background flowers
  push();
  translate(47, 297);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(90, 325);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 

  // background flowers
  push();
  translate(57, 360);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
 
  // background flowers
  push();
  translate(47, 407);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
 
  // background flowers
  push();
  translate(65, 453);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(100, 418);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();
 
  // background flowers
  push();
  translate(140, 380);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(140, 447);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(177, 417);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(209, 455);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(223, 397);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(258, 440);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(273, 381);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(310, 445);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(322, 397);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(305, 340);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  

  // background flowers
  push();
  translate(305, 167);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(355, 151 );
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(450, 62);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
   // background flowers
   push();
   translate(420, 110);
   fill(petalColor); // petal color 
   noStroke();
   for (let i = 0; i < 10; i ++) {
     ellipse(0, 10, 10, 30);
     rotate(PI/5);
   }
   fill(centerColor); // center color 
   ellipse(0, 0, 15, 15);
   pop(); 

  // background flowers
  push();
  translate(490, 100);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(505, 50);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(545, 115);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(560, 67);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(614, 58);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();
  
  // background flowers
  push();
  translate(600, 108);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    
  
  // background flowers
  push();
  translate(590, 165);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(640, 147);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(650, 90);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(675, 46);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(690, 119);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(719, 67);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(740, 107);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(770, 50);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(790, 95);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(823, 60);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(873, 50);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(915, 70);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(910, 123);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(860, 96);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    
  
  // background flowers
  push();
  translate(822, 125);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();     

  // background flowers
  push();
  translate(869, 151);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(908, 184);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    
  
  // background flowers
  push();
  translate(905, 235);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(913, 285);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(875, 325);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(910, 360);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 

  // background flowers
  push();
  translate(890, 400);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(850, 434);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(905, 454);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(840, 381);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(800, 445);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(788, 395);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(746, 425);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(700, 453);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(710, 385);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(660, 420);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate( 655, 359);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(600, 340);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(613, 395);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(625, 455);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop(); 
  
  // background flowers
  push();
  translate(580, 436);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   

  // background flowers
  push();
  translate(555, 382);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(530, 450);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(507, 400);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(480, 442);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();  
  
  // background flowers
  push();
  translate(432, 454);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(445, 400);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(400, 380);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();   
  
  // background flowers
  push();
  translate(353, 355);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    

  // background flowers
  push();
  translate(367, 430);
  fill(petalColor); // petal color 
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 10, 30);
    rotate(PI/5);
  }
  fill(centerColor); // center color 
  ellipse(0, 0, 15, 15);
  pop();    


 const centerX = width /2;
 const centerY = height /2;  

 let hourAngle = map(obj.hours % 12, 0, 12, 0, TWO_PI) - HALF_PI;
 let minuteAngle = map(obj.minutes, 0, 60, 0, TWO_PI) - HALF_PI;
 let secondAngle = map(obj.seconds, 0, 60, 0, TWO_PI) - HALF_PI;
 let alarm = obj.seconds_until_alarm;

 // flower 1
 push();
 translate(centerX - 290, centerY);
 rotate(hourAngle);
 draw_flower(color(253, 221, 241), color(255, 178, 226)); // Pink petals, dark pink center
 pop();

  // Draw flower 2
 push();
 translate(centerX, centerY);
 rotate(minuteAngle);
 draw_flower(color(255, 247, 211), color(255, 218, 123)); // Yellow petals, orange-yellow center
 pop();

 // Draw flower 3
 push();
 translate(centerX + 290, centerY);
 rotate(secondAngle);
 draw_flower(color(165, 217, 250), color(5, 112, 255)); // Light blue petals, dark blue center
 pop();

  // push();
  fill(255);
  noStroke();
  textSize(45);
  textAlign(CENTER)
  text(hr, 190, 264.5)
  text(mn, 479.5, 264.5)
  text(sc, 769.5  , 264.5)

 }
 
 function draw_flower(petalColor, centerColor) {
 fill(petalColor);
 noStroke();
 for (let i = 0; i < 10; i++) {
  ellipse(0, 50, 50, 150);
  rotate(PI / 5);
 }
 fill(centerColor);
 ellipse(0, 0, 60, 60);

 fill(200, 100, 100)
}
 

