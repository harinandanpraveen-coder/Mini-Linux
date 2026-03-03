const res  = document.getElementsByName("choice");
const wincon = document.getElementById("result");
let choice;
function play(){
    for (let i=0;i<3;i++){
            if (res[i].checked)
            choice = res[i].value;
    }
    let aic = Math.floor(Math.random()*3);// 0 = rock; 1 = paper ; 2 =scissor
    if (aic === 0 && choice === "Paper"){wincon.textContent="Human wins";}
    else if (aic === 0 && choice === "Scissor"){wincon.textContent ="AI wins";}
    else if (aic === 1 && choice === "Rock"){wincon.textContent ="AI wins";}
    else if (aic === 1 && choice === "Scissor"){wincon.textContent ="Human Wins";}
    else if (aic === 2 && choice === "Rock"){wincon.textContent ="Human Wins";}
    else if (aic === 2 && choice === "Paper"){wincon.textContent ="AI Wins";}
    else {wincon.textContent ="Draw";}
} 