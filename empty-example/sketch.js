
function setup() {
  // put setup code here
    createCanvas(500,500)
    background("#FADBD8");
    
    noStroke();

    //ice cream cone
    fill(237,187,153);
    triangle(150,250,325,250,250,450);
}

function draw() {
  // put drawing code here


    

    
}


function mousePressed() {
    fill(205,97,85)
    textSize(50);
    textFont("Georgia");
    textFont(ITALIC);
    textAlign(CENTER);
    text("Enjoy",410,450);
// Ice cream sprinkles 
    
    var r = random(0, 255)
    var g = random(0, 255)
    var b = random(0, 255)
    
    
        fill(r, g, b)
    
    var randomSprinkleX = random(200, 280)
    var randomSprinkleY = random(70, 230)
    ellipse(randomSprinkleX, randomSprinkleY, 5, 5)
}
function keyTyped(){
    
    
    if (key ==="a"){
//Blue ice cream scoop
        fill(212,230,241);
        ellipse(240,220,170,170);
        fill(250,229,211);
  //Purple ice cream scoop      
    } if (key==="c") {
        
        fill(215,189,226);
        ellipse(240,70,130,130);
   //Pink ice cream scoop     
    } if (key==="b") {
       fill(245,183,177);
        ellipse(240,140,140,140); 
        
    }

}