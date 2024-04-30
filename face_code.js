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

  colorMode(HSB);

  dragonGreen = color(124, 100, 100);

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
    // fill(124, 100, 90);
    // triangle(XPos + (clOffset * 0.4), YPos - 5 + (yDip * 1.5), lOffset - 4, YPos - 5.5, rOffset + 4, YPos - 5.5);
    // //Horns
    // fill(140, 100, 80);
    // triangle(XPos - 2 - (clOffset * 0.2), YPos - 2 + (yDip * -1), XPos - 4 - (clOffset * 0.2), YPos -  3 + (yDip * -1), XPos - 3.5 - (clOffset * 0.6), YPos -  10 + (yDip * -1));
    // triangle(XPos + 2 - (clOffset * 0.2), YPos - 2 + (yDip * -1), XPos + 4 - (clOffset * 0.2), YPos -  3 + (yDip * -1), XPos + 3.5 - (clOffset * 0.6), YPos -  10 + (yDip * -1));

  } else {
    lOffset = tilt * -0.7
    rOffset = tilt * 0.1;

    clOffset = tilt * 0.5;
    crOffset = tilt * 0.75;

    yDip = (tilt * -1) * 0.1;

    leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip, jawDrop, eye_color, eyeTilt);
    rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip, jawDrop, eye_color, eyeTilt);
    // fill(124, 100, 90);
    // triangle(XPos + (crOffset * 0.4), YPos - 5 + (yDip * 1.5), lOffset - 4, YPos - 5.5, rOffset + 4, YPos - 5.5);
    //Horns
    // fill(140, 100, 80);
    // triangle(XPos - 2 - (clOffset * 0.2), YPos - 2 + (yDip * -1), XPos - 4 - (clOffset * 0.2), YPos -  3 + (yDip * -1), XPos - 3.5 - (clOffset * 0.6), YPos -  10 + (yDip * -1));
    // triangle(XPos + 2 - (clOffset * 0.2), YPos - 2 + (yDip * -1), XPos + 4 - (clOffset * 0.2), YPos -  3 + (yDip * -1), XPos + 3.5 - (clOffset * 0.6), YPos -  10 + (yDip * -1));
  
  }
}


function leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip, jawDrop, eye_color, eyeTilt) {
  let scaleBrightness;
  let scaleStrokeBrightness;

  //Neck
  if(cOffset >=0) {
    //Second Band
    scaleBrightness = 20;
    scaleStrokeBrightness = 10;
    let band2cX = [XPos - 4 - lOffset * 2, XPos - 3 - lOffset * 7.5, XPos - 3 - lOffset * 6, XPos - 3 - lOffset * 1.5];
    let band2cY = [YPos + 5, YPos + 3, YPos + 7, YPos + 8];
    quad(band2cX[0], band2cY[0], band2cX[1], band2cY[1], band2cX[2], band2cY[2], band2cX[3], band2cY[3]);
    DrawScales(7 + (cOffset / 2), 5, band2cX, band2cY, scaleBrightness, scaleStrokeBrightness);
    
    scaleBrightness = 30;
    scaleStrokeBrightness = 20;
    let band2bX = [XPos - 6 - lOffset * 0.4, XPos - 4 - lOffset * 5.5, XPos - 3 - lOffset * 7.5, XPos - 4 - lOffset * 2];
    let band2bY = [YPos - 3, YPos - 2, YPos + 3, YPos + 5];
    quad(band2bX[0], band2bY[0], band2bX[1], band2bY[1], band2bX[2], band2bY[2], band2bX[3], band2bY[3]);
    DrawScales(5 + (cOffset / 2), 12, band2bX, band2bY, scaleBrightness, scaleStrokeBrightness);

    fill(124, 100, 40);
    scaleBrightness = 40;
    scaleStrokeBrightness = 30;
    let band2aX = [XPos - 4 - lOffset * 3.5, XPos - 4 - lOffset * 5, XPos - 4 - lOffset * 5.5, XPos - 6 - lOffset * 0.4];
    let band2aY = [YPos - 5, YPos - 3, YPos - 2, YPos - 3];
    quad(band2aX[0], band2aY[0], band2aX[1], band2aY[1], band2aX[2], band2aY[2], band2aX[3], band2aY[3]);
    DrawScales(4 + (cOffset / 2), 3, band2aX, band2aY, scaleBrightness, scaleStrokeBrightness);

    //First Band
    scaleBrightness = 30;
    scaleStrokeBrightness = 20;
    let band1cX = [XPos - 4 + lOffset, XPos - 4 - lOffset * 2, XPos - 3 - lOffset * 1.5, XPos - 3 + lOffset];
    let band1cY = [YPos + 5, YPos + 5, YPos + 8, YPos + 7];
    quad(band1cX[0], band1cY[0], band1cX[1], band1cY[1], band1cX[2], band1cY[2], band1cX[3], band1cY[3]);
    DrawScales(4 + (cOffset / 4), 5, band1cX, band1cY, scaleBrightness, scaleStrokeBrightness);
    
    scaleBrightness = 40;
    scaleStrokeBrightness = 30;
    let band1bX = [XPos - 6 + lOffset, XPos - 6 - lOffset * 0.4, XPos - 4 - lOffset * 2, XPos - 4 + lOffset];
    let band1bY = [YPos - 3, YPos - 3, YPos + 5, YPos + 5];
    quad(band1bX[0], band1bY[0], band1bX[1], band1bY[1], band1bX[2], band1bY[2], band1bX[3], band1bY[3]);
    DrawScales(4 + (cOffset / 6), 14, band1bX, band1bY, scaleBrightness, scaleStrokeBrightness);

    scaleBrightness = 50;
    scaleStrokeBrightness = 40;
    let band1aX = [XPos - 4 + lOffset, XPos - 4 - lOffset * 3.5, XPos - 6 - lOffset * 0.4, XPos - 6 + lOffset];
    let band1aY = [YPos - 5.5, YPos - 5, YPos - 3, YPos - 3];
    quad(band1aX[0], band1aY[0], band1aX[1], band1aY[1], band1aX[2], band1aY[2], band1aX[3], band1aY[3]);
    DrawScales(5 + (cOffset / 4), 4, band1aX, band1aY, scaleBrightness, scaleStrokeBrightness);
  }
  
  //Face
  let faceX = [XPos + (clOffset * 1.05), XPos - 6 + lOffset, XPos - 4 + lOffset, XPos - 3 + clOffset];
  let faceY = [YPos - (yDip * 0.4), YPos - 3, YPos + 5, YPos + 6];

  //Draw Face
  fill(124, 100, 70);
  quad(faceX[0], faceY[0], faceX[1], faceY[1], faceX[2], faceY[2], faceX[3], faceY[3]);

  scaleBrightness = 60;
  scaleStrokeBrightness = 30;

  DrawScales(15 + cOffset, 15, faceX, faceY, scaleBrightness, scaleStrokeBrightness);

  //Teeth
  fill(0, 0, 100);
  noStroke();
  for(i = 0; i < 5; i ++) {
    push();
    translate(XPos - 2.7 + clOffset * 0.95 - (i / 4) *clOffset * 0.7, YPos + 6 + (jawDrop - (i/8)) - (i / 6));
    triangle(-0.3, 0, 0.3, 0, 0, -2.3 + (i/5));
    pop();
    // triangle(XPos + cOffset - i * clOffset * 0.1, YPos + 6 + jawDrop, XPos + cOffset + 1 * clOffset * 0.1, YPos + 6 + jawDrop, XPos + cOffset + 0.5 * clOffset * 0.1, YPos + 5.5 - i / 10 + jawDrop);
  }
  
  //Jaw part 2
  let jawX = [XPos - 3 + clOffset, XPos - 4 + lOffset, XPos - 3 + lOffset, XPos - 1.5 + clOffset];
  let jawY = [YPos + 6 + jawDrop, YPos + 5, YPos + 7, YPos + 8 + jawDrop];
  if(cOffset >= 0) {
    fill(124, 100, 40);
    scaleBrightness = 35;
    scaleStrokeBrightness = 20;
    quad(jawX[0], jawY[0], jawX[1], jawY[1], jawX[2], jawY[2], jawX[3], jawY[3]);
    DrawScales(10 + cOffset, 5, jawX, jawY, scaleBrightness, scaleStrokeBrightness);
  } else {
    fill(124, 100, 20);
    quad(jawX[0], jawY[0], jawX[1], jawY[1], jawX[2], jawY[2], jawX[3], jawY[3]);
  }

  //Eyes
  stroke(80);
  strokeWeight(0.1);
  if(clOffset >= 0) {
    fill(eye_color);
    curve(XPos - 5 + clOffset / 2 + eyeTilt * 2, YPos - 4 + eyeTilt * 2, XPos - 2 + clOffset / 2, YPos + 0.5 + eyeTilt, XPos - 4 + clOffset * 0.1, YPos -0.5 - eyeTilt, XPos + 2 - clOffset / 4 + eyeTilt * 4, YPos - 10);
    fill(46, 100, 100);
    noStroke();
    ellipse(XPos - 3 + clOffset * 0.3 + cOffset / 12, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3);
    fill(124, 100, 0);
    ellipse(XPos - 3 + clOffset * 0.3 + cOffset / 10, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
    stroke(124, 100, 10);
    fill(124, 100, 10);
    curve(XPos - 1 + clOffset / 2, YPos + 2 + yDip * 6 + eyeTilt, XPos - 2 + clOffset / 2, YPos + 0.5 + eyeTilt, XPos - 4 + clOffset * 0.1, YPos - 0.5 - eyeTilt, XPos + 2 * clOffset / 2, YPos + 2 - eyeTilt);
  } else {
    fill(eye_color);
    curve(XPos - 1 + clOffset, YPos - 4, XPos - 2 + clOffset / 2, YPos + 0.5, XPos - 4 - clOffset, YPos -0.5, XPos + 2 + clOffset, YPos - 10);
    fill(46, 100, 100);
    noStroke();
    ellipse(XPos - 3 - clOffset * 0.3, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3 + cOffset / 10, 1 - eyeTilt / 3);
    fill(124, 100, 5);
    ellipse(XPos - 3 - clOffset * 0.3 + cOffset * 0.05, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
    stroke(124, 100, 10);
    fill(124, 100, 10);
    curve(XPos - 1 + clOffset, YPos + 2 + yDip * 6, XPos - 2 + clOffset / 2, YPos + 0.5, XPos - 4 - clOffset, YPos - 0.5, XPos - 4 - clOffset, YPos - 0.5);
  }
  noStroke();
  // ellipse(XPos - 3 + clOffset / 2, YPos, (cOffset * 0.2) + 3, 1.5);
 
  //NoseBridge
  fill(124, 100, 90);
  scaleBrightness = 90;
  scaleStrokeBrightness = 60;
  let noseBridgeX = [XPos + (clOffset * 0.7), XPos - 1 + (clOffset * 0.7), XPos - 2 + clOffset, XPos + cOffset];
  let noseBridgeY = [YPos - 2, YPos - 2, YPos + 4, YPos + 5 - yDip];
  quad(noseBridgeX[0], noseBridgeY[0], noseBridgeX[1], noseBridgeY[1], noseBridgeX[2], noseBridgeY[2], noseBridgeX[3], noseBridgeY[3]);
  DrawScales(3 + (cOffset / 3), 10, noseBridgeX, noseBridgeY, scaleBrightness, scaleStrokeBrightness);

  //Nose
  let noseX = [XPos + cOffset, XPos - 2.5 + clOffset, XPos - 3 + clOffset, XPos + cOffset];
  let noseY = [YPos + 4, YPos + 4, YPos + 6, YPos + 6];
  scaleBrightness = 95;
  scaleStrokeBrightness = 80;
  fill(124, 100, 95);
  quad(noseX[0], noseY[0], noseX[1], noseY[1], noseX[2], noseY[2], noseX[3], noseY[3]);
  DrawScales(4 + (cOffset / 2), 5, noseX, noseY, scaleBrightness, scaleStrokeBrightness);

  //Mouth
  fill(124, 100, 85);
  scaleBrightness = 85;
  scaleStrokeBrightness = 70;
  let mouthX = [XPos + cOffset, XPos - 3 + clOffset, XPos - 1.5 + clOffset, XPos + clOffset, YPos + 8 + jawDrop];
  let mouthY = [YPos + 6 + jawDrop, YPos + 6 + jawDrop, YPos + 8 + jawDrop, YPos + 8 + jawDrop];
  quad(mouthX[0], mouthY[0], mouthX[1], mouthY[1], mouthX[2], mouthY[2], mouthX[3], mouthY[3]);
  DrawScales(4 + (cOffset / 2), 4, mouthX, mouthY, scaleBrightness, scaleStrokeBrightness);

  //Nostrils
  fill(124, 100, 30);
  quad(XPos - 0.5 + (cOffset * 0.8), YPos + 5.25, XPos - 2 + clOffset, YPos + 4.5, XPos - 2 + clOffset, YPos + 5, XPos - 0.5 + (cOffset * 0.8), YPos + 5.5);
  
  //Forred
  fill(124, 100, 100);
  scaleBrightness = 70;
  scaleStrokeBrightness = 65;
  let forredX = [XPos + (clOffset * 0.4), XPos - 4 + lOffset, XPos - 6 + lOffset, XPos + (cOffset * 0.8)];
  let forredY = [YPos -  5 + (yDip * 1.5), YPos - 5.5, YPos - 3, YPos - (yDip * 0.2)];
  quad(forredX[0], forredY[0], forredX[1], forredY[1], forredX[2], forredY[2], forredX[3], forredY[3]);
  DrawScales(10 + cOffset, 7, forredX, forredY, scaleBrightness, scaleStrokeBrightness);

  //Crown
  noStroke();
  fill(124, 100, 65);
  triangle(XPos + (clOffset * 0.4), YPos - 5 + (yDip * 1.5), XPos + lOffset - 4, YPos - 5.5, XPos + rOffset + 4, YPos - 5.5);
  
  //Horns
  fill(140, 100, 90);
  triangle(XPos - 2 - (clOffset * 0.01), YPos - 2 + (yDip * -1), XPos - 4 - (clOffset * 0.05), YPos -  3 + (yDip * -0.5), XPos - 3.5 - (clOffset * 0.4), YPos -  10 + (yDip * -1));
  fill(130, 100, 50);
  triangle(XPos - 2 - (clOffset * 0.01), YPos - 2 + (yDip * -1), XPos - 1.5 + (clOffset * 0.05), YPos -  2.8 + (yDip * -0.9), XPos - 3.5 - (clOffset * 0.4), YPos -  10 + (yDip * -1));
  stroke(124, 100, 100);
  line(XPos - 2 - (clOffset * 0.01), YPos - 2 + (yDip * -1), XPos - 3.5 - (clOffset * 0.4), YPos -  10 + (yDip * -1));  
}





  function rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip, jawDrop, eye_color, eyeTilt) {
  //Neck
  if(cOffset <=0) {
    //Second Band
    fill(124, 100, 30);
    quad(XPos + 4 - rOffset * 3.5, YPos - 5, XPos + 4 - rOffset * 5, YPos - 3, XPos + 4 - rOffset * 5.5, YPos - 2, XPos + 6 - rOffset * 0.4, YPos - 3);
    fill(124, 100, 20);
    quad(XPos + 6 - rOffset * 0.4, YPos - 3, XPos + 4 - rOffset * 5.5, YPos - 2, XPos + 3 - rOffset * 7.5, YPos + 3, XPos + 4 - rOffset * 2, YPos + 5);
    fill(124, 100, 10);
    quad(XPos + 4 - rOffset * 2, YPos + 5, XPos + 3 - rOffset * 7.5, YPos + 3, XPos + 3 - rOffset * 6, YPos + 7, XPos + 3 - rOffset * 1.5, YPos + 8);
  
    //First Band
    fill(124, 100, 40);
    quad(XPos + 4 + rOffset, YPos - 5.5, XPos + 4 - rOffset * 3.5, YPos - 5, XPos + 6 - rOffset * 0.4, YPos - 3, XPos + 6 + rOffset, YPos - 3);
    fill(124, 100, 30);
    quad(XPos + 6 + rOffset, YPos - 3, XPos + 6 - rOffset * 0.4, YPos - 3, XPos + 4 - rOffset * 2, YPos + 5, XPos + 4 + rOffset, YPos + 5);
    fill(124, 100, 20);
    quad(XPos + 4 + rOffset, YPos + 5, XPos + 4 - rOffset * 2, YPos + 5, XPos + 3 - rOffset * 1.5, YPos + 8, XPos + 3 + rOffset, YPos + 7);
  }
    
    //Face
    fill(124, 100, 60);
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
      fill(124, 100, 30);
    } else {
      fill(124, 100, 10);
    }
    quad(XPos + 3 + crOffset, YPos + 6 + jawDrop, XPos + 4 + rOffset, YPos + 5, XPos + 3 + rOffset, YPos + 7, XPos + 1.5 + crOffset, YPos + 8 + jawDrop);
    
    //Eyes
    stroke(80);
    strokeWeight(0.1);
    if(crOffset <= 0) {
      fill(eye_color);
      curve(XPos + 5 + crOffset / 2 + eyeTilt * 2, YPos - 4 + eyeTilt * 2, XPos + 2 + crOffset / 2, YPos + 0.5 + eyeTilt, XPos + 4 + crOffset * 0.1, YPos -0.5 - eyeTilt, XPos - 2 - crOffset / 4 + eyeTilt * 4, YPos - 10);
      fill(46, 100, 100);
      noStroke();
      ellipse(XPos + 3 + crOffset * 0.3 + cOffset / 12, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3);
      fill(124, 100, 0);
      ellipse(XPos + 3 + crOffset * 0.3 + cOffset / 10, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
      stroke(124, 100, 10);
      fill(124, 100, 10);
      curve(XPos + 1 + crOffset / 2, YPos + 2 + yDip * 6 + eyeTilt, XPos + 2 + crOffset / 2, YPos + 0.5 + eyeTilt, XPos + 4 + crOffset * 0.1, YPos - 0.5 - eyeTilt, XPos - 2 * crOffset / 2, YPos + 2 - eyeTilt);
    } else {
      fill(eye_color);
      curve(XPos + 1 + crOffset, YPos - 4, XPos + 2 + crOffset / 2, YPos + 0.5, XPos + 4 - crOffset, YPos -0.5, XPos - 2 + crOffset, YPos - 10);
      fill(46, 100, 100);
      noStroke();
      ellipse(XPos + 3 - crOffset * 0.3, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3 - cOffset / 10, 1 - eyeTilt / 3);
      fill(124, 100, 5);
      ellipse(XPos + 3 - crOffset * 0.3 + cOffset * 0.05, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
      stroke(124, 100, 10);
      fill(124, 100, 10);
      curve(XPos + 1 + crOffset, YPos + 2 + yDip * 6, XPos + 2 + crOffset / 2, YPos + 0.5, XPos + 4 - crOffset, YPos - 0.5, XPos + 2 - crOffset, YPos - 0.5);
    }

    noStroke();

    fill(124, 100, 90);
    quad(XPos + cOffset, YPos + 4, XPos + 2.5 + crOffset, YPos + 4, XPos + 3 + crOffset, YPos + 6, XPos + cOffset, YPos + 6);
    fill(124, 100, 80);
    quad(XPos + cOffset, YPos + 6 + jawDrop, XPos + 3 + crOffset, YPos + 6 + jawDrop, XPos + 1.5 + crOffset, YPos + 8 + jawDrop, XPos + crOffset, YPos + 8 + jawDrop);
    fill(124, 100, 75);
    quad(XPos + 0.5 + (cOffset * 0.8), YPos + 5.25, XPos + 2 + crOffset, YPos + 4.5, XPos + 2 + crOffset, YPos + 5, XPos + 0.5 + (cOffset * 0.8), YPos + 5.5);
    fill(124, 100, 85);
    quad(XPos + (crOffset * 0.7), YPos - 2, XPos + 1 + (crOffset * 0.7), YPos - 2, XPos + 2 + crOffset, YPos + 4, XPos + cOffset, YPos + 5 - yDip);
    fill(124, 100, 95);
    quad(XPos + (crOffset * 0.4), YPos -  5 + (yDip * 1.5), XPos + 4 + rOffset, YPos - 5.5, XPos + 6 + rOffset, YPos - 3, XPos + (cOffset * 0.8), YPos - (yDip * 0.2));

    // fill(124, 100, 90);
    // triangle(XPos + (crOffset * 0.4), YPos - 5 + (yDip * 1.5), lOffset - 4, YPos - 5.5, rOffset + 4, YPos - 5.5);
    
    //Horns
    fill(140, 100, 80);
    triangle(XPos + 2 - (crOffset * 0.2), YPos - 2 + (yDip * -1), XPos + 4 - (crOffset * 0.2), YPos -  3 + (yDip * -1), XPos + 3.5 - (crOffset * 0.6), YPos -  10 + (yDip * -1));

  }

  function DrawScales(xScalesNo, yScalesNo, xPoints, yPoints, fillBright, strokeBright) {
    strokeWeight(0.1);
    for(col = yScalesNo; col > 0; col --) {
      for(row = xScalesNo; row > 0; row --) {
        fill(124 + col, 100, fillBright - col * 4);
        stroke(124 + row * 1.2, 100, strokeBright);
        let scaleRowPtX = map(row, 0, xScalesNo, map(col, 0, yScalesNo, xPoints[0], xPoints[3]), map(col, 0, yScalesNo, xPoints[1], xPoints[2]));
        let scaleRowPtY = map(row, 0, xScalesNo, map(col, 0, yScalesNo, yPoints[0], yPoints[3]), map(col, 0, yScalesNo, yPoints[1], yPoints[2]));
        push();
          translate(scaleRowPtX + 0.3, scaleRowPtY - 0.5);
          rotate(xScalesNo * 2);
          // circle(0, 0, 0.7);
          arc(0, 0, 0.7, 1.5, 0, 180, CHORD);
        pop();
      }
    }
  }
