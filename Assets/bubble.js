var bubble =  {
  positionX1: 300,
  positionY1: -0.5,
  moveX: 0,
  moveY: 0
  
}




function bubble() {
  if (checkBound(bubble.positionX1,bubble.positionY1)===false) {
    var spawnArray = spawn()
    var spawnX1=ceil(spawnArray[0])
    var spawnY1=ceil(spawnArray[1])
    var moveArray = move(spawnX1,spawnY1)
    bubble.moveX=moveArray[0]
    bubble.moveY=moveArray[1]
    bubble.positionX1=spawnX1
    bubble.positionY1=spawnY1
    text(bubble.positionX1,10,10)
    text(bubble.positionY1,10,30)
  } else {
    image(img,0,0)
    bubble.positionX1=bubble.positionX1+moveX
    bubble.positionY1=bubble.positionY1+moveY
    fill(232,11,122,50)
    ellipse(bubble.positionX1,bubble.positionY1,40,40)
    text(bubble.positionX1,40,10)
    text(bubble.positionY1,40,30)
  }
}

function draw() {
  bubble()
}

    
    
    