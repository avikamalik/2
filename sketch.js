var num
function setup (){
  createCanvas(400,450)
  num =  prompt("Enter number")
}



function draw() {
background("black")

 for(var i = 1 ;i<11;i++) {
   fill("green")
   textSize(14)
  text(num+"*"+i+"="+num*i,50,i*40) 
 }  
}
