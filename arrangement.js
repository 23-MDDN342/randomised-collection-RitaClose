//FACE ARRANGEMENT

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 6000;

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
  for(let i = 0; i < n; i ++) {
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

  //Default Colour Values
  let base_color = 124;
  let eye_color = 46;
  //Randomized Colour Values
  base_color = getAveragedRandom(70, 240, 3);
  eye_color = getAveragedRandom(10, 70, 3);

  //Face Arrangement
  for(let headNo = 0; headNo < 5; headNo ++) {
    let y = int(random(height/5, height - height / 4));
    let x = width / 7 * headNo + width / 7;
     
    //Set Hydra Head Variables
    let sideTilt = getAveragedRandom(-10, 10, 2);
    let jawDrop = getAveragedRandom(0, 3.5, 1);
    let eyeTilt = random(-1, 0.5);

    //Conditional Variable: Smoke
    let smokeRandom = random(0, 1);
    if(smokeRandom >= 0.8) {
      smoke = true;
    } else {
      smoke = false;
    }

    //Conditional Alternate Head
    let beheadedSpinner = random(0, 100);
    let beheaded = false;
    if(beheadedSpinner > 95) {
      beheaded = true;
    }

    //HYDRA NECK

    noFill();
    noStroke();
    //Neck Bezier Points
    let bX1 = x - sideTilt,
    bX2 = x - sideTilt * 60 + sin(frameCount * 0.5) * 20,
    bX3 = width / 2 + random(-100, 100),
    bX4 = width / 2 - sin(frameCount * 0.5) * 20;

    let bY1 =  y - 35,
    bY2 = y + 10 + sin(frameCount * 0.5) * 20,
    bY3 = height + random(-30, 30),
    bY4 = height;

    //Beheaded Neck Ending Angle
    let tilt;
    if(bX2 > (bX1 + 50)) {
      tilt = -90;
    } else if (bX2 > (bX1 + 10)) {
      tilt = -40;
    } else if (bX2 < (bX1 - 50)){
      tilt = 90;
    } else if (bX2 < (bX1 - 10)) {
      tilt = 40;
    } else {
      tilt =  0;
    }


    //Draw Neck
    colorMode(HSB);
    strokeCap(SQUARE);
    let steps = 200;

    //Base Line
    stroke(base_color, 100, 20);
    strokeWeight(100);
    bezier(bX1, bY1 + 40, bX2, bY2 + 40, bX3, bY3 + 40, bX4, bY4 + 40);

    //NeckLine 1
    stroke(base_color, 100, 60);
    strokeWeight(5);
    bezier(bX1, bY1 - 5, bX2, bY2 - 5, bX3, bY3 - 5, bX4, bY4 - 5);
    strokeWeight(1);
    for(i = steps; i >= 0; i --) { // Scales
      let t = i / steps;
      let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
      let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
      stroke(base_color + (i / 5), 100, 80 - (i / 4));
      fill(base_color + (i / 3), 100, 60 - (i / 15));
      if(i %2 == 1) {
        circle(neckX, neckY, 15);
      } else {
        circle(neckX, neckY + 10, 15);
      }
    }
    //Neck Line 2
    noFill();
    stroke(base_color, 100, 40);
    strokeWeight(30);
    bezier(bX1, bY1, bX2, bY2, bX3, bY3, bX4, bY4);
    strokeWeight(1);
    for(i = steps; i >= 0; i --) { // Scales
      let t = i / steps;
      let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
      let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
      fill(base_color + (i / 3), 100, 40 - (i / 15));
      stroke(base_color + (i / 5), 100, 60 - (i / 4));
      if(i %2 == 1) {
        circle(neckX, neckY, 15);
        circle(neckX, neckY + 10, 15);
      } else {
        circle(neckX, neckY + 20, 15);
        circle(neckX, neckY + 30, 15);
      }
    }
    //Neck Line 3
    noFill();
    stroke(base_color, 100, 30);
    strokeWeight(50);
    bezier(bX1, bY1 + 40, bX2, bY2 + 40, bX3, bY3 + 40, bX4, bY4 + 40);
    strokeWeight(1);
    for(i = steps; i >= 0; i --) { // Scales
      let t = i / steps;
      let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
      let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
      fill(base_color + (i / 3), 100, 30 - (i / 15));
      stroke(base_color + (i / 5), 100, 50 - (i / 4));
      if(i %2 == 1) {
        circle(neckX, neckY + 20, 15);
        circle(neckX, neckY + 30, 15);
        circle(neckX, neckY + 40, 15);
      } else {
        circle(neckX, neckY + 50, 15);
        circle(neckX, neckY + 60, 15);
      }
    }
    //Neck Line 4
    noFill();
    stroke(base_color, 100, 20);
    strokeWeight(40);
    bezier(bX1, bY1 + 70, bX2, bY2 + 70, bX3, bY3 + 70, bX4, bY4 + 70);
    strokeWeight(1);
    for(i = steps; i >= 0; i --) { // Scales
      let t = i / steps;
      let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
      let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
      fill(base_color + (i / 3), 100, 20 - (i / 15));
      stroke(base_color + (i / 5), 100, 40 - (i / 4));
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

    // Ambient Motion
    push();
      translate(x, y);
      if (headNo % 2 ==1) {
        rotate(sin(frameCount * 0.5) * 2);
      } else {
        rotate(sin(frameCount *  -0.5) * 2);
      }
      scale(10 - (y * 0.005));
      
      // Is Beheaded?
      if(beheaded) {
        beheadedFace(tilt);
      } else {
        hydraFace(sideTilt, jawDrop, eyeTilt, smoke, base_color, eye_color);
      }

    pop();
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
