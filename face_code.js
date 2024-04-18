/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */

function hydraFace(sideTilt, jawDrop, eyeTilt) {
  const bg_color = [71, 222, 219];
  let eye_color = color(219, 173, 7);

  let XPos = 0;
  let YPos = 0;
  let tilt = sideTilt;

  let lOffset = 0;
  let cOffset = tilt;
  let rOffset = 0;

  let clOffset = 0;
  let crOffset = 0;

  let yDip = 0;

  fill(255);
  noStroke();
  angleMode(DEGREES);

  fill(0);

  // vertex(XPos + (crOffset * 1.05), YPos - (yDip * 0.4));
  // vertex(XPos - 6 + rOffset, YPos - 3);
  // vertex(XPos - 4 + rOffset, YPos + 5);
  // vertex(XPos - 4 + rOffset, YPos + 5);
  // vertex(XPos - 3 + crOffset, YPos + 6 + jawDrop);
  // vertex(XPos - 1.5 + crOffset, YPos + 8 + jawDrop);
  // vertex(XPos + crOffset, YPos + 8 + jawDrop);

  if (sideTilt > 0) {
    lOffset = tilt * 0.1;
    rOffset = tilt * -0.75;

    clOffset = tilt * 0.75;
    crOffset = tilt * 0.5;

    yDip = tilt * 0.1;

    rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip, jawDrop, eye_color, eyeTilt);
    leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip, jawDrop, eye_color, eyeTilt);
    fill(250);
    triangle(XPos + (clOffset * 0.4), YPos - 5 + (yDip * 1.5), lOffset - 4, YPos - 5.5, rOffset + 4, YPos - 5.5);
  } else {
    lOffset = tilt * -0.75;
    rOffset = tilt * 0.1;

    clOffset = tilt * 0.5;
    crOffset = tilt * 0.75;

    yDip = (tilt * -1) * 0.1;

    leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip, jawDrop, eye_color, eyeTilt);
    rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip, jawDrop, eye_color, eyeTilt);
    fill(250);
    triangle(XPos + (crOffset * 0.4), YPos - 5 + (yDip * 1.5), lOffset - 4, YPos - 5.5, rOffset + 4, YPos - 5.5);
 }
}


function leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip, jawDrop, eye_color, eyeTilt) {
  


  
  //Neck
  fill(220);
  if(cOffset >=0) {
    quad(XPos - 4 + lOffset, YPos - 5.5, XPos - 4 - lOffset * 3.5, YPos - 5.5, XPos - 6 - lOffset * 0.4, YPos - 3, XPos - 6 + lOffset, YPos - 3);
    fill(200);
    quad(XPos - 6 + lOffset, YPos - 3, XPos - 6 - lOffset * 0.4, YPos - 3, XPos - 4 - lOffset * 2, YPos + 5, XPos - 4 + lOffset, YPos + 5);
    fill(180);
    quad(XPos - 4 + lOffset, YPos + 5, XPos - 4 - lOffset * 2, YPos + 5, XPos - 3 - lOffset * 1.5, YPos + 8, XPos - 3 + lOffset, YPos + 7);
  }
  
  //Face
  fill(240)
  quad(XPos + (clOffset * 1.05), YPos - (yDip * 0.4), XPos - 6 + lOffset, YPos - 3, XPos - 4 + lOffset, YPos + 5, XPos - 3 + clOffset, YPos + 6);
 
  // //Jaw
  // fill(90);
  // // quad(XPos + cOffset, YPos + 7 - yDip, XPos - 4 + lOffset, YPos + 5, XPos - 3 + lOffset, YPos + 7, XPos + clOffset, YPos + 8 + jawDrop);
  
  //Teeth
  // for(i = 0; i < 4; i ++) {
  //   fill(255);
  //   rect(XPos + cOffset - (i * (0.8 + clOffset * 0.1) + 0.5), YPos + 5.3 - (i * clOffset * 0.03) + jawDrop, 0.4, 1, 0.1);
  // }
  //Jaw part 2
  if(cOffset >= 0) {
    fill(180);
  } else {
    fill(70);
  }
  quad(XPos - 3 + clOffset, YPos + 6 + jawDrop, XPos - 4 + lOffset, YPos + 5, XPos - 3 + lOffset, YPos + 7, XPos - 1.5 + clOffset, YPos + 8 + jawDrop);
  //Eyes
  stroke(80);
  strokeWeight(0.1);
  if(clOffset >= 0) {
    fill(eye_color);
    curve(XPos - 5 + clOffset / 2 + eyeTilt * 2, YPos - 4 + eyeTilt * 2, XPos - 2 + clOffset / 2, YPos + 0.5 + eyeTilt, XPos - 4 + clOffset * 0.1, YPos -0.5 - eyeTilt, XPos + 2 - clOffset / 4 + eyeTilt * 4, YPos - 10);
    fill(250, 200, 10);
    noStroke();
    ellipse(XPos - 3 + clOffset * 0.3 + cOffset / 12, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3);
    fill(0);
    ellipse(XPos - 3 + clOffset * 0.3 + cOffset / 10, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
    stroke(80);
    fill(80);
    curve(XPos - 1 + clOffset / 2, YPos + 2 + yDip * 6 + eyeTilt, XPos - 2 + clOffset / 2, YPos + 0.5 + eyeTilt, XPos - 4 + clOffset * 0.1, YPos - 0.5 - eyeTilt, XPos + 2 * clOffset / 2, YPos + 2 - eyeTilt);
  } else {
    fill(eye_color);
    curve(XPos - 1 + clOffset, YPos - 4, XPos - 2 + clOffset / 2, YPos + 0.5, XPos - 4 - clOffset, YPos -0.5, XPos + 2 + clOffset, YPos - 10);
    fill(250, 200, 10);
    noStroke();
    ellipse(XPos - 3 - clOffset * 0.3, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3 + cOffset / 10, 1 - eyeTilt / 3);
    fill(0);
    ellipse(XPos - 3 - clOffset * 0.3 + cOffset * 0.05, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
    stroke(80);
    fill(80);
    curve(XPos - 1 + clOffset, YPos + 2 + yDip * 6, XPos - 2 + clOffset / 2, YPos + 0.5, XPos - 4 - clOffset, YPos - 0.5, XPos - 4 - clOffset, YPos - 0.5);
  }
  noStroke();
  // ellipse(XPos - 3 + clOffset / 2, YPos, (cOffset * 0.2) + 3, 1.5);
  //Nose
  fill(250);
  quad(XPos + cOffset, YPos + 4, XPos - 2.5 + clOffset, YPos + 4, XPos - 3 + clOffset, YPos + 6, XPos + cOffset, YPos + 6);
  //Mouth
  fill(230);
  quad(XPos + cOffset, YPos + 6 + jawDrop, XPos - 3 + clOffset, YPos + 6 + jawDrop, XPos - 1.5 + clOffset, YPos + 8 + jawDrop, XPos + clOffset, YPos + 8 + jawDrop);
  //Nostrils
  fill(200);
  quad(XPos - 0.5 + (cOffset * 0.8), YPos + 5.25, XPos - 2 + clOffset, YPos + 4.5, XPos - 2 + clOffset, YPos + 5, XPos - 0.5 + (cOffset * 0.8), YPos + 5.5);
  //NoseBridge
  fill(245);
  quad(XPos + (clOffset * 0.7), YPos - 2, XPos - 1 + (clOffset * 0.7), YPos - 2, XPos - 2 + clOffset, YPos + 4, XPos + cOffset, YPos + 5 - yDip);
  //Forred
  fill(255);
  quad(XPos + (clOffset * 0.4), YPos -  5 + (yDip * 1.5), XPos - 4 + lOffset, YPos - 5.5, XPos - 6 + lOffset, YPos - 3, XPos + (cOffset * 0.8), YPos - (yDip * 0.2));

  }
  function rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip, jawDrop, eye_color, eyeTilt) {
    //Face
    fill(235);
    quad(XPos + (crOffset * 1.05), YPos - (yDip * 0.4), XPos + 6 + rOffset, YPos - 3, XPos + 4 + rOffset, YPos + 5, XPos + 3 + crOffset, YPos + 6);
    //Jaw
    // fill(90);
    // quad(XPos + cOffset, YPos + 7 - yDip, XPos + 4 + rOffset, YPos + 5, XPos + 3 + rOffset, YPos + 7, XPos + crOffset, YPos + 8 + jawDrop);
    //Teeth
    // for(i = 0; i < 4; i ++) {
    //   fill(255);
    //   rect(XPos + cOffset + (i * (0.8 - crOffset * 0.1) + 0.5), YPos + 5.3 + (i * crOffset * 0.03) + jawDrop, 0.4, 1, 0.1);
    // }
    //Jaw Part 2
    if(cOffset <= 0) {
      fill(180);
    } else {
      fill(70);
    }
    quad(XPos + 3 + crOffset, YPos + 6 + jawDrop, XPos + 4 + rOffset, YPos + 5, XPos + 3 + rOffset, YPos + 7, XPos + 1.5 + crOffset, YPos + 8 + jawDrop);
    
    //Eyes
    stroke(80);
    strokeWeight(0.1);
    if(crOffset <= 0) {
      fill(eye_color);
      curve(XPos + 5 + crOffset / 2 + eyeTilt * 2, YPos - 4 + eyeTilt * 2, XPos + 2 + crOffset / 2, YPos + 0.5 + eyeTilt, XPos + 4 + crOffset * 0.1, YPos -0.5 - eyeTilt, XPos - 2 - crOffset / 4 + eyeTilt * 4, YPos - 10);
      fill(250, 200, 10);
      noStroke();
      ellipse(XPos + 3 + crOffset * 0.3 + cOffset / 12, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3);
      fill(0);
      ellipse(XPos + 3 + crOffset * 0.3 + cOffset / 10, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
      stroke(80);
      fill(80);
      curve(XPos + 1 + crOffset / 2, YPos + 2 + yDip * 6 + eyeTilt, XPos + 2 + crOffset / 2, YPos + 0.5 + eyeTilt, XPos + 4 + crOffset * 0.1, YPos - 0.5 - eyeTilt, XPos - 2 * crOffset / 2, YPos + 2 - eyeTilt);
    } else {
      fill(eye_color);
      curve(XPos + 1 + crOffset, YPos - 4, XPos + 2 + crOffset / 2, YPos + 0.5, XPos + 4 - crOffset, YPos -0.5, XPos - 2 + crOffset, YPos - 10);
      fill(250, 200, 10);
      noStroke();
      ellipse(XPos + 3 - crOffset * 0.3, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3 - cOffset / 10, 1 - eyeTilt / 3);
      fill(0);
      ellipse(XPos + 3 - crOffset * 0.3 + cOffset * 0.05, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
      stroke(80);
      fill(80);
      curve(XPos + 1 + crOffset, YPos + 2 + yDip * 6, XPos + 2 + crOffset / 2, YPos + 0.5, XPos + 4 - crOffset, YPos - 0.5, XPos + 2 - crOffset, YPos - 0.5);
    }

    noStroke();

    fill(245);
    quad(XPos + cOffset, YPos + 4, XPos + 2.5 + crOffset, YPos + 4, XPos + 3 + crOffset, YPos + 6, XPos + cOffset, YPos + 6);
    fill(225);
    quad(XPos + cOffset, YPos + 6 + jawDrop, XPos + 3 + crOffset, YPos + 6 + jawDrop, XPos + 1.5 + crOffset, YPos + 8 + jawDrop, XPos + crOffset, YPos + 8 + jawDrop);
    fill(180);
    quad(XPos + 0.5 + (cOffset * 0.8), YPos + 5.25, XPos + 2 + crOffset, YPos + 4.5, XPos + 2 + crOffset, YPos + 5, XPos + 0.5 + (cOffset * 0.8), YPos + 5.5);
    fill(240);
    quad(XPos + (crOffset * 0.7), YPos - 2, XPos + 1 + (crOffset * 0.7), YPos - 2, XPos + 2 + crOffset, YPos + 4, XPos + cOffset, YPos + 5 - yDip);
    fill(250);
    quad(XPos + (crOffset * 0.4), YPos -  5 + (yDip * 1.5), XPos + 4 + rOffset, YPos - 5.5, XPos + 6 + rOffset, YPos - 3, XPos + (cOffset * 0.8), YPos - (yDip * 0.2));
}

function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 2;
  let centerX = 0;
  let Iy = - 5;
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
