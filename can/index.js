/*
 * @Author: your name
 * @Date: 2019-12-16 12:57:17
 * @LastEditTime: 2019-12-16 15:33:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \can\index.js
 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 10;
var colorArray = [
  '#4CBF88',
  '#F2B134',
  '#6F4A70',
  '#FF6275',
  '#00B5C4'
]

function Ball(x,y,dx,dy,radius,color){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color =color;
  
  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  this.update = function(){
    if(this.x + this.radius > canvas.width || this.x - this.radius <0){
      this.dx = - this.dx;
    }
    this.x += this.dx;
    if(this.y + this.radius > canvas.height || this.y - this.radius <0){
      this.dy = - this.dy;
    }
    this.y += this.dy;
    this.draw();
  }
}
var ballArray = [];

for(var i = 0; i < 100; i++){
  var radius = Math.random() * 4 +2;
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;
  var color = colorArray[Math.floor(Math.random() * 5)];
  ballArray.push(new Ball(x,y,dx,dy,radius,color));
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(var b of ballArray){
    b.update();
  }
}
animate();
