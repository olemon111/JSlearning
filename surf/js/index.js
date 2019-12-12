/*
 * @Author: your name
 * @Date: 2019-12-10 18:40:32
 * @LastEditTime: 2019-12-12 15:05:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \task4\surf\js\index.js
 */
(function(){
  var styleNode = document.createElement("style");//自己创建
  var w = document.documentElement.clientWidth/16;
  styleNode.innerHTML = "html{font-size:" + w + "px !important}";
  document.head.appendChild(styleNode);
})()
var oPerson = document.getElementById("person");
var oBody = document.getElementById("body");
var oContent = document.querySelector(".content");
var oMask = document.getElementById("mask");
var oInner = document.getElementById("inner");

window.onload = function(){
  land();
  setTimeout(surf,2000);
}

function land(){
  oPerson.className = "landAnimation";
  setTimeout(function(){
    document.getElementById("imgPerson").src="images/active/normal.gif";
  },2000);
}
function mask(){
  oMask.className = "functionmask";
  oInner.style.visibility="visible";
}
function surf(){
  mask();
  window.addEventListener("touchstart",function(){
    oMask.className = "";
    oInner.style.visibility="hidden";
    oContent.className = "move";
    oPerson.className = "surfing";
    oPerson.style.webkitAnimationPlayState = 'running';
    oContent.style.webkitAnimationPlayState = 'running';
  });
  window.addEventListener("touchend",function(){
    oContent.style.webkitAnimationPlayState = 'paused';
    oPerson.style.webkitAnimationPlayState = 'paused';
  })
}