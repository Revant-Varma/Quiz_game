var bg, hammerS, google, maggelan, pirate, math, pop, qm;
var quizMaster
var button1,button2,button3,button4;
var score = 0;
var q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
//var minute = 1;
var time = 30;

var scoreText, timerText
function preload(){

  bg = loadImage("Assets/BGimage.jpg");

  maggelan = loadImage("Assets/Maggelan.jpg");
  pirate = loadImage("Assets/Math Image.jpg");
  math = loadImage("Assets/Pirate image.jpg");
  pop = loadImage("Assets/Population.jpg");
  qm = loadImage("Assets/quizmaster.png ");
  }


function setup() {
  createCanvas(windowWidth,windowHeight);

  quizMaster = createSprite(width-100,height-100,10,10);
  quizMaster.addImage(qm);
  quizMaster.scale = 0.8;

 // timer();
  
  scoreText = createElement("h2")
  scoreText.position(50,50);

  timerText = createElement("h2");
  timerText.position(width/2,50);

  //question1
question1();



}



function draw() {
  background(bg);  
  timer();

  scoreText.html(`Score=${score}`)
  timerText.html(`Timer = ${time}`)
  
  
  


  drawSprites();


}

function timer(){

  setInterval(updatecountdown,1000)
}

function updatecountdown(){
  var m = Math.floor(time/60)
  var sec = time%60
  time = time -1
  console.log(time)
timerText.html(`Timer = ${time}`)
  
}


function rightAns1(){
  //console.log("I am here")
  button1.class("change");
  score+= 5
  console.log(score)
  scoreText.html(`Score=${score}`)

}
function rightAns2(){
  //console.log("I am here")
  button2.class("change");
  score+= 5
  console.log(score)
  scoreText.html(`Score=${score}`)

}
function rightAns3(){
  //console.log("I am here")
  button3.class("change");
  score+= 5
  console.log(score)
  scoreText.html(`Score=${score}`)

}

function rightAns4(){
  //console.log("I am here")
  button4.class("change");
  score+= 5
  console.log(score)
  scoreText.html(`Score=${score}`)

}
function wrongAns1(){
  button1.class("wrong");
  score-= 5
  scoreText.html(`Score=${score}`);

  if(score < 0){
    score = 0
  }
  //question2();
   }

function wrongAns2(){
  button2.class("wrong");
  score-= 5
  scoreText.html(`Score=${score}`);

  if(score < 0){
    score = 0
  }

}

function wrongAns3(){
  button3.class("wrong");
  score-= 5
  scoreText.html(`Score=${score}`);

  if(score < 0){
    score = 0
  }

}

function wrongAns4(){
  button4.class("wrong");
  score-= 5
  scoreText.html(`Score=${score}`);

  if(score == -5){
    score = 0
  }

}

function question1(){
  //question
  q1 = createElement("h2");
  q1.position(width/2-300,height/2-75);
  q1.class("textColor")
  q1.html("Question 1 - Who is the current CEO of google?")

  //image
  q1Img = createImg("Assets/Google image.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("Bill Gates")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("Tim cook")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(wrongAns2);

  button3 = createButton("Sundar Pichai")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(question2);

  button4 = createButton("Elon Musk")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}

function question2(){
  q1Img.hide();
  q1.position(width/2-670,height/2-75);
  q1.html("Question 2 -The hammer and sickle is one of the most recognisable symbols of which political ideology?")

  //image
  q2Img = createImg("Assets/download.png");
  q2Img.position(width-350,30);
  q2Img.size(300,150);

  //options
  button1 = createButton("Individualist anarchism")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("Communism")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(rightAns2);

  button3 = createButton("Capitalism")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(wrongAns3);

  button4 = createButton("Individualism")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);

}



