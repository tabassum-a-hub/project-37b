//Create variables here
var dog ,happydog,database,foods,foodstock,Dog,Background;

function preload()
{
	//load images here
  dogimage=loadImage("images/dogImg.png")
  happydog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(300,400,50,50);
 dog.addImage(dogimage)
 dog.scale=0.1

  foodstock=database.ref ('food')
  foodstock.on("value",readStock)
  
  
}


function draw() {  
  background(46,139,87)

  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(doghappy)
}

  drawSprites();
  //add styles here

  text("Food " + "remaining " + "19",250,300)
  strokeWeight(5)
  fill ("white") 
  text("Note " + ": " + "Press " + "UP " + "_ " + "ARROW " + "Key " + "To " + "Feed " + "Drago " + "Milk " ,100,100)
  strokeWeight(5)
  fill ("white") 
}

function readStock(data){
  foods=data.val();

}

function writeStock(x){

  if(x<= 0){
    x=0
  }else{
    x=x=1;
  }

   database.ref('/').update({
     food:x
   })
}



