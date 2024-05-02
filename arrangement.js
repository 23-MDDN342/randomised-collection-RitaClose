/*
 * This program draws your arrangement of faces on the canvas.
 */
const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function getAveragedRandom(min, max, n) {

  let sum = 0;
 
  for(let i=0; i<n; i++) {
 
  sum = sum + random(min, max);
 
  }
 
  return sum / n;
 
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(6, 30, 20);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 5;
  let h = canvasHeight / 4;
  for(let j = 0; j < 5; j ++) {
    let y = h/2 * int(random(2, 6));
    let x = width / 7 * j + width / 7;
     
  // center face
  let sideTilt = random(-10, 10);
  // let jawDrop = getAveragedRandom(0, 3, 1);
  let jawDrop = random(0, 3);
  let eyeTilt = random(-1, 0.5);
  let smokeRandom = random(0, 1);
  if(smokeRandom >= 0.8) {
    smoke = true;
  } else {
    smoke = false;
  }

  let beheadedSpinner = random(0, 100);
  let beheaded = false;
  if(beheadedSpinner > 95) {
    beheaded = true;
  }

  noFill();
  noStroke();

  let bX1 = x - sideTilt,
  bX2 = x - sideTilt * 60 + sin(frameCount * 0.5) * 20,
  bX3 = width / 2 + random(-100, 100),
  bX4 = width / 2 - sin(frameCount * 0.5) * 20;

  let bY1 =  y - 35,
  bY2 = y + 10 + sin(frameCount * 0.5) * 20,
  bY3 = height + random(-30, 30),
  bY4 = height;

  angleMode(RADIANS);
  //width / 2 = 480
  let tilt;
  if(x > width / 2 - 40 && x < width / 2 + 40) {
    beheaded = false;
  } else {
    tilt = 22 * sin(bX2 * 0.01) + 90;
  }
  // let tilt = 274;

  angleMode(DEGREES);

  // if(beheaded) {
  //   bX2 = bX1;
  //   bY2 = bY1 + 10;
  // }

  colorMode(HSB);
  let steps = 200;
  rectMode(CENTER);

  stroke(124, 100, 20);
  strokeWeight(100);
  strokeCap(SQUARE);
  bezier(bX1, bY1 + 40, bX2, bY2 + 40, bX3, bY3 + 40, bX4, bY4 + 40);

  strokeCap(ROUND);
  stroke(124, 100, 60);
  strokeWeight(5);
  bezier(bX1, bY1 - 5, bX2, bY2 - 5, bX3, bY3 - 5, bX4, bY4 - 5);
  strokeWeight(1);
  for(i = 0; i <= steps; i ++) {
    let t = i / steps;
    let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
    let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
    stroke(124 + (i / 5), 100, 80 - (i / 4));
    fill(124 + (i / 3), 100, 60 - (i / 15));
    if(i %2 == 1) {
      circle(neckX, neckY, 15);
    } else {
      circle(neckX, neckY + 10, 15);
    }
  }

  noFill();
  stroke(124, 100, 40);
  strokeWeight(30);
  bezier(bX1, bY1, bX2, bY2, bX3, bY3, bX4, bY4);
  strokeWeight(1);
  for(i = 0; i <= steps; i ++) {
    let t = i / steps;
    let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
    let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
    fill(124 + (i / 3), 100, 40 - (i / 15));
    stroke(124 + (i / 5), 100, 60 - (i / 4));
    if(i %2 == 1) {
      circle(neckX, neckY, 15);
      circle(neckX, neckY + 10, 15);
    } else {
      circle(neckX, neckY + 20, 15);
      circle(neckX, neckY + 30, 15);
    }
  }

  noFill();
  stroke(124, 100, 30);
  strokeWeight(50);
  bezier(bX1, bY1 + 40, bX2, bY2 + 40, bX3, bY3 + 40, bX4, bY4 + 40);
  strokeWeight(1);
  for(i = 0; i <= steps; i ++) {
    let t = i / steps;
    let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
    let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
    fill(124 + (i / 3), 100, 30 - (i / 15));
    stroke(124 + (i / 5), 100, 50 - (i / 4));
    if(i %2 == 1) {
      circle(neckX, neckY + 20, 15);
      circle(neckX, neckY + 30, 15);
      circle(neckX, neckY + 40, 15);
    } else {
      circle(neckX, neckY + 50, 15);
      circle(neckX, neckY + 60, 15);
    }
  }

  noFill();
  stroke(124, 100, 20);
  strokeWeight(40);
  bezier(bX1, bY1 + 70, bX2, bY2 + 70, bX3, bY3 + 70, bX4, bY4 + 70);
  strokeWeight(1);
  for(i = 0; i <= steps; i ++) {
    let t = i / steps;
    let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
    let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
    fill(124 + (i / 3), 100, 20 - (i / 15));
    stroke(124 + (i / 5), 100, 40 - (i / 4));
    if(i %2 == 1) {
      circle(neckX, neckY + 50, 15);
      circle(neckX, neckY + 60, 15);
    } else {
      circle(neckX, neckY + 70, 15);
      circle(neckX, neckY + 80, 15);
    }
  }

  colorMode(RGB);
  blendMode(BLEND);

  push();
  translate(x, y);
  if (j % 2 ==1) {
    rotate(sin(frameCount * 0.5) * 2);
  } else {
    rotate(sin(frameCount *  -0.5) * 2);
  }
  scale(10 - (y * 0.005));
  

  if(beheaded) {
    beheadedFace(tilt);
  } else {
    hydraFace(sideTilt, jawDrop, eyeTilt, smoke);
  }

  pop();

  // let neckX = x;
  // let neckY = y;
  // let inc = 5;


  // if(x < width / 2) {
    // for(i = x; i <= 480; i += 5) {
    //   fill(20, 200, 100);
    //   // circle(neckX - sideTilt * 10, y + i * 10, 30);
    //   circle(neckX - sideTilt * 6 + i, y + 10 + inc, 50);
    //   inc += 5;
    // }
  // } else {
  //   for(i = x; i < width / 2; i --) {
  //     fill(20, 200, 100);
  //     circle(x - sideTilt * 10, y + i * 10, 30);
  //   }
  // }

  // if(x < width / 2) {
  //   while(neckX <= width / 2) {
  //     fill(0);
  //     circle(x - sideTilt * 10 + neckX, y + inc, 30);
  //     neckX + 5;
  //   }
  // }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
