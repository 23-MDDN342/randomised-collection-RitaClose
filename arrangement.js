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
    let x = width / 2 + int(random(-w * 2, w * 2));
     
        // center face
        let sideTilt = random(-10, 10);
        let jawDrop = random(0, 3);
        let eyeTilt = random(-1, 0.5);

        // stroke(255);
        // strokeWeight(75);
        noFill();
        noStroke();

        let bX1 = x - sideTilt,
        bX2 = x - sideTilt * 60,
        bX3 = width / 2 + random(-100, 100),
        bX4 = width / 2;

        let bY1 =  y - 40,
        bY2 = y + 20,
        bY3 = height + random(-30, 30),
        bY4 = height;

        bezier(bX1, bY1, bX2, bY2, bX3, bY3, bX4, bY4);

        fill(170);
        let steps = 30;

        for(i = 0; i <= steps; i ++) {
          let t = i / steps;
          let neckX = bezierPoint(bX1, bX2, bX3, bX4, t);
          let neckY = bezierPoint(bY1, bY2, bY3, bY4, t);
          fill(180);
          rect(neckX - 5, neckY, 50, 100, 8);
          fill(210);
          rect(neckX, neckY, 20, 30, 10);
          fill(230);
          rect(neckX + 5, neckY - 5, 25, 30, 8);
          fill(160);
          rect(neckX - 10, neckY + 40, 30, 30, 6);
        }

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
