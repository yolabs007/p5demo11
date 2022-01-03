function preload(){
  mybg = loadImage("music.jpg")
  mysong1 = loadSound("Gurenge.mp3")
  mysong2 = loadSound("Blue Bird.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  s1 = createSlider(0,1,0.1,0.1) // min, max,default sound, minchange_possible
  s1.position(10,10)
  bt1 = createButton("blue bird")
  bt1.mousePressed(song2control)
  bt2 = createButton("Gurenge")
 bt2.mousePressed(song1control)
  bt3 = createButton("stop")
  bt3.mousePressed(stop)
  //mysong1.play();
}

function song1control(){
  mysong1.play()
  mysong2.stop()
}

function song2control(){
  mysong2.play()
  mysong1.stop()
}

function stop(){
  mysong1.stop()
  mysong2.stop()
}