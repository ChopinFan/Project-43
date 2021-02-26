var h,m,s
var ha,ma,sa;


function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
}


function draw() {
  
  background("black");  
  
  translate(200, 200);
  rotate(-90)
  h=hour()
  m=minute()
  s=second()
  
  sa=map(s,0,60,0,360)
  ma=map(m,0,60,0,360)
  ha=map(h%12,0,12,0,360)

  push()
  rotate(sa)
  stroke("magenta")
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(ma)
  stroke("yellow")
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(ha)
  stroke("cyan")
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  
  point(0,0)
  strokeWeight(10)
  noFill()
  

  stroke("magenta")
  arc(0,0,300,300,0,sa)

  stroke("yellow")
  arc(0,0,280,280,0,ma)

  stroke("cyan")
  arc(0,0,260,260,0,ha)
 
}