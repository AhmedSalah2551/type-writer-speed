let btn = document.querySelector("button");
let inp = document.querySelector(".inp");
let showList = document.querySelector(".show");
let level = document.querySelector(".level");
let spanSeconds = document.querySelector(".spanSeconds");
let theWord =document.querySelector(".theWord h1");
let gameOver = document.querySelector(".gameover");
let winner = document.querySelector(".winner");
let points = document.querySelector(".correct");
let total = document.querySelector(".score .total .length");
let timeLeft = document.querySelector(".spanLeft");

// create array of words
let normal =
[
    "ahmed",
    "mohamed",
    "ali",
    "sara"
]
// set instructions
level.innerHTML="normal";
spanSeconds.innerHTML="3";

// minding paste wordsd on input filed
inp.onpaste=function(){
    return false;
}

total.innerHTML=normal.length;
points.innerHTML=0;

// onclick function
btn.onclick=function(){
    this.remove();
    inp.focus();
    generate();
}

// create upcoming words
function generate(){
    let randWord = normal[Math.floor(Math.random() * normal.length)];
    let index =normal.indexOf(randWord);
    normal.splice(index,1);
    theWord.innerHTML=randWord;

    showList.innerHTML='';
    
    for(i=0;i<normal.length;i++){
        let span = document.createElement("span");
        span.classList.add("word");
        span.innerHTML=normal[i];
        showList.append(span);
    }
    timer();
}

function timer() {
    timeLeft.innerHTML = 3;
    let start = setInterval(() => {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML == 0) {
        // Stop Timer
        clearInterval(start);
        // Compare Words
        if (theWord.innerHTML.toLowerCase() === inp.value.toLowerCase()) {
          // Empty Input Field
        inp.value = '';
          // Increase Score
        points.innerHTML++;
        if (normal.length > 0) {
            // Call Generate Word Function
            generate();
        } else {
            winner.classList.add("display");
            // Remove Upcoming Words Box
            showList.remove();
        }
        } else {
        gameOver.classList.add("display");
        }
    }
    }, 1000);
}