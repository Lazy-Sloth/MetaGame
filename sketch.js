var bubbles=[]

function setup() {
  createCanvas(1440,820)
  img1 = loadImage("https://raw.githubusercontent.com/rohlex18/MetaGame/master/Assets/page1.jpg")
  img2 = loadImage("https://raw.githubusercontent.com/rohlex18/MetaGame/master/Assets/page2.jpg")
  for (var i = 0; i < 30; i++) {
      bubbles[i] = new bubble();
  }
}
  
//GLOBAL VARIABLES
var boxCheck=0
var highScore =[0,0,0]
var mouseCheck=0
var difficulty=0
var vMax = 5+3*difficulty
var play=false
var help=false
var end=false
var opaque = 0
var r = 30 //RADIUS
var score = 0

//CLICK BOXES COORDINATES
var m = [583,   902,   999,   131,   947,   781,   1177,   403,   556,   1157,   839,   419,   468,   
         336,   573,   699,   971,   1070,   994,   381,   217,   408,   527,   851,   298,   597,   
         1004,   216,   1072,   219,   462,   673,   386,   1187,   323,   917,   999,   1118,   619,   682,   
         685,   835,   1072,   630,   218,   548,   460,   822,   217,   533,   1074,   849,   1069,   220,   
         406,   221,   523,   455,   219,   1032,   1167,   538,   925,   1199,   793,   1061,   449,   861,   
         947,   501,   402,   723,   1059,   330,   1111,   937,  1170,   1208,   638,   1118 ] //x coordinate
var n = [241,   240,   241,   278,   317,   355,   352,   393,   392,   431,   471,   508,   547,   
         583,   582,   584,   585,   583,   702,   740,   740,      816,   854,   892,   969,   1007,   
         1045,   1161,   1161,   1198,   1200,   1197,   1237,   1236,   1272,   1313,   1309,   1314,   
         1350,   1509,   1741,   1737,   1623,   1815,   1854,   1967,   1965,   1971,   2010,   2006,   
         2047,   2163,   2160,   2280,   2280,   2317,   2318,   2354,   2355,   2352,   2354,   2395,   
         2550,   2548,   2586,   2588,   2625,   2663,   2662,   2778,   2777,   2777,   2818,   2934,   
         2934,   3047,   3083,   3238,   3238,   3278 ] //y coordinate
var o = [] //width
var p = [] //height
var q = [] //check if box is clicked

for (i=0 ; i<m.length ; i++)  {
  m[i]=m[i]-5
  n[i]=n[i]-5
  o[i] = 90;
  p[i] = 30;
  q[i] = 0;
}

function homeScreen() {
  createCanvas(1440,820)
  noStroke()
  if (opaque>100)  {
    stroke(256-opaque)
    strokeWeight(5)
  }
  
  fill(255,255,255,opaque)
  rect(0,0,width,height)
  fill (200, 51, 0,opaque)
  if (mouseInBox(width*0.5-60,height*0.5-20,120,40)===true) {
    fill(51,0,200,opaque)
  }
  rect(width*0.5-60,height*0.5-20,120,40,20)
  fill (200, 51, 0,opaque)
  if (mouseInBox(width*0.5-60,height*0.6-20,120,40)===true) {
    fill(51,0,200,opaque)
  }
  rect(width*0.5-60,height*0.6-20,120,40,20)
  fill (200, 51, 0,opaque)
  rect(width*0.5-333,height*0.3-60,730,80,20)
  fill(255,255,250,opaque)
  textSize(72)
  textFont("Chiller")
  text("Welcome to Meta-Game",width*0.5-325,height*0.3)
  textSize(36)
  text("PLAY",width*0.5-50,height*0.5-20,80,50)
  text("HELP",width*0.5-45,height*0.6-20,80,40)
  for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
  }
  if (opaque < 200)  {
    fill(0)
    textSize(20)
    text("Scroll the Mouse Wheel/Pad...",5,20)
  }
}

function helpScreen() {
  
  fill(255,255,255);
  rect(0,0,width,height);
  fill(20,12,25,opaque);
  textSize(36);
  textFont("Chiller");
  textAlign(CENTER)
  text("Earn points by clicking on the 6-Letter words!",0.5*width,50);
  text("However... DON'T LET YOUR CURSOR COLLIDE WITH THE BUBBLES!!!",0.5*width,100);
  text("Even once the bubbles have faded out, a collision will cause you to lose the game.",0.5*width,150);
  text("SCROLL the mouse wheel/pad to keep the bubbles in view.",0.5*width,200);
  text("Click on one of the three levels below to start the game.",0.5*width,250);
  text("Press any key to return to the main menu.",0.5*width,300);
  textAlign(LEFT)
  text("Highscore: " + highScore[1],width*0.5-90,height*0.6 + 70)
  text("Highscore: "+ highScore[2],width*0.5-90+500,height*0.6 + 70)
  text("Highscore: " + highScore[0],width*0.5-90-500,height*0.6 + 70)
  //SCORES/DIFFICULTY
  strokeWeight(5)
  stroke(256-opaque)
  fill (200, 51, 0,opaque)
  if (mouseInBox(width*0.5-85,height*0.6-20,175,40)===true) {
    fill(51,0,200,opaque)
  }
  rect(width*0.5-85,height*0.6-20,175,40,20)
  fill (200, 51, 0,opaque)
  if (mouseInBox(width*0.5-85+500,height*0.6-20,175,40)===true) {
    fill(51,0,200,opaque)
  }
  rect(width*0.5-85+500,height*0.6-20,175,40,20)
  fill (200, 51, 0,opaque)
  if (mouseInBox(width*0.5-85-500,height*0.6-20,175,40)===true) {
    fill(51,0,200,opaque)
  }
  rect(width*0.5-85-500,height*0.6-20,175,40,20)
  fill(255,255,250,opaque)
  text('LEVEL 1',width*0.5-72-500,height*0.6-20,190,40)
  text('LEVEL 2',width*0.5-72,height*0.6-20,190,40)
  text('LEVEL 3',width*0.5-72+500,height*0.6-20,190,40)
  //END SCORES
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

function endScreen()  {
  createCanvas(1440,820)
  fill(255,255,255,opaque)
  rect(0,0,width,height)
  if (opaque < 200)  {
    stroke(1)
    fill(0)
    textSize(20)
    text("Scroll the Mouse Wheel/Pad...",5,20)
  }
  textAlign(CENTER)
  fill(255-opaque)
  textSize(40)
  text('You got a score of ' + score + ' on level ' + int(difficulty+1),width*0.5,height*0.3)
  text('Press any key to try again',width*0.5,height*0.4)
  text('Level '+ int(difficulty+1)+' Highscore: '+highScore[difficulty],width*0.5,height*0.5)
  fill (200, 51, 0,opaque)
  if (mouseInBox(width*0.5-60,height*0.6-20,120,40)===true) {
    fill(51,0,200,opaque)
  }
  if (opaque>30)  {
    stroke(1)
    strokeWeight(5)
    rect(width*0.5-60,height*0.6-20,120,40,20)
    fill(255,255,255,opaque)
    textSize(36)
    text("HOME",width*0.5-35,height*0.6-20,80,50)
  }
}

function bubble() {
    this.x=-100
    this.y=-100
    this.reset = function() {
      //if  (play===false) {
      this.x=-100
      this.y=-100
      //}
    }  
    this.move = function()  {
      if (checkBound(this.x,this.y)===false)  {
        this.spawn = spawn()
        this.spawnX = this.spawn[0]
        this.spawnY = this.spawn[1]
        this.direction = move(this.spawnX,this.spawnY)
        this.vX = this.direction[0]
        this.vY = this.direction[1]
        this.x = this.spawnX + this.vX
        this.y = this.spawnY + this.vY
        this.a=random(0,255)
      } else {
        this.x = this.x + this.vX
        this.y = this.y + this.vY
      }
    }
    this.show = function() {
      noStroke()
      this.b=this.x/width * 255
      this.c=this.y/height * 255
      fill(this.a,this.b,this.c,opaque/256*135)
      ellipse(this.x,this.y,2*r,2*r)
    }
    this.collision = function() {
      if (sq(this.x-mouseX)+sq(this.y-mouseY)<sq(r))  {
        opaque=0
        
        if (score>highScore[difficulty])  {
          highScore[difficulty] = score
        }
        for (var i = 0; i < m.length; i++)  {
          q[i]=0
        }
        end=true
        play=false
      }
      
    }
}

function move(x1,y1)  {
  var centerX = 0.5 * width;
  var centerY = 0.5 * height;
  var velX = 0
  var velY = 0
  var angle = 0
  if (x1-centerX>0 && y1-centerY>0) {
    angle=random(PI+0.3,1.5*PI-0.3)
  } else if (x1-centerX>0 && y1-centerY<=0) {
    angle=random(0.5*PI+0.3,PI-0.3)
  } else if (x1-centerX<=0 && y1-centerY>0) {
    angle=random(1.5*PI+0.3,2*PI-0.3)
  } else {
    angle=random(0+0.3,0.5*PI-0.3)
  }
  velX=vMax*cos(angle)
  velY=vMax*sin(angle)
  var array = [velX,velY];
  return (array)
}

function spawn()  {
  var check = random()
  var spawnX1 = 0
  var spawnY1 = 0;
  if (check >= 0 && check <= 0.25) {
    spawnX1 = 0;
    spawnY1 = random(0,height);
  }
  if (check > 0.25 && check <= 0.5) {
    spawnX1 = width;
    spawnY1 = random(0,height);
  }
  if (check > 0.5 && check <= 0.75) {
    spawnX1 = random(0,width);
    spawnY1 = 0;
  }
  if (check > 0.75 && check <= 1) {
    spawnX1 = random(0,width);
    spawnY1 = height;
  }
  var array = [spawnX1,spawnY1];
  return (array)
}

function checkBound(x1,y1)  {
  if (x1>=-5 && x1<=width+5 && y1>=-5 && y1<=height+5) {
    return true;
  } else {
    return false;
  }
}

function mouseInBox(x1, y1, w, h)  {
  if (mouseX>x1 && mouseX<x1+w && mouseY>y1 && mouseY<y1+h)  {
    return true
  } else  {
    return false
  }
}


function draw() {
  if (opaque>0 && play===true) {
    opaque=opaque-2.5
  }
  if (play===true)  {
    createCanvas(1440,3362)
    image(img1,0,0)
    image(img2,0,1702)
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
      bubbles[i].collision();
    }
    //SETTING THE CLICKBOXES
    for (var i = 0; i < m.length; i++)  {
      if (q[i]===0) {
        fill(0,0,0,0)
        rect(m[i],n[i],o[i],p[i])
      } else {
        fill(12,12,250,opaque*0.6)
        rect(m[i],n[i],o[i],p[i])
      }
      
    }
    
  } 
  
  if (play===false && help===false && end===false) {
    homeScreen()
  }
  if (help===true && play===false)  {
    helpScreen()
  }
  if (end===true && play===false)  {
    endScreen()
  }  
}  

function mouseClicked() {
  //Setting Difficulty
  if (mouseInBox(width*0.5-85-500,height*0.6-20,175,40) === true && help === true) {
    difficulty=0
  }
  if (mouseInBox(width*0.5-85,height*0.6-20,175,40)===true && help === true) {
    difficulty=1
  }
  if (mouseInBox(width*0.5-85+500,height*0.6-20,175,40)===true && help === true) {
    difficulty=2
  }
  if (play === false)  {
    vMax = 5+2*difficulty
    bubbles=[]
    for (var i = 0; i < 20+10*difficulty; i++) {
      bubbles[i] = new bubble();
    }
  }
  if (mouseInBox(width*0.5-85-500,height*0.6-20,175,40) === true && help === true) {
    play=true
    help=false
  }
  if (mouseInBox(width*0.5-85,height*0.6-20,175,40)===true && help === true) {
    play=true
    help=false
  }
  if (mouseInBox(width*0.5-85+500,height*0.6-20,175,40)===true && help === true) {
    play=true
    help=false
  }
  //End Difficulty Settings
  if (mouseInBox(width*0.5-40,height*0.5-20,100,40)=== true && play === false) {
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].reset();
      play=true
      score=0
    }
  }
  if (mouseInBox(width*0.5-40,height*0.6-20,100,40) === true && play === false)  {
    help=true;
  }
  //Score process
  if (play===true)  {
    for (i = 0; i<m.length; i++)  {
      if (mouseInBox(m[i],n[i],o[i],p[i])===true && q[i]===0) {
        score=score+1
        q[i]=1
      }
    }
  //End score process
  }
  if (mouseInBox(width*0.5-60,height*0.6-20,120,40)=== true && end ===true)  {
    play=false
    end=false
    help=false
    opaque=255
  }
  print(score)
  //if (play===true)  {
    //m[mouseCheck]=mouseX
    //n[mouseCheck]=mouseY
    //mouseCheck=mouseCheck+1
  //}
}

function keyPressed() { 
  if (help===true) { 
    help=false
  }  
  if (end===true)  {
    end=false
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].reset();
    }
    play=true
    score=0
    opaque=250
  }
  
  for (var i = 0; i < m.length; i++)  {
    q[i]=0
  }
  if (score>highScore[difficulty])  {
    highScore[difficulty] = score
    
  }
    
  //if (play===true)  {
   // play=false;
  //}
  //print(m)
  //print(n)
  
}

function mouseWheel() {
  if (opaque<256) {
    opaque=opaque+(5-difficulty)*2
  }
}



