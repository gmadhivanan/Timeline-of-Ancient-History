# Timeline of Ancient History

## Data Source
The data was acquired from [this github page](https://github.com/sharmadhiraj/free-json-datasets/blob/master/docs/history-culture/timeline_of_ancient_history.jsonhttps://github.com/sharmadhiraj/free-json-datasets/blob/master/docs/history-culture/timeline_of_ancient_history.json). It is a simple json that contains a data object with multiple strings. Each string has a date and a description. In an ideal world, each data element would have a separate property for date, description, as well as rough lat/long.

## The Code

```
let startpos=0
let ofs=0;
let canvasX=800
let canvasY=400
function setup() {
  background(0)
  createCanvas(canvasX, canvasY);
  // load json data and store in variable test
  test = loadJSON('timeline.json')
 
}
function draw() {
  background("#F4F0D2")
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

if(mouseX<100){startpos=startpos+10}
else if(mouseX>canvasX-100){startpos=startpos-10}
ofs=startpos


}
```
## The Result
[ The resulting output](https://editor.p5js.org/gmadhivanan/full/RQ_6lGWbD) is a series of circles that scrolls as you move to the edge of the canvas. If you hover over a circle a block of text pops up that provides a description of what happened on that date that is defined in the circle.

