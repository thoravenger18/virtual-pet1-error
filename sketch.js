//Create variables here
var database;
var dog,dogImage,happyDog;
var foodS,foodStock;


function preload()
{
  //load images here
dogImage = loadImage("images/dogImg.png");
happpyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(250,250,10,10);
  dog.addImage("happy",dogImage);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);

}
text = ("Note: Press UP_ARROW key to Feed your Dog",50,250);
  drawSprites();
  //add styles here
  textSize(30);
  fill("white");
  stroke("green");

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


