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

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 5;
  let h = canvasHeight / 4;
  for(let j=0; j<5; j++) {
    let y = h/2 * int(random(2, 6));
    let x = width / 7 * j + width / 7;
     
        // center face
        let sideTilt = random(-10, 10);
        let jawDrop = random(0, 3);
        let eyeTilt = random(-1, 0.5);

        noFill();
        noStroke();

        let bX1 = x - sideTilt,
        bX2 = x - sideTilt * 60,
        bX3 = width / 2 + random(-100, 100),
        bX4 = width / 2;

        let bY1 =  y - 35,
        bY2 = y + 10,
        bY3 = height + random(-30, 30),
        bY4 = height;

        colorMode(HSB);

        stroke(124, 100, 60);
        strokeWeight(5);
        bezier(bX1, bY1 - 10, bX2, bY2 - 10, bX3, bY3 - 10, bX4, bY4 - 10);
        stroke(124, 100, 40);
        strokeWeight(30);
        bezier(bX1, bY1, bX2, bY2, bX3, bY3, bX4, bY4);
        stroke(124, 100, 30);
        strokeWeight(50);
        bezier(bX1, bY1 + 40, bX2, bY2 + 40, bX3, bY3 + 40, bX4, bY4 + 40);
        stroke(124, 100, 20);
        strokeWeight(40);
        bezier(bX1, bY1 + 80, bX2, bY2 + 80, bX3, bY3 + 80, bX4, bY4 + 80);

        let steps = 30;

        blendMode(OVERLAY);
        noStroke();
        for(i = 0; i <= steps; i ++) {
          let t = i / steps;
          let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
          let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
          fill(124, 100, 50);
          rect(neckX - 5, neckY, 70, 100, 8);
          fill(124, 100, 70);
          rect(neckX, neckY - 15, 40, 30, 8);
          fill(124, 100, 50);
          rect(neckX - 15, neckY - 10, 55, 40, 8);
          fill(124, 100, 40);
          rect(neckX - 10, neckY + 40, 40, 40, 8);
        }

        colorMode(RGB);
        blendMode(BLEND);

        push();
        translate(x, y);
        scale(10 - (y * 0.005));
        
        hydraFace(sideTilt, jawDrop, eyeTilt);
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
