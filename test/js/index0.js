/*
 * @Author: your name
 * @Date: 2019-10-29 18:07:31
 * @LastEditTime: 2019-11-02 13:30:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\js\index.js
 */


var oUl = document.getElementsByTagName("ul")[0];
var obtn=document.getElementsByTagName ("button");
var aUl= document.getElementById("UL");
var oCheckbox=document.getElementsByClassName("Checkbox");
var oLi = oUl.getElementsByTagName("li");
var oactive= document.getElementById("active");
var ocompleted= document.getElementById("completed");
var oall= document.getElementById("all");
var oclear= document.getElementById("clear");
var oselected=document.getElementsByClassName("selected");
var oselectAll=document.getElementById("selectAll");
var ocontent= document.getElementById("content");
var ounselected=document.getElementsByClassName("");
var oInput = document.getElementsByTagName("input")[0];
var oFoot = document.getElementById("foot");
var NewInput=document.getElementsByClassName("newinput");


window.onload = function(){

    
    oInput.onkeydown = function(event) {
        var event = event || window.event;
        
        if(event.keyCode == 13 && oInput.value!="") {
            var data = oInput.value;
            addData(data);
            oInput.value = "";
            itemNumber();
            
        }
        if(oLi.length==0){
            oFoot.style.display = "none";
          }
          else{
            oFoot.style.display = "block";
          }


        for(var j=0;j<oCheckbox.length;j++){
    

          
            oCheckbox[j].addEventListener("click",function () { 
                if(this.parentNode.className=="selected"){
                    this.parentNode.className="";

                    
                    
                    
                }
                else{
                    this.parentNode.className="selected"; 
                }
                itemNumber();
            })
           
        }





        for(var i=0;i<oLi.length;i++) {
            if(oLi[i].style.display!="none")
            oLi[i].style.display="block";
           oLi[i].ondblclick =function(){
              var previousvalue = this.getElementsByTagName("span")[0].innerHTML;
              var newInput = document.createElement("input");

              this.appendChild(newInput);
              newInput.className = "newinput";
              newInput.value = previousvalue;
              this.getElementsByTagName("span")[0].innerHTML= "";
           }
        }


        

  /*       NewInput[0].addEventListener("blur",function(){
            this.parentNode.getElementsByTagName("span")[0].innerHTML=this.value;
            this.parentNode.removeChild(NewInput[0]);
          })  


         
   */   

        oactive.addEventListener("click",function(){
            for(var k=0;k<oLi.length;k++){
                if(oLi[k].className=="selected")
                    oLi[k].style.display="none";
                else 
                    oLi[k].style.display="block";
            }
            
    })

        ocompleted.addEventListener("click",function(){
            for(var k=0;k<oLi.length;k++){
                if(oLi[k].className=="selected")
                    oLi[k].style.display="block";
                else
                    oLi[k].style.display="none";
            }
        })

        oall.addEventListener("click",function(){
            for(var k=0;k<oLi.length;k++){
                    oLi[k].style.display="block";
            }
        })

        oclear.addEventListener("click",function(){
            for(var k=0;k<oselected.length;k++){
                oselected[k].parentNode.removeChild(oselected[k]);
            }
            itemNumber();
        })

        var flag=false;
        oselectAll.addEventListener("click",function () {

            if(flag){
                for(var k=0; k<oLi.length; k++){
                    oLi[k].className="";
                }
                for(var k=0;k<oCheckbox.length;k++){
                    oCheckbox[k].checked=false;
                }
                flag=false;
            }
            else{

                for(var k=0;k<oLi.length;k++){
                    oLi[k].className="selected";
                }
                for(var k=0;k<oCheckbox.length;k++){
                    oCheckbox[k].checked=true;
                }
                flag=true;
            }
            itemNumber();

          })



}

    NewInput[0].addEventListener("keydown",function(event){
    var event = event || window.event;
    if(event.keyCode == 13) {
      NewInput[0].parentNode.getElementsByTagName("span")[0].innerHTML=NewInput[0].value;
      NewInput[0].parentNode.removeChild(NewInput[0]);
      
    }   
   })  



}

oFoot.style.display = "none";


function addData(data){
    var createLi = document.createElement("li");
    var createBtn = document.createElement("button");
    var createSpan = document.createElement("span");
    var createCheckbox = document.createElement("input");

    createCheckbox.type = "checkbox";
    createCheckbox.className = "Checkbox";
    createSpan.innerHTML = data;
    createLi.appendChild(createCheckbox);
    createLi.appendChild(createSpan);
    createLi.appendChild(createBtn);
    createBtn.className = "delete";
    createLi.className = "";

    oUl.appendChild(createLi);

    for(var i=0; i<obtn.length; i++){
        obtn[i].onclick=function() 
        {
          aUl.removeChild(this.parentNode);
          itemNumber();
        }

   }


   
}

for(var j=0;j<oCheckbox.length;j++){
    
    oCheckbox[j].addEventListener("click",function () { 
        if(this.parentNode.className=="selected"){
            this.parentNode.className="";
        }
        else{
            this.parentNode.className="selected"; 
        }
    })
    itemNumber();
}

function itemNumber() { 
    var a = oLi.length-oselected.length;
    if(a>1){
        ocontent.innerHTML=(a+' items left');
    }
    else {
        ocontent.innerHTML=(a+' item left');
    }
 }