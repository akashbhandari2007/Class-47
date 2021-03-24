var spaceship, missiles;
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12;

function setup() {

  createCanvas(1200,600);

  spaceship = createSprite(600, 550, 50, 50);
  //enemygroup = new Group();

}

function draw() {
  background(0);
  if(keyDown("space")){
    missiles = createSprite(700, 550, 10, 40);
    missiles.x = spaceship.x;
    missiles.y = spaceship.y;
    missiles.velocityY = -6;

  }
  //enemygroup.add();
  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x - 4; 
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x + 4; 
  }
  //if(missiles.isTouching(enemy1)){
   //enemy1.destroyEach();
  //}
  SpawnEnemy();
  drawSprites();
  
}

function SpawnEnemy(){
  if (frameCount % 80 === 0 ){
    var enemy1 = createSprite(600, 50, 30, 30);
    var rand = Math.round(random(1,12));
    //switch(rand){
      //case 1 :  enemy1
    //}
  }
}
