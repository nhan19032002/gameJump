
var character = document.getElementById("character");
var block = document.getElementById("block");
var gameOver = document.getElementById("gameOver");
var start = document.getElementById("start");
var scoreSpan = document.getElementById("scoreSpan");
var scoreOver = document.getElementById("scoreOver");
var counter= 0;

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
document.addEventListener('click', startGame)
function startGame() {
    game = 'start';
    block.style.animation = "block 1s infinite linear";
    gameOver.style.display = 'none';
    start.style.display = 'none';
}

function gamePlay() {
    counter++;
    scoreSpan.innerHTML = Math.floor(counter/250);
}

function Over() {
    game = 'endGame';
    block.style.animation = 'none';
    gameOver.style.display = 'block';
    scoreOver.innerHTML = Math.floor(counter/250);
    counter=0;
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        Over();
    }else if(game == 'start' ){
        gamePlay();
    }
});
