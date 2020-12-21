var num
function setup (){
  createCanvas(windowWidth,windowHeight)
  num =  prompt("Enter number ✨")
}



function draw() {
background("white")

 for(var i = 1 ;i<11;i++) {
   fill("black")
   textSize(15)
  text(num+"*"+i+"="+num*i,50,i*60) 
 }  
}
