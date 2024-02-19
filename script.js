var timer = 60;
var score = 0;
var hitrn = 0;

function incScore() {
    score += 10;
    document.querySelector("#sc").textContent = score;
}

function hitval() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer(){
    var timeInt = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `Game is Over <br> refresh to continue!!`
        }
    },1000);
}

function makebubble(){
    var clutter = "";
    for (let i = 1; i <= 168; i++) {
        var rand = Math.round(Math.random()*10);
        clutter += `<div class="bubble">${rand}</div>`    
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

document.querySelector("#pbtm").addEventListener("click",function (chacha) {
    var clknum = Number(chacha.target.textContent);
    if (clknum === hitrn) {
        incScore();
        makebubble();
        hitval();
    }
})

makebubble();
runTimer();
hitval();