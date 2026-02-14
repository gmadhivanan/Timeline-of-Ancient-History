let startpos=0
let ofs=0;
let canvasX=800
let canvasY=400
let img;
function preload() {
  img = loadImage('World.svg');
}
function setup() {
  
  background(0)
  
  createCanvas(canvasX, canvasY);
  // load json data and store in variable test
  test = loadJSON('timeline.json')
 
}
function draw() {
  background("#F4F0D2")
  image(img, 0, 0,200,100);
  data=test.data
  textSize(32);
  text("Timeline of Ancient History",200,100)
  textSize(12);
for (let x in data) {
  let str= test.data[x]
 let split= str.split(':')
 //console.log(split[0])
  //console.log(split[0].includes('BC'))
   let dis= Math.sqrt((mouseX - ofs) ** 2 + (mouseY - (canvasY-100)) ** 2)
strokeWeight(0);
  if(dis<20){rect(ofs-100,canvasY-250,200,100) 
  text(split[1],ofs-99,canvasY-245,200,100)           
  
            strokeWeight(4);}
   circle(ofs, canvasY-100, 75)
  text(split[0],ofs-30,canvasY-120,75,75)
  ofs=ofs+100
}
  text("Hover over a date to learn more", 630,50,100,100)

if(mouseX<100){startpos=startpos+10}
else if(mouseX>canvasX-100){startpos=startpos-10}
ofs=startpos
//console.log(mouseX)

}
