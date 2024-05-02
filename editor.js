/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [71, 150, 80];
let slider1, slider2, slider3, slider4, slider5;
let slider6;
let faceSelector;
let faceGuideCheckbox;

function setup () {

  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 0);
  slider3 = createSlider(0, 100, 70);
  slider4 = createSlider(0, 100, 0);
  slider5 = createSlider(0, 100, 35);
  slider6 = createSlider(0, 100, 12);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');

  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.value('1');
  faceSelector.parent('selector1Container');
}



function draw () {
  strokeWeight(0.2);

  let mode = faceSelector.value();

  background(bg_color);

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
  let s5 = slider5.value();
  let s6 = slider6.value();

  let show_face_guide = faceGuideCheckbox.checked();

  // use same size / y_pos for all faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  push();
  translate(face_x, face_y);
  scale(face_scale);

  push();
  if (mode == '1') {

  // Editor Slider Variables
  let sideTilt = map(s1, 0, 100, -10, 10);
  let jawDrop = map(s2, 0, 100, 0, 3);
  let eyeTilt = map(s3, 0, 100, -0.5, 0.5);
  let smoke = map(s4, 0, 100, 0, 1);
  let base_color = map(s5, 0, 100, 0, 360);
  let eye_color = map(s6, 0, 100, 0, 360);
  
  //Conditional Smoke Variable
  if(smoke >= 0.8) {
    smoke = true;
  } else {
    smoke = false;
  }
  
  //Draw Hydra Head
  hydraFace(sideTilt, jawDrop, eyeTilt, smoke, base_color, eye_color);
  }

  if (mode == '2') {
    let tilt;
    beheadedFace(tilt);
  }

  pop();

  if(show_face_guide) {
    strokeWeight(0.1);
    rectMode(CORNER); 
    noFill()
    stroke(0, 0, 255);
    rect(-10, -10, 20, 20);
    line(  0, -11,  0, -10);
    line(  0,  10,  0, 11);
    line(-11,   0,-10,  0);
    line( 11,   0, 10,  0);
  }

  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
