var bow , arrow,  scene;

var bowImage, arrowImage, red_balloonImage, backgroundImage;

var balaoazul, balaoverde, balaorosa;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  
  bowImage = loadImage("bow0.png");
  
  red_balloonImage = loadImage("red_balloon0.png");

  balaoazul = loadImage("blue_balloon0.png");

  balaoverde = loadImage("green_balloon0.png");

  balaorosa = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
   
}

function draw() {
 background(0);
  // movendo o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //movendo o arco
  bow.y = World.mouseY
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createArrow();
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 1) {
    if (select_balloon == 1) {
      redBalloon();

   } else if (select_balloon == 2) {
      balaoazulfuncao();

    } else if(select_balloon == 3){
      balaoverdefuncao();

    } else if(select_balloon == 4){
      balaorosafuncao();

    }

 }  
    

  drawSprites();

}


// Criando flechas para o arco
 function createArrow() {
  
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

}

function redBalloon() {
  
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function balaoazulfuncao(){

  azul = createSprite(0, Math.round(random(20, 370)), 10, 10);
  azul.addImage(balaoazul);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;

}

function balaoverdefuncao(){

  verde = createSprite(0, Math.round(random(20, 370)), 10, 10);
  verde.addImage(balaoverde);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;

}

//prof, não sei oq aconteceu com o balao rosa, pq na hora que o programa vai rodar, aparece um pixel rosa, tentei de tudo mas nada resolveu

function balaorosafuncao(){

  rosa = createSprite(0, Math.round(random(20, 370)), 10, 10);
  rosa.addImage(balaorosa);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 1;

}