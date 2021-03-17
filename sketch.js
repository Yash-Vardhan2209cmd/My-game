var CaptainAmerica,CAimg;
var AIM,ArnimZola,BaronZemo,BatrocTheLeaper,Crossbones,Hydra,RedSkull;
var VillainsGroup;
var BG,bgimg;
var Logo,logoimg;
var restart,reatartimg;
var start,startimg;
var GameOver,GOimg
var gameState=PLAY;
var PLAY = 1;
var END = 0;

function preload(){
    AIM=loadImage("AiM.png");
    ArnimZola=loadImage("ArnimZola.png");
    CAimg=loadImage("CaptainAmerica2.png");
    BaronZemo=loadImage("BaronZemo.png");
    BatrocTheLeaper=loadImage("BatrocTheLeaper.png");
    Crossbones=loadImage("Crossbones.png");
    Hydra=loadImage("Hydra.png");
    RedSkull=loadImage("RedSkull.png");
    bgimg=loadImage("Background.png");
    logoimg=loadImage("Logo.png");
    startimg=loadImage("Start.png");
    GOimg=loadImage("GO.png");
    Restartimg=loadImage("Restart1.png");
}

function setup(){
createCanvas(1000,1200);
BG=createSprite(0,0,1000,1200);
BG.addImage(bgimg);

CaptainAmerica=createSprite(90,1000,3,5);
CaptainAmerica.addImage(CAimg);
CaptainAmerica.scale=0.5;

logo.createSprite(500,600,70,70);
logo.addImage(logoimg);
logo.scale=0.5;

start=createsprite(400,500,40,40);
start.addImage(startimg);
start.scale=0.5

restart=createSprite(400,500,40,40);
restart.addImage(restartimg);
restart.scale=0.5;

GameOver=createSprite(500,600,40,40);
GameOver.addImage(GOimg);
GameOver.scale=0.5;

GameOver.visible=false
restart.visible=false

VillainsGroup=new Group();

}


function draw(){
    if(mousePressedOver(start) ){
        gameState=PLAY;
        BG.velocityX=-8;
        start.visible=false;
        logo.visible=false;
        CaptainAmerica.velocityY=-16;

    }

    drawSprites();

}