//variable declaration
var cnv=document.getElementById("canvas");
var cnt=cnv.getContext("2d");
 
var spox=100;
var spoy=100;
var npox=0;
var npoy=0

var fpox=200;
var fpoy=200;


var snaketail=[];
var snakesize=1;

var score=0;


window.onload=function(){
     game =setInterval(maingame,300);


}


function maingame(){


    //game area creation

    cnt.fillStyle="blue";
cnt.fillRect(0,0,400,400);


for(cl=0;cl<=400;cl +=20)
{
    cnt.moveTo(cl,0);
cnt.lineTo(cl,400);
cnt.stroke();

}
for(rl=0;rl<=400;rl +=20)
{
    cnt.moveTo(0,rl);
cnt.lineTo(400,rl);
cnt.stroke();

}
if(spox>=400 ){
    spox=0;

}




//for snake continous movement

spox += npox;
spoy += npoy;




if(spox<0){
    spox=380;

}
if(spoy>=400){
    spoy=0;

}
if(spoy<0){
    spoy=380;

}






//snake and fruit creation
cnt.fillStyle="red";
//cnt.fillRect(spox,spoy,20,20);
for(i=0;i<snaketail.length;i++)
{
    cnt.fillRect(snaketail[i].spox,snaketail[i].spoy,20,20);
    if(spox ==snaketail[i].spox && spoy ==snaketail[i].spoy && snakesize>1 ){
        document.getElementById("status").innerHTML="GAME OVER";
        clearInterval(game);

    }

    
}
cnt.fillStyle="yellow";
cnt.fillRect(fpox,fpoy,20,20);





//if snake bite fruit

if(spox==fpox && spoy==fpoy){
    fpox=Math.floor(Math.random()*20)*20;
    fpoy=Math.floor(Math.random()*20)*20;
    snakesize +=1;
    document.getElementById("score").innerHTML=score += 10;

}
snaketail.push({spox,spoy});

if(snaketail.length>snakesize)
{
    snaketail.shift();
}








}





document.addEventListener("keydown",function(e){




switch(e.keyCode)  {
    case 37:
        npox -=20;
        npoy =0;
        break;

        case 38:
            npoy -=20;
            npox =0;
            break;

            case 39:
                npox +=20;
                npoy=0;

                break;

                case 40:
                    npoy +=20;
                    npox=0;
                    break;
            
        
    

}  
})



