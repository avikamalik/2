var num
function setup (){
  createCanvas(windowWidth,windowHeight)
  num =  prompt("Enter number")
}



function draw() {
background("black")

 for(var i = 1 ;i<11;i++) {
   fill("green")
   textSize(30)
  text(num+"*"+i+"="+num*i,50,i*70) 
 }  
}
