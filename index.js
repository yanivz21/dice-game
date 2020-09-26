







var scoreP1=0;
var scoreP2=0;
var nameP1;
var nameP2;

document.querySelector('.b2').style.visibility = 'hidden'


document.querySelector('.b1').onclick = newGame;

document.querySelector('.b2').onclick = playAgain;







function newGame(){

      scoreP1=0;
      scoreP2=0;
       nameP1=prompt("palyer 1 : what's is your name?",'palyer 1');
       nameP2=prompt("palyer 2 : what's is your name?",'player 2');
      document.querySelector("#textPlayer1").innerHTML=nameP1;
      document.querySelector("#textPlayer2").innerHTML=nameP2;
      document.querySelector('.b2').style.visibility = 'visible';
      document.querySelector('.b1').style.marginLeft = "740px";






      playAgain()


    }


    function playAgain(){
    var diceP1 = Math.floor(Math.random()*6+1)
    var diceImgP1= "dice"+diceP1+".png"

    document.querySelector(".p1").setAttribute("src",diceImgP1);

    var dicP2 = Math.floor(Math.random()*6+1)
    var diceImgP2="dice"+dicP2+".png"

    document.querySelector(".p2").setAttribute("src",diceImgP2);

    if(diceP1>dicP2){
      document.querySelector("h2").innerHTML= nameP1+' is the winner! 👍';
      scoreP1++;
      document.querySelector(".cubeP1").classList.add("winner")
      document.querySelector("#textPlayer2").innerHTML=nameP2+":&nbsp;&nbsp;"+scoreP2+"&nbsp;&nbsp;&nbsp;"+"😡"
      document.querySelector("#textPlayer1").innerHTML=nameP1+":&nbsp;&nbsp;"+scoreP1+"&nbsp;&nbsp;&nbsp;"+"😆"
      document.querySelector(".cubeP2").classList.remove("winner")



    }else if (diceP1<dicP2) {
      document.querySelector("h2").innerHTML=nameP2+' is the winner! 👍';
      scoreP2++;
      document.querySelector(".cubeP2").classList.add("winner")
      document.querySelector("#textPlayer1").innerHTML=nameP1+":&nbsp;&nbsp;"+scoreP1+"&nbsp;&nbsp;&nbsp;"+"😡"
      document.querySelector("#textPlayer2").innerHTML=nameP2+":&nbsp;&nbsp;"+scoreP2+"&nbsp;&nbsp;&nbsp;"+"😆"
      document.querySelector(".cubeP1").classList.remove("winner")


    }else{
      document.querySelector("h2").innerHTML='Drew!';
      document.querySelector(".cubeP1").classList.remove("winner")
      document.querySelector(".cubeP2").classList.remove("winner")
      document.querySelector("#textPlayer1").innerHTML=nameP1+":&nbsp;&nbsp;"+scoreP1+"&nbsp;&nbsp;&nbsp;"+"🤨"
      document.querySelector("#textPlayer2").innerHTML=nameP2+":&nbsp;&nbsp;"+scoreP2+"&nbsp;&nbsp;&nbsp;"+"🤨"



    }


  }
