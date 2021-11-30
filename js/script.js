/**
 *  Variabler
 */
let gameSounds = ["audio/endgamefail.mp3","audio/endgamesuccess.mp3","audio/failure.mp3", "audio/success.mp3"];
let questions = ["Vad är 1 + 1?", "Vad heter Ålands högsta berg?"];
let firstAnswer = ["3", "Banan"];
let secondAnswer = ["2","Österrike"];
let thirdAnswer = ["4", "Orrdalsklint"];

let gameScore = 0;
let question_nr = 0;

let current_step = 1;
let total_questions = questions.length;

let answerButton_1 = document.getElementById('answer1');
let answerButton_2 = document.getElementById('answer2');
let answerButton_3 = document.getElementById('answer3');
let restartButton = document.getElementById('restart');

let audioPlayer = document.getElementById('audioPlayer');

let gameBox = document.getElementById('gameBox');
let resultBox = document.getElementById('scoreBox');
let finalScore = document.getElementById('finalScore');
let message = document.getElementById('message');
let question = document.getElementById('question');

/**
 * Event Listener för att lyssna på knapp tryckning 
 * Skickar in svars nummer
 * som parameter till funktionen answer
 */
answerButton_1.addEventListener('click', () => answer(1));
answerButton_2.addEventListener('click', () => answer(2));
answerButton_3.addEventListener('click', function() {
    answer(3);
});

restartButton.addEventListener('click',restartTheGame);

/**
 *  Initialiserar spelet och lägger till värden till svars knapparna och första fråga.
 *  Och uppdaterar spelet efter hand 
 */
function theGame() {
    question.innerHTML = questions[question_nr];
    answerButton_1.innerHTML = firstAnswer[question_nr];
    answerButton_2.innerHTML = secondAnswer[question_nr];
    answerButton_3.innerHTML = thirdAnswer[question_nr];

}

/**
 *  Starta om spelet när spelet är slut
 */
function restartTheGame() {
    question_nr = 0;
    gameScore = 0;
    current_step = 1;
    gameBox.style.display = 'block';
    resultBox.style.display = 'none'; 
    theGame();
}

/**
 * Visar slut resultatet
 */
function endGame() {
    console.log("endgame");
    gameBox.style.display = 'none';
    resultBox.style.display = 'block';
    finalScore.innerHTML = gameScore;

}


/**
 * @param {*} answer_nr 
 * Svars värdet som skickas in när man klickar på knappen
 * Validerar ifall man har svarat rätt eller fel
 * Spelar upp ljud beroende på svaret.
 */
function answer(answer_nr) {
    console.log(total_questions, question_nr);
    if (current_step < total_questions) {
        if (question_nr === 0 && answer_nr === 2 || 
            question_nr === 1 && answer_nr === 3){
            gameScore += 10;
            audioPlayer.src = gameSounds[3];
            audioPlayer.play();
        } else {
            gameScore -= 5;
            audioPlayer.src = gameSounds[2];
            audioPlayer.play();
        }
        question_nr += 1;
        current_step += 1;
        theGame();
    } else {
        console.log("test");
        endGame();
    }
    
}

/**
 * Initialiserar spelet och startar upp spelet med första frågan
 */
theGame();

