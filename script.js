//Declare Variables

let h1 = document.querySelector('h1');
let p1Button = document.querySelector('#playerOne');
let p2Button = document.querySelector('#playerTwo');
let p1Score = document.querySelector('#playerOneScore');
let p2Score = document.querySelector('#playerTwoScore');
let highScore = document.querySelector('#scoreLimit');
let resetButton = document.querySelector('#reset');
let gameOverDisplay = document.querySelector('#gameOver');

let highScoreValue = 11; 
let p1ScoreValue = 0; 
let p2ScoreValue = 0;

//Listen for new highScoreValue
highScore.addEventListener('change', function () {
    highScoreValue = Number(highScore.value);
});

//increment p1 / p2 scores
//check if highScoreValue met - if so STOP
p1Button.addEventListener('click', function () {
    if (p1ScoreValue === highScoreValue || p2ScoreValue === highScoreValue) {
        stop()
    } else {
        p1ScoreValue ++;   
        p1Score.textContent = p1ScoreValue; 
        checkHS()
    }
});
p2Button.addEventListener('click', function () {
    if (p2ScoreValue === highScoreValue || p1ScoreValue ===highScoreValue) {  
        stop()    
    } else { 
        p2ScoreValue ++;   
        p2Score.textContent = p2ScoreValue;
        checkHS() 
    }
});

//Check if highScore values are met. Display Game over values if true

function checkHS() {
if (p1ScoreValue === highScoreValue ) {
    p1Score.style.color = 'green';
    h1.classList.add('winner'); 
    gameOverScroll()
}else if (p2ScoreValue === highScoreValue ) {
    p2Score.style.color = 'green';
    h1.classList.add('winner'); 
    gameOverScroll()
}
};

resetButton.addEventListener('click', function () {
    highScoreValue = 11; 
    p1ScoreValue = 0; 
    p2ScoreValue = 0;
    p1Score.style.color = 'black';
    p2Score.style.color = 'black';
    h1.classList.remove('winner')
    p1Score.textContent = p1ScoreValue;
    p2Score.textContent = p2ScoreValue;
    highScore.value = 5;
    gameOverDisplay.textContent = ""
});


// Scroll Game Over when game is complete
let i = 0; 
let speed = 100; 
let gameOver = "Game Over"

function gameOverScroll() {
    if (i<gameOver.length) {
        gameOverDisplay.textContent += gameOver.charAt(i);
        i++;    
        console.log(gameOver.charAt(i));
      
    }
    setTimeout(gameOverScroll, speed);
};