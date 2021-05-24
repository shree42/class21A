var mR,fR;
//var pokemon ;
var edges;


function setup() {
  createCanvas(800,400);
 fR= createSprite(400, 200, 150, 250);
 fR.shapeColor="green";
 fR.debug=true;
 fR.velocityX=-3;

 mR= createSprite(200, 200, 50, 50);
 mR.shapeColor="green";
 mR.debug=true;
mR.velocityX=-2;

//pokemon=createSprite(100,100,40,40);
//pokemon.shapeColor="blue";
//pokemon.debug=true;
//pokemon.velocityX=3;

edges=createEdgeSprites();

}

function draw() {
  background(0);
  
  createEdgeSprites();
  //pokemon.bounceOff(edges);
  mR.bounceOff(edges);
  fR.bounceOff(edges);
  //mR.x=mouseX;
  //mR.y=mouseY;

  console.log("Dis b/w the rects :" +(mR.x-fR.x));

  if(isTouching(mR,fR)){
    mR.shapeColor="red";
    fR.shapeColor="red";
  }else {
    mR.shapeColor="green";
    fR.shapeColor="green"
  }
 // if(isTouching(pokemon,mR)){
   // pokemon.shapeColor="purple";
    
  //}
  //else {
    //pokemon.shapeColor="cyan";
 // }

bounce(mR,fR);
//bounce(pokemon,mR);
//bounce(fR,pokemon);
  drawSprites();
}

