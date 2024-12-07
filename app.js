let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const choices= document.querySelectorAll(".choice");
const drawGame=()=>{
    //console.log("Game was Draw");
    msg.style.backgroundColor = "#081b31";
}
    
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIndex=Math.floor(Math.random()*3);
    return options[ranIndex];
}
const msg=document.querySelector("#msg");
const showWinner=(userWin, userChoice, CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
      //  console.log("You Win");
        msg.innerText=`You Win! ${userChoice} beats ${CompChoice}`;
       // msg.style.backgroundColor="green";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        //console.log("you Loose");
        msg.innerText=`You Loose! ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
   // console.log("userChoice = ",userChoice);
    const CompChoice=genCompChoice();
    //console.log("CompChoice = ",CompChoice);
    // generate computer choices
    if(CompChoice===userChoice){
        drawGame();
        msg.innerText="Game Draw! Play Again";
    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin=CompChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin=CompChoice==="scissors"?false:true;
        }else{
            userWin=CompChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice);

    }
    
}


choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
    //    console.log("choice was clicked");
        playgame(userChoice)
    });  
 });