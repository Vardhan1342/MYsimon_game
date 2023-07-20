

var btnscolor=["red" , "blue", "green","yellow"];
var gamepattern=[];
var userclickedpattern=[];
started=false
level=0

 $(".btns").click(function(){
    var userchosencolor=$(this).attr("id");
    userclickedpattern.push(userchosencolor);
    playsound(userchosencolor);
    animatepress(userchosencolor);
    checkanswer(userclickedpattern.length-1)
 })

 $(".start-btns").click(function(event)
 { if(!started){
 $("#level-title").text("level "+ level)

   nextSquence();
   started=true;
 }
    
 })

function playsound(name)
{

    
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}


 function nextSquence()
 {
   userclickedpattern=[];
   level=level+1
 $("#level-title").text("level "+ level)
    var x=Math.floor(Math.random()*4);

var randomcolor=btnscolor[x];
 gamepattern.push(randomcolor)
 $("#" + randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
 playsound(randomcolor);
 

}

function animatepress(currentkey)

{
    
    $("#" +currentkey).addClass("pressed");
    setTimeout(function(){
       $("#" +currentkey).removeClass("pressed");
    },100);
}

function checkanswer(currentLevel)
{
   if (gamepattern[currentLevel] ===  userclickedpattern[currentLevel]) {
      if ( userclickedpattern.length === gamepattern.length){
        setTimeout(function () {
          nextSquence();
        }, 1000);
      }
    } else {
      playsound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function startOver()
{
   started=false;
   level=0;
   gamepattern=[];
}