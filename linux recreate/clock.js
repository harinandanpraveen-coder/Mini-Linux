const timer = document.getElementById("timer");
let gameover = false;
let bombdefused = false;
let code = "";
let interval;

function time() {
    let value = timer.textContent;
    let nval = Number(value);
    if (nval <= 0) {
        clearInterval(interval);
        alert("Boom!");
        return;
    }
    timer.innerText = (nval - 1);
    playSound();
}

function intman() {
    interval = setInterval(time, 1000);
    gencode();
    
}
function playSound() {  
    const audio = new Audio('ticking-bomb-90319.mp3');
    audio.play().catch(error => {
      console.error("Audio play failed:", error);
    });
  }
  function boom() {  
    const audio = new Audio('mixkit-explosion-in-battle-2809.wav');
    audio.play().catch(error => {
      console.error("Audio play failed:", error);
    });
  }
function gencode() {
    code = "";
    for (let i = 1; i <= 7; i++) {
        code += (Math.floor(Math.random() * 9) + 1);
    }
    alert("Defuse code: " + code);
    return code;
}

function verify() {
    const input = document.getElementById("usi").value;

    if (input === code) {
        bombdefused = true;
        clearInterval(interval);
        alert("Bomb disarmed!");
    } else {
        boom();
        alert("Boom");
    }
}
const buttons = document.querySelectorAll("#bomb-code button");
const inputField = document.getElementById("usi");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (inputField.value.length < 7) { 
            inputField.value += button.textContent;
        }
    });
});

const clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.addEventListener("click", () => {
    inputField.value = "";
});
document.body.appendChild(clearButton);
