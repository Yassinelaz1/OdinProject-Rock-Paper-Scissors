// RPS game
const choices = ["👊", "🖐", "✌"]
const playerchoice = document.getElementById("playerchoice")
const computerchoice = document.getElementById("computerchoice")
const displayresult = document.getElementById("displayresult")
const Pscore = document.getElementById("Pscore")
const Cscore = document.getElementById("Cscore")
let playerscore = 0;
let conputerscore= 0;


function play(player){
    const computer = choices[Math.floor(Math.random() * choices.length)]
    let result = "";

    if(player === computer){
        result = "IT'S A TIE";
    }
    else{
        switch(player){
            case  "👊":
                result = (computer === "✌") ? "YOU WIN" : "YOU LOSE";
                break;
            case  "🖐":
                result = (computer === "👊") ? "YOU WIN" : "YOU LOSE";
                break; 
            case  "✌":
                result = (computer === "🖐") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    playerchoice.textContent= `YOU: ${player}`;
    computerchoice.textContent= `COMPUTER: ${computer}`;
    displayresult.textContent = result;

    displayresult.classList.remove("greentxt", "redtxt","tietxt");

    if (result === "YOU WIN") {
        displayresult.classList.add("greentxt");
        Pscore.textContent = ++playerscore;
        

    } else if (result === "YOU LOSE") {
        displayresult.classList.add("redtxt");
        Cscore.textContent = ++conputerscore;
        
    }
    if (result === "IT'S A TIE") {
        displayresult.classList.add("tietxt");
    }
    if(playerscore=== 5){
        document.body.innerHTML = `<h1 class="full-win">YOU WIN</h1>`;

    }
    if (conputerscore=== 5){
        document.body.innerHTML = `<h1 class="full-lose">YOU LOSE</h1>`;
    }
}

document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Move the button slightly toward the cursor
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    button.addEventListener("mouseleave", () => {
        // Reset position
        button.style.transform = "translate(0, 0)";
        
        // Add the elastic effect class
        button.classList.add("elastic-effect");

        // Remove the class after animation completes (0.5s)
        setTimeout(() => {
            button.classList.remove("elastic-effect");
        }, 500);
    });
});