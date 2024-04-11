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

function hydraFace(sideTilt) {
  const bg_color = [71, 222, 219];

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

  if (sideTilt > 0) {
    lOffset = tilt * 0.1;
    rOffset = tilt * -0.75;

    clOffset = tilt * 0.75;
    crOffset = tilt * 0.5;

    yDip = tilt * 0.1;

    rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip);
    leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip);
  } else {
    lOffset = tilt * -0.75;
    rOffset = tilt * 0.1;

    clOffset = tilt * 0.5;
    crOffset = tilt * 0.75;

    yDip = (tilt * -1) * 0.1;

    leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip);
    rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip);
  }
}


function leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip) {
  //Face
  fill(240)
  quad(XPos + (clOffset * 1.05), YPos - (yDip * 0.4), XPos - 6 + lOffset, YPos - 3, XPos - 4 + lOffset, YPos + 5, XPos + cOffset, YPos + 7 - yDip);
  //Eyes
  fill(80);
  // quad(XPos - 2 + clOffset, YPos, XPos - 5 + (lOffset), YPos - 1.5, XPos - 4.6 + (rOffset), YPos, XPos - 2 + clOffset, YPos + 1.25);
  ellipse(XPos - 3 + clOffset / 2, YPos, (cOffset * 0.2) + 3, 1.5);
  //Nose
  fill(250);
  quad(XPos + cOffset, YPos + 4, XPos - 2.5 + clOffset, YPos + 4, XPos - 3 + clOffset, YPos + 6, XPos + cOffset, YPos + 6);
  //Mouth
  fill(230);
  quad(XPos + cOffset, YPos + 6, XPos - 3 + clOffset, YPos + 6, XPos - 1.5 + clOffset, YPos + 8, XPos + clOffset, YPos + 8);
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
  function rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip) {
    fill(235);
    quad(XPos + (crOffset * 1.05), YPos - (yDip * 0.4), XPos + 6 + rOffset, YPos - 3, XPos + 4 + rOffset, YPos + 5, XPos + cOffset, YPos + 7 - yDip);
    fill(80);
    // quad(XPos + 2 + crOffset, YPos, XPos + XPos + 5 + (rOffset), YPos - 1.5, XPos + 4.6 + (rOffset), YPos, XPos + 2 + crOffset, YPos + 1.25);
    // push();
    ellipse(XPos + 3 + crOffset / 2, YPos, (cOffset * -0.2) + 3, 1.5);
    // rotate(20);
    // translate(XPos + 3 + crOffset / 2, YPos);
    // pop();
    fill(245);
    quad(XPos + cOffset, YPos + 4, XPos + 2.5 + crOffset, YPos + 4, XPos + 3 + crOffset, YPos + 6, XPos + cOffset, YPos + 6);
    fill(225);
    quad(XPos + cOffset, YPos + 6, XPos + 3 + crOffset, YPos + 6, XPos + 1.5 + crOffset, YPos + 8, XPos + crOffset, YPos + 8);
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
