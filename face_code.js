//FACE ONE: HYDRA HEAD
function hydraFace(sideTilt, jawDrop, eyeTilt, smoke, base_color, eye_color) {

  // let eye_color = color(219, 173, 7);
  // let base_color = 200; //Green // 124

  //Positional Variables
  let XPos = 0;
  let YPos = -0.5;
  let tilt = sideTilt;

  //Tilt Offset Variables Setup
  let lOffset = 0; // Left Offset
  let cOffset = tilt; // Central Offset
  let rOffset = 0; //Right Offset

  let clOffset = 0; // Left Central
  let crOffset = 0; // Right Central

  //Perspective Dip: Y Axis
  let yDip = 0;

  angleMode(DEGREES);
  colorMode(HSB);

  //Draw Hydra Face
  if (sideTilt > 0) { //LeftSide on Top
    lOffset = tilt * 0.1;
    rOffset = tilt * -0.75;
    clOffset = tilt * 0.75;
    crOffset = tilt * 0.5;
    yDip = tilt * 0.1;

    rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip, jawDrop, eye_color, base_color, eyeTilt, smoke);
    leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip, jawDrop, eye_color, base_color, eyeTilt, smoke);
  } else { // Right Side on Top
    lOffset = tilt * -0.7
    rOffset = tilt * 0.1;
    clOffset = tilt * 0.5;
    crOffset = tilt * 0.75;
    yDip = (tilt * -1) * 0.1;

    leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip, jawDrop, eye_color, base_color, eyeTilt, smoke);
    rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip, jawDrop, eye_color, base_color, eyeTilt, smoke);
  }

  //Draw Conditional Smoke
  colorMode(RGB);
  fill(255, 50);
  noStroke();
  blendMode(SOFT_LIGHT);
  if(jawDrop > 1 && smoke) { // Jaw Open?
    for(i = 0; i < 50; i ++) {
      if(cOffset >= 0) {
        circle(XPos + random(-2, 2) + (i/4) + cOffset, YPos + 6 + random(-3, 5) + (i / 10), random(0.5, 4));
      } else {
        circle(XPos - random(-2, 2) - (i/4) + cOffset, YPos + 6 + random(-3, 5) + (i / 10), random(0.5, 4));
      }
    }
  }
  blendMode(BLEND);
}

function leftFace(XPos, YPos, lOffset, rOffset, cOffset, clOffset, yDip, jawDrop, eye_color, base_color, eyeTilt, smoke) {
  let scaleBrightness;
  let scaleStrokeBrightness;

  //Throat
  fill(10, 100, 20);
  noStroke();
  if(cOffset >= 0) { // To avoid jaw overlap
    beginShape();
      vertex(XPos, YPos);
      vertex(XPos - 4 + lOffset, YPos + 5);
      vertex(XPos - 3 + clOffset, YPos + 6 + jawDrop - clOffset * 0.1);
      vertex(XPos, YPos + 6 + jawDrop - clOffset * 0.1);
      vertex(XPos, YPos);
    endShape(CLOSE);
  } else {
    beginShape();
      vertex(XPos, YPos);
      vertex(XPos - 4 + lOffset, YPos + 5);
      vertex(XPos - 3 + clOffset, YPos + 6 + jawDrop + clOffset * 0.09);
      vertex(XPos, YPos + 6 + jawDrop + clOffset * 0.09);
      vertex(XPos, YPos);
    endShape(CLOSE);
  }

  //Neck
  if(cOffset >= 0) {
    //Second Band
      //Bottom Quad
      scaleBrightness = 20;
      scaleStrokeBrightness = 10;
      let band2cX = [XPos - 4 - lOffset * 2, XPos - 3 - lOffset * 7.5, XPos - 3 - lOffset * 6, XPos - 3 - lOffset * 1.5];
      let band2cY = [YPos + 5, YPos + 3, YPos + 7, YPos + 8];
      quad(band2cX[0], band2cY[0], band2cX[1], band2cY[1], band2cX[2], band2cY[2], band2cX[3], band2cY[3]);
      DrawScales(true, 7 + (cOffset / 2), 5, band2cX, band2cY, base_color, scaleBrightness, scaleStrokeBrightness);
      //Middle Quad
      scaleBrightness = 30;
      scaleStrokeBrightness = 20;
      let band2bX = [XPos - 6 - lOffset * 0.4, XPos - 4 - lOffset * 5.5, XPos - 3 - lOffset * 7.5, XPos - 4 - lOffset * 2];
      let band2bY = [YPos - 3, YPos - 2, YPos + 3, YPos + 5];
      quad(band2bX[0], band2bY[0], band2bX[1], band2bY[1], band2bX[2], band2bY[2], band2bX[3], band2bY[3]);
      DrawScales(true, 5 + (cOffset / 2), 12, band2bX, band2bY, base_color, scaleBrightness, scaleStrokeBrightness);
      //Top Quad
      fill(base_color, 100, 40);
      scaleBrightness = 40;
      scaleStrokeBrightness = 30;
      let band2aX = [XPos - 4 - lOffset * 3.5, XPos - 4 - lOffset * 5, XPos - 4 - lOffset * 5.5, XPos - 6 - lOffset * 0.4];
      let band2aY = [YPos - 5, YPos - 3, YPos - 2, YPos - 3];
      quad(band2aX[0], band2aY[0], band2aX[1], band2aY[1], band2aX[2], band2aY[2], band2aX[3], band2aY[3]);
      DrawScales(true, 4 + (cOffset / 2), 3, band2aX, band2aY, base_color, scaleBrightness, scaleStrokeBrightness);

    //First Band
      //Bottom Quad
      scaleBrightness = 30;
      scaleStrokeBrightness = 20;
      let band1cX = [XPos - 4 + lOffset, XPos - 4 - lOffset * 2, XPos - 3 - lOffset * 1.5, XPos - 3 + lOffset];
      let band1cY = [YPos + 5, YPos + 5, YPos + 8, YPos + 7];
      quad(band1cX[0], band1cY[0], band1cX[1], band1cY[1], band1cX[2], band1cY[2], band1cX[3], band1cY[3]);
      DrawScales(true, 4 + (cOffset / 4), 5, band1cX, band1cY, base_color, scaleBrightness, scaleStrokeBrightness);
      //Middle Quad
      scaleBrightness = 40;
      scaleStrokeBrightness = 30;
      let band1bX = [XPos - 6 + lOffset, XPos - 6 - lOffset * 0.4, XPos - 4 - lOffset * 2, XPos - 4 + lOffset];
      let band1bY = [YPos - 3, YPos - 3, YPos + 5, YPos + 5];
      quad(band1bX[0], band1bY[0], band1bX[1], band1bY[1], band1bX[2], band1bY[2], band1bX[3], band1bY[3]);
      DrawScales(true, 4 + (cOffset / 6), 14, band1bX, band1bY, base_color, scaleBrightness, scaleStrokeBrightness);
      //Top Quad
      scaleBrightness = 50;
      scaleStrokeBrightness = 40;
      let band1aX = [XPos - 4 + lOffset, XPos - 4 - lOffset * 3.5, XPos - 6 - lOffset * 0.4, XPos - 6 + lOffset];
      let band1aY = [YPos - 5.5, YPos - 5, YPos - 3, YPos - 3];
      quad(band1aX[0], band1aY[0], band1aX[1], band1aY[1], band1aX[2], band1aY[2], band1aX[3], band1aY[3]);
      DrawScales(true, 5 + (cOffset / 4), 4, band1aX, band1aY, base_color, scaleBrightness, scaleStrokeBrightness);
  }
  
  //Face Points
  let faceX = [XPos + (clOffset * 1.05), XPos - 6 + lOffset, XPos - 4 + lOffset, XPos - 3 + clOffset];
  let faceY = [YPos - (yDip * 0.4), YPos - 3, YPos + 5, YPos + 6];

  //Upper Lip
  strokeWeight(1);
  stroke(base_color, 100, 10);
  line(faceX[3], faceY[3], faceX[2], faceY[2]);
  noStroke();

  //Draw Face
  fill(base_color, 100, 70);
  quad(faceX[0], faceY[0], faceX[1], faceY[1], faceX[2], faceY[2], faceX[3], faceY[3]);

  //Face Scales
  scaleBrightness = 60;
  scaleStrokeBrightness = 30;
  DrawScales(true, 15 + cOffset, 15, faceX, faceY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Jaw Points
  let jawX = [XPos - 3 + clOffset, XPos - 4 + lOffset, XPos - 3 + lOffset, XPos - 1.5 + clOffset];
  let jawY = [YPos + 6 + jawDrop, YPos + 5, YPos + 7.5, YPos + 8 + jawDrop];

  //Draw Jaw & Scales
  let teethNo; // Set up Teeth Amount
  noStroke();
  if(cOffset >= 0) { // Jaw Outside Mouth
    teethNo = 2 + cOffset;
    fill(base_color, 100, 40);
    scaleBrightness = 35;
    scaleStrokeBrightness = 20;
    quad(jawX[0], jawY[0], jawX[1], jawY[1], jawX[2], jawY[2], jawX[3], jawY[3]);
    DrawScales(true, 10 + cOffset, 5, jawX, jawY, base_color, scaleBrightness, scaleStrokeBrightness);
  } else { // Jaw Inside Mouth
    teethNo = 4 - cOffset;
    fill(10, 100, 20);
    quad(jawX[0], jawY[0], jawX[1], jawY[1], jawX[2], jawY[2] - 0.5, jawX[3], jawY[3]);
  }

  //Lower Lip
  strokeWeight(0.8);
  stroke(base_color, 100, 5);
  line(jawX[0] + 0.5, jawY[0], jawX[1] + 0.2, jawY[1]);

  //Teeth
  for(row = teethNo; row > 0; row --) { // Place Teeth along Jaw Gap
    fill(0, 0, 100 - row * 5);
    noStroke();
    let teethRowPtX = map(row, 0, teethNo, jawX[0], jawX[1]);
    let teethRowPtY = map(row, 0, teethNo, jawY[0], jawY[1]);
    push();
      translate(teethRowPtX + 0.3, teethRowPtY);
      triangle(-0.3, 0, 0.3, 0, 0, -2.3 + (row/5));
    pop();
  }

  //Left Eye
  stroke(base_color, 40, 60);
  strokeWeight(0.1);
  if(clOffset >= 0) { //Side Facing Eye
    //UpperEyelid
    fill(eye_color, 100, 90);
    curve(XPos - 5 + clOffset / 2 + eyeTilt * 2, YPos - 4 + eyeTilt * 2, XPos - 2 + clOffset / 2, YPos + 0.5 + eyeTilt, XPos - 4 + clOffset * 0.1, YPos -0.5 - eyeTilt, XPos + 2 - clOffset / 4 + eyeTilt * 4, YPos - 10);
    // Iris
    fill(eye_color + 10, 100, 100);
    noStroke(); 
    ellipse(XPos - 3 + clOffset * 0.3 + cOffset / 12, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3);
    // Pupil
    fill(base_color, 100, 0);
    ellipse(XPos - 3 + clOffset * 0.3 + cOffset / 10, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
    //LowerEyelid
    stroke(base_color, 100, 20);
    fill(base_color, 100, 20);
    curve(XPos - 1 + clOffset / 2, YPos + 2 + yDip * 6 + eyeTilt, XPos - 2 + clOffset / 2, YPos + 0.5 + eyeTilt, XPos - 4 + clOffset * 0.1, YPos - 0.5 - eyeTilt, XPos + 2 * clOffset / 2, YPos + 2 - eyeTilt);
  } else {
    //UpperEyelid
    fill(eye_color, 100, 90);
    curve(XPos - 5 + clOffset * 0.1 + eyeTilt * 2, YPos - 4 + eyeTilt * 2, XPos - 2 + clOffset * 0.1, YPos + 0.5 + eyeTilt, XPos - 4 - clOffset, YPos -0.5 - eyeTilt, XPos + 2 - clOffset + eyeTilt * 4, YPos - 10);
    //Iris
    fill(eye_color + 10, 100, 100);
    noStroke();
    ellipse(XPos - 3 - clOffset * 0.3, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3 + cOffset / 10, 1 - eyeTilt / 3);
    //Pupil
    fill(base_color, 100, 5);
    ellipse(XPos - 3 - clOffset * 0.3 + cOffset * 0.05, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
    //LowerEyelid
    stroke(base_color, 100, 20);
    fill(base_color, 100, 20);
    curve(XPos - 1 + clOffset * 0.1, YPos + 2 + yDip * 6 + eyeTilt, XPos - 2 + clOffset * 0.1, YPos + 0.5 + eyeTilt, XPos - 4 - clOffset, YPos - 0.5 - eyeTilt, XPos - 2 * clOffset, YPos + 2 - eyeTilt);
  }
  
  //NoseBridge
  noStroke();
  fill(base_color, 100, 90);
  scaleBrightness = 90;
  scaleStrokeBrightness = 60;
  let noseBridgeX = [XPos + (clOffset * 0.7), XPos - 1 + (clOffset * 0.7), XPos - 2 + clOffset, XPos + cOffset];
  let noseBridgeY = [YPos - 2, YPos - 2, YPos + 4, YPos + 5 - yDip];
  quad(noseBridgeX[0], noseBridgeY[0], noseBridgeX[1], noseBridgeY[1], noseBridgeX[2], noseBridgeY[2], noseBridgeX[3], noseBridgeY[3]);
  DrawScales(true, 3 + (cOffset / 3), 10, noseBridgeX, noseBridgeY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Nose Points
  let noseX = [XPos + cOffset, XPos - 2.5 + clOffset, XPos - 3 + clOffset, XPos + cOffset];
  let noseY = [YPos + 4, YPos + 4, YPos + 6, YPos + 6];

  //FrontTeeth
  teethNo = 3;
  for(row = teethNo; row > 0; row --) {
    fill(0, 0, 100);
    noStroke();
    let teethRowPtX = map(row, 0, teethNo, noseX[3], noseX[2]);
    let teethRowPtY = map(row, 0, teethNo, noseY[3], noseY[2]);
    push();
      translate(teethRowPtX + 0.3, teethRowPtY);
      if(row == teethNo) {
        triangle(-0.3, 0, 0.3, 0, 0, 2 + (row / 5));
      } else {
        triangle(-0.3, 0, 0.3, 0, 0, 1.5);
      }
    pop();
  }

  //Front Upper Lip
  strokeWeight(0.4);
  stroke(base_color, 100, 40);
  line(noseX[3], noseY[3] + 0.1, noseX[2] + 0.15, noseY[2] + 0.1);
  noStroke();

  //Draw Nose
  scaleBrightness = 95;
  scaleStrokeBrightness = 80;
  fill(base_color, 100, 95);
  quad(noseX[0], noseY[0], noseX[1], noseY[1], noseX[2], noseY[2], noseX[3], noseY[3]);
  DrawScales(true, 4 + (cOffset / 2), 5, noseX, noseY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Nostrils
  fill(base_color, 100, 30);
  if(smoke && jawDrop > 1) { // Nostril Flare for Smoke
    quad(XPos - 0.5 + (cOffset * 0.8), YPos + 5.25, XPos - 2 + clOffset, YPos + 4.5, XPos - 2 + clOffset, YPos + 5.5, XPos - 0.5 + (cOffset * 0.8), YPos + 5.6);
  } else {
    quad(XPos - 0.5 + (cOffset * 0.8), YPos + 5.25, XPos - 2 + clOffset, YPos + 4.5, XPos - 2 + clOffset, YPos + 5, XPos - 0.5 + (cOffset * 0.8), YPos + 5.5);
  }

  //Mouth
  fill(base_color, 100, 85);
  scaleBrightness = 85;
  scaleStrokeBrightness = 70;
  let mouthX = [XPos + cOffset, XPos - 3 + clOffset, XPos - 1.5 + clOffset, XPos + clOffset, YPos + 8 + jawDrop];
  let mouthY = [YPos + 6 + jawDrop, YPos + 6 + jawDrop, YPos + 8 + jawDrop, YPos + 8 + jawDrop];
  quad(mouthX[0], mouthY[0], mouthX[1], mouthY[1], mouthX[2], mouthY[2], mouthX[3], mouthY[3]);
  DrawScales(true, 4 + (cOffset / 2), 4, mouthX, mouthY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Bottom Front Teeth
  teethNo = 4;
  for(row = teethNo; row > 0; row --) {
    fill(0, 0, 100);
    noStroke();
    let teethRowPtX = map(row, 0, teethNo, mouthX[0], mouthX[1]);
    let teethRowPtY = map(row, 0, teethNo, mouthY[0], mouthY[1]);
    push();
      translate(teethRowPtX + 0.3, teethRowPtY);
      triangle(-0.3, 0, 0.3, 0, 0, -1);
    pop();
  }
  
  //Front Lower Lip
  strokeWeight(0.3);
  stroke(base_color, 100, 20);
  line(mouthX[0], mouthY[0], mouthX[1] + 0.15, mouthY[1]);
  noStroke();
  
  //Forehead
  fill(base_color, 100, 100);
  scaleBrightness = 70;
  scaleStrokeBrightness = 65;
  let forredX = [XPos + (clOffset * 0.4), XPos - 4 + lOffset, XPos - 6 + lOffset, XPos + (cOffset * 0.8)];
  let forredY = [YPos -  5 + (yDip * 1.5), YPos - 5.5, YPos - 3, YPos - (yDip * 0.2)];
  quad(forredX[0], forredY[0], forredX[1], forredY[1], forredX[2], forredY[2], forredX[3], forredY[3]);
  DrawScales(true, 10 + cOffset, 7, forredX, forredY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Crown of Head
  noStroke();
  fill(base_color, 100, 65);
  triangle(XPos + (clOffset * 0.4), YPos - 5 + (yDip * 1.5), XPos + lOffset - 4, YPos - 5.5, XPos + rOffset + 4, YPos - 5.5);
  
  //Horns
  fill(base_color + 20, 100, 90);
  triangle(XPos - 2 - (clOffset * 0.01), YPos - 2 + (yDip * -1), XPos - 4 - (clOffset * 0.05), YPos -  3 + (yDip * -0.5), XPos - 3.5 - (clOffset * 0.4), YPos -  10 + (yDip * -1));
  fill(base_color + 6, 100, 50);
  triangle(XPos - 2 - (clOffset * 0.01), YPos - 2 + (yDip * -1), XPos - 1.5 + (clOffset * 0.05), YPos -  2.8 + (yDip * -0.9), XPos - 3.5 - (clOffset * 0.4), YPos -  10 + (yDip * -1));
  stroke(base_color, 100, 100);
  line(XPos - 2 - (clOffset * 0.01), YPos - 2 + (yDip * -1), XPos - 3.5 - (clOffset * 0.4), YPos -  10 + (yDip * -1));  
}


function rightFace(XPos, YPos, rOffset, cOffset, crOffset, yDip, jawDrop, eye_color, base_color, eyeTilt, smoke) {
  let scaleBrightness;
  let scaleStrokeBrightness;

  //Throat
  fill(10, 100, 20);
  noStroke();
  if(cOffset >=0) { // To avoid jaw overlap
    beginShape();
      vertex(XPos, YPos);
      vertex(XPos + 4 + rOffset, YPos + 5);
      vertex(XPos + 3 + crOffset, YPos + 6 + jawDrop - crOffset * 0.1);
      vertex(XPos, YPos + 6 + jawDrop - crOffset * 0.1);
      vertex(XPos, YPos);
    endShape(CLOSE);
  } else {
    beginShape();
      vertex(XPos, YPos);
      vertex(XPos + 4 + rOffset, YPos + 5);
      vertex(XPos + 3 + crOffset, YPos + 6 + jawDrop + crOffset * 0.09);
      vertex(XPos, YPos + 6 + jawDrop + crOffset * 0.09);
      vertex(XPos, YPos);
    endShape(CLOSE);
  }
  
  //Neck
  if(cOffset <=0) {
    //Second Band
      //Bottom Quad
      fill(base_color, 100, 10);
      scaleBrightness = 20;
      scaleStrokeBrightness = 10;
      let band2cX = [XPos + 4 - rOffset * 2, XPos + 3 - rOffset * 7.5, XPos + 3 - rOffset * 6, XPos + 3 - rOffset * 1.5];
      let band2cY = [YPos + 5, YPos + 3, YPos + 7, YPos + 8];
      quad(band2cX[0], band2cY[0], band2cX[1], band2cY[1], band2cX[2], band2cY[2], band2cX[3], band2cY[3]);
      DrawScales(false, 7 + (cOffset / -2), 5, band2cX, band2cY, base_color, scaleBrightness, scaleStrokeBrightness);
      //Middle Quad
      scaleBrightness = 30;
      scaleStrokeBrightness = 20;
      let band2bX = [XPos + 6 - rOffset * 0.4, XPos + 4 - rOffset * 5.5, XPos + 3 - rOffset * 7.5, XPos + 4 - rOffset * 2];
      let band2bY = [YPos - 3, YPos - 2, YPos + 3, YPos + 5];
      quad(band2bX[0], band2bY[0], band2bX[1], band2bY[1], band2bX[2], band2bY[2], band2bX[3], band2bY[3]);
      DrawScales(false, 5 + (cOffset / -2), 12, band2bX, band2bY, base_color, scaleBrightness, scaleStrokeBrightness);
      //Top Quad
      fill(base_color, 100, 40);
      scaleBrightness = 40;
      scaleStrokeBrightness = 30;
      let band2aX = [XPos + 4 - rOffset * 3.5, XPos + 4 - rOffset * 5, XPos + 4 - rOffset * 5.5, XPos + 6 - rOffset * 0.4];
      let band2aY = [YPos - 5, YPos - 3, YPos - 2, YPos - 3];
      quad(band2aX[0], band2aY[0], band2aX[1], band2aY[1], band2aX[2], band2aY[2], band2aX[3], band2aY[3]);
      DrawScales(false, 4 + (cOffset / -2), 3, band2aX, band2aY, base_color, scaleBrightness, scaleStrokeBrightness);

    //First Band
      //Bottom Quad
      scaleBrightness = 30;
      scaleStrokeBrightness = 20;
      let band1cX = [XPos + 4 + rOffset, XPos + 4 - rOffset * 2, XPos + 3 - rOffset * 1.5, XPos + 3 + rOffset];
      let band1cY = [YPos + 5, YPos + 5, YPos + 8, YPos + 7];
      quad(band1cX[0], band1cY[0], band1cX[1], band1cY[1], band1cX[2], band1cY[2], band1cX[3], band1cY[3]);
      DrawScales(false, 4 + (cOffset / -4), 5, band1cX, band1cY, base_color, scaleBrightness, scaleStrokeBrightness);
      //Middle Quad
      scaleBrightness = 40;
      scaleStrokeBrightness = 30;
      let band1bX = [XPos + 6 + rOffset, XPos + 6 - rOffset * 0.4, XPos + 4 - rOffset * 2, XPos + 4 + rOffset];
      let band1bY = [YPos - 3, YPos - 3, YPos + 5, YPos + 5];
      quad(band1bX[0], band1bY[0], band1bX[1], band1bY[1], band1bX[2], band1bY[2], band1bX[3], band1bY[3]);
      DrawScales(false, 4 + (cOffset / -6), 14, band1bX, band1bY, base_color, scaleBrightness, scaleStrokeBrightness);
      //Top Quad
      scaleBrightness = 50;
      scaleStrokeBrightness = 40;
      let band1aX = [XPos + 4 + rOffset, XPos + 4 - rOffset * 3.5, XPos + 6 - rOffset * 0.4, XPos + 6 + rOffset];
      let band1aY = [YPos - 5.5, YPos - 5, YPos - 3, YPos - 3];
      quad(band1aX[0], band1aY[0], band1aX[1], band1aY[1], band1aX[2], band1aY[2], band1aX[3], band1aY[3]);
      DrawScales(false, 5 + (cOffset / -4), 4, band1aX, band1aY, base_color, scaleBrightness, scaleStrokeBrightness);
  }

  //Face Points
  let faceX = [XPos + (crOffset * 1.05), XPos + 6 + rOffset, XPos + 4 + rOffset, XPos + 3 + crOffset];
  let faceY = [YPos - (yDip * 0.4), YPos - 3, YPos + 5, YPos + 6];

  //Upper Lip
  strokeWeight(1);
  stroke(base_color, 100, 10);
  line(faceX[3], faceY[3], faceX[2], faceY[2]);
  noStroke();

  //Draw Face
  fill(base_color, 100, 70);
  quad(faceX[0], faceY[0], faceX[1], faceY[1], faceX[2], faceY[2], faceX[3], faceY[3]);

  //Face Scales
  scaleBrightness = 60;
  scaleStrokeBrightness = 30;
  DrawScales(false, 15 - cOffset, 15, faceX, faceY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Jaw Points
  let jawX = [XPos + 3 + crOffset, XPos + 4 + rOffset, XPos + 3 + rOffset, XPos + 1.5 + crOffset];
  let jawY = [YPos + 6 + jawDrop, YPos + 5, YPos + 7.5, YPos + 8 + jawDrop];
  
  //Draw Jaw & Scales
  let teethNo; // Set Up Teeth Variables
  noStroke();
  if(cOffset <= 0) { //Outer Jaw
    teethNo = 2 - cOffset;
    fill(base_color, 100, 40);
    scaleBrightness = 35;
    scaleStrokeBrightness = 20;
    quad(jawX[0], jawY[0], jawX[1], jawY[1], jawX[2], jawY[2], jawX[3], jawY[3]);
    DrawScales(false, 10 - cOffset, 5, jawX, jawY, base_color, scaleBrightness, scaleStrokeBrightness);
  } else { // Inner Jaw
    teethNo = 4 + cOffset;
    fill(10, 100, 20);
    quad(jawX[0], jawY[0], jawX[1], jawY[1], jawX[2], jawY[2] - 0.6, jawX[3], jawY[3]);
  }

  //Lower Lip
  strokeWeight(0.8);
  stroke(base_color, 100, 5);
  line(jawX[0] - 0.5, jawY[0], jawX[1] - 0.2, jawY[1]);

  //Teeth
  for(row = teethNo; row > 0; row --) { // Space teeth along jaw
    fill(0, 0, 100 - row * 5);
    noStroke();
    let teethRowPtX = map(row, 0, teethNo, jawX[0], jawX[1]);
    let teethRowPtY = map(row, 0, teethNo, jawY[0], jawY[1]);
    push();
      translate(teethRowPtX - 0.3, teethRowPtY);
      triangle(-0.3, 0, 0.3, 0, 0, -2.3 + (row/5));
    pop();
  }

  //Right Eye
  stroke(base_color, 60, 40);
  strokeWeight(0.1);
  if(crOffset <= 0) { // SideFace (Long Eye)
    //Upper Eyelid
    fill(eye_color, 100, 90);
    curve(XPos + 5 + crOffset / 2 + eyeTilt * 2, YPos - 4 + eyeTilt * 2, XPos + 2 + crOffset / 2, YPos + 0.5 + eyeTilt, XPos + 4 + crOffset * 0.1, YPos -0.5 - eyeTilt, XPos - 2 - crOffset / 4 + eyeTilt * 4, YPos - 10);
    //Iris
    fill(eye_color + 10, 100, 100);
    noStroke();
    ellipse(XPos + 3 + crOffset * 0.3 + cOffset / 12, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3);
    //Pupil
    fill(base_color, 100, 0);
    ellipse(XPos + 3 + crOffset * 0.3 + cOffset / 10, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
    //Lower Eyelid
    stroke(base_color, 100, 20);
    fill(base_color, 100, 20);
    curve(XPos + 1 + crOffset / 2, YPos + 2 + yDip * 6 + eyeTilt, XPos + 2 + crOffset / 2, YPos + 0.5 + eyeTilt, XPos + 4 + crOffset * 0.1, YPos - 0.5 - eyeTilt, XPos - 2 * crOffset / 2, YPos + 2 - eyeTilt);
  } else { // Hidden Eye (Short Side)
    //Upper Eyelid
    fill(eye_color, 100, 90);
    curve(XPos + 5 + crOffset * 0.1 + eyeTilt * 2, YPos - 4 + eyeTilt * 2, XPos + 2 + crOffset * 0.1, YPos + 0.5 + eyeTilt, XPos + 4 - crOffset, YPos -0.5 - eyeTilt, XPos - 2 - crOffset + eyeTilt * 4, YPos - 10);
    //Iris
    fill(eye_color + 10, 100, 100);
    noStroke();
    ellipse(XPos + 3 - crOffset * 0.3, YPos + 0.4 + eyeTilt / 4, 1 - eyeTilt / 3 - cOffset / 10, 1 - eyeTilt / 3);
    //Pupil
    fill(base_color, 100, 5);
    ellipse(XPos + 3 - crOffset * 0.3 + cOffset * 0.05, YPos + 0.4 + eyeTilt / 4, 0.4 - eyeTilt / 5, 1);
    //Lower Eyelid
    stroke(base_color, 100, 20);
    fill(base_color, 100, 20);
    curve(XPos + 1 + crOffset * 0.1, YPos + 2 + yDip * 6 + eyeTilt, XPos + 2 + crOffset * 0.1, YPos + 0.5 + eyeTilt, XPos + 4 - crOffset, YPos - 0.5 - eyeTilt, XPos - 2 * crOffset, YPos + 2 - eyeTilt);
  }

  //NoseBridge
  noStroke();
  fill(base_color, 100, 90);
  scaleBrightness = 90;
  scaleStrokeBrightness = 60;
  let noseBridgeX = [XPos + (crOffset * 0.7), XPos + 1 + (crOffset * 0.7), XPos + 2 + crOffset, XPos + cOffset];
  let noseBridgeY = [YPos - 2, YPos - 2, YPos + 4, YPos + 5 - yDip];
  quad(noseBridgeX[0], noseBridgeY[0], noseBridgeX[1], noseBridgeY[1], noseBridgeX[2], noseBridgeY[2], noseBridgeX[3], noseBridgeY[3]);
  DrawScales(false, 3 + (cOffset / -3), 10, noseBridgeX, noseBridgeY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Nose Points
  let noseX = [XPos + cOffset, XPos + 2.5 + crOffset, XPos + 3 + crOffset, XPos + cOffset];
  let noseY = [YPos + 4, YPos + 4, YPos + 6, YPos + 6];
  
  //FrontTeeth
  teethNo = 3;
  for(row = teethNo; row > 0; row --) { 
    fill(0, 0, 100);
    noStroke();
    let teethRowPtX = map(row, 0, teethNo, noseX[3], noseX[2]);
    let teethRowPtY = map(row, 0, teethNo, noseY[3], noseY[2]);
    push();
      translate(teethRowPtX - 0.3, teethRowPtY);
      if(row == teethNo) {
        triangle(-0.3, 0, 0.3, 0, 0, 2 + (row/5));
      } else {
        triangle(-0.3, 0, 0.3, 0, 0, 1.5);
      }
    pop();
  }
    
  //Front Upper Lip
  strokeWeight(0.4);
  stroke(base_color, 100, 40);
  line(noseX[3], noseY[3] + 0.1, noseX[2] + 0.15, noseY[2] + 0.1);
  noStroke();

  //Nose
  scaleBrightness = 95;
  scaleStrokeBrightness = 80;
  fill(base_color, 100, 95);
  quad(noseX[0], noseY[0], noseX[1], noseY[1], noseX[2], noseY[2], noseX[3], noseY[3]);
  DrawScales(false, 4 + (cOffset / -2), 5, noseX, noseY, base_color, scaleBrightness, scaleStrokeBrightness);
  
  //Nostrils
  fill(base_color, 100, 30);
  if(smoke && jawDrop > 1){ // Flare Nostrils if Smoke is true
    quad(XPos + 0.5 + (cOffset * 0.8), YPos + 5.25, XPos + 2 + crOffset, YPos + 4.5, XPos + 2 + crOffset, YPos + 5.5, XPos + 0.5 + (cOffset * 0.8), YPos + 6);
  } else {
    quad(XPos + 0.5 + (cOffset * 0.8), YPos + 5.25, XPos + 2 + crOffset, YPos + 4.5, XPos + 2 + crOffset, YPos + 5, XPos + 0.5 + (cOffset * 0.8), YPos + 5.5);
  }

  //Mouth
  fill(base_color, 100, 85);
  scaleBrightness = 85;
  scaleStrokeBrightness = 70;
  let mouthX = [XPos + cOffset, XPos + 3 + crOffset, XPos + 1.5 + crOffset, XPos + crOffset];
  let mouthY = [YPos + 6 + jawDrop, YPos + 6 + jawDrop, YPos + 8 + jawDrop, YPos + 8 + jawDrop];
  quad(mouthX[0], mouthY[0], mouthX[1], mouthY[1], mouthX[2], mouthY[2], mouthX[3], mouthY[3]);
  DrawScales(false, 4 + (cOffset / -2), 4, mouthX, mouthY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Bottom Front Teeth
  teethNo = 4;
  for(row = teethNo; row > 0; row --) {
    fill(0, 0, 100);
    noStroke();
    let teethRowPtX = map(row, 0, teethNo, mouthX[0], mouthX[1]);
    let teethRowPtY = map(row, 0, teethNo, mouthY[0], mouthY[1]);
    push();
      translate(teethRowPtX - 0.3, teethRowPtY);
      triangle(-0.3, 0, 0.3, 0, 0, -1);
    pop();
  }

  //Front Lower Lip
  strokeWeight(0.3);
  stroke(base_color, 100, 20);
  line(mouthX[0], mouthY[0], mouthX[1] - 0.15, mouthY[1]);
  noStroke();

  //Forehead
  fill(base_color, 100, 100);
  scaleBrightness = 70;
  scaleStrokeBrightness = 65;
  let forredX = [XPos + (crOffset * 0.4), XPos + 4 + rOffset, XPos + 6 + rOffset, XPos + (cOffset * 0.8)];
  let forredY = [YPos -  5 + (yDip * 1.5), YPos - 5.5, YPos - 3, YPos - (yDip * 0.2)];
  quad(forredX[0], forredY[0], forredX[1], forredY[1], forredX[2], forredY[2], forredX[3], forredY[3]);
  DrawScales(false, 10 - cOffset, 7, forredX, forredY, base_color, scaleBrightness, scaleStrokeBrightness);

  //Crown
  // fill(base_color, 100, 90);
  // triangle(XPos + (crOffset * 0.4), YPos - 5 + (yDip * 1.5), lOffset - 4, YPos - 5.5, rOffset + 4, YPos - 5.5);
  
  //Horns
  fill(base_color + 20, 100, 90);
  triangle(XPos + 2 - (crOffset * 0.01), YPos - 2 + (yDip * -1), XPos + 4 - (crOffset * 0.05), YPos - 3 + (yDip * -0.5), XPos + 3.5 - (crOffset * 0.4), YPos - 10 + (yDip * -1));
  fill(base_color + 6, 100, 50);
  triangle(XPos + 2 - (crOffset * 0.01), YPos - 2 + (yDip * -1), XPos + 1.5 + (crOffset * 0.05), YPos - 2.8 + (yDip * -0.9), XPos + 3.5 - (crOffset * 0.4), YPos - 10 + (yDip * -1));
  stroke(base_color, 100, 100);
  line(XPos + 2 - (crOffset * 0.01), YPos - 2 + (yDip * -1), XPos + 3.5 - (crOffset * 0.4), YPos - 10 + (yDip * -1));
}

function DrawScales(orientation, xScalesNo, yScalesNo, xPoints, yPoints, base_color, fillBright, strokeBright) {
  strokeWeight(0.1);
  for(col = yScalesNo; col > 0; col --) { // Column
    for(row = xScalesNo; row > 0; row --) { // Row
      fill(base_color + col, 100, fillBright - col * 4);
      stroke(base_color + row * 1.2, 100, strokeBright);
      //Calculate scale positions within given quad space
      let scaleRowPtX = map(row, 0, xScalesNo, map(col, 0, yScalesNo, xPoints[0], xPoints[3]), map(col, 0, yScalesNo, xPoints[1], xPoints[2]));
      let scaleRowPtY = map(row, 0, xScalesNo, map(col, 0, yScalesNo, yPoints[0], yPoints[3]), map(col, 0, yScalesNo, yPoints[1], yPoints[2]));
      push();
        if(orientation) { // Face Direction
          translate(scaleRowPtX + 0.3, scaleRowPtY - 0.5);
          rotate(xScalesNo * 2);
        } else {
          translate(scaleRowPtX - 0.3, scaleRowPtY - 0.5);
          rotate(-xScalesNo * 2);
        }
        //Draw Scale
        arc(0, 0, 0.7, 1.5, 0, 180, CHORD);
      pop();
    }
  }
}

function beheadedFace(tilt) {
  colorMode(HSB);
  stroke(355, 100, 30);
  strokeWeight(0.5);
  //Blood
  for(i = 0; i < int(3); i ++) {
    push();
      translate(random(-1, 1), 0)
      line(0, 0, 0, 0 + random(2, 8));
    pop();
  }
  //Draw Open Neck
  rotate(tilt);
  strokeWeight(0.25);
  fill(0, 100, 50);
  stroke(355, 100, 30);
  ellipse(0, 0, 12, 2.5);
  fill(350, 100, 60);
  stroke(350, 100, 80);
  ellipse(0, 0, 10, 1.5);
  noStroke();
  fill(366, 100, 40);
  ellipse(0, 0, 7, 0.8);
}