
let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMain, ImgMountain, ImgEnemy;
$(document).ready(function(){
    mapArray= [0,1,1,0,0,0,3,1,2];
    ctx= $("#mycanvas")[0].getContext("2d");

    imgMain= new Image();
    imgMain.src= "simple-rpg/images/spriteSheet.png";
    currentImgMainX=0;
    currentImgMainY=0;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };
    ImgMountain = new Image();
    ImgMountain.src = "simple-rpg/images/material.png";
    ImgEnemy= new Image();
    ImgEnemy.src= "simple-rpg/images/Enemy.png";
    ImgMountain.onload= function(){
        ImgEnemy.onload= function(){
            for(let x in mapArray){
                if(mapArray[x]==1){
                    ctx.drawImage(ImgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                }else if(mapArray[x]==3){
                    ctx.drawImage(ImgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
        }
    }; 
});

$(document).keydown(function(event){
    let targetImagMainX, targetImgMainY, targetBlock, cutImagePositionX; 
    event.preventDefault();
    console.log(event.originalEvent.code)
    switch(event.originalEvent.code){
        
        case "ArrowLeft":
            targetImgMainX=currentImgMainX-200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=175;
            break;
        case "ArrowRight":
            targetImgMainX=currentImgMainX+200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=540;
            break;
        case "ArrowUp":
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY-200;
            cutImagePositionX=355;
            break;
        case "ArrowDown":
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY+200;
            cutImagePositionX=0;
            break;
        default:
            return;
    }
    

    if(targetImgMainX<=400 && targetImgMainX>=0 &&
        targetImgMainY<=400 && targetImgMainY>=0){
            targetBlock=targetImgMainX/200+targetImgMainY/200*3;
            
    }else{
        targetBlock= -1;
       
    }
    
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);

    if(targetBlock == -1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3 ){

    }else{
        $("#talkBox").empty();
        currentImgMainX= targetImgMainX;
        currentImgMainY= targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    console.log("targetBlock:"+targetBlock);
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("抵達終點");
            break;
        case 3:
            $("#talkBox").text("發現敵人!");
                break;
    }
});