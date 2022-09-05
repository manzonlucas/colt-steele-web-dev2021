// Background changer

// Scorekeeper

let p1Total = 0;
let p2Total = 0;
let scoreToWin = 1;

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Scores = document.querySelector('#p1Scores');
const p2Scores = document.querySelector('#p2Scores');
const scoreSetter = document.querySelector('#scoreSetter')

scoreSetter.addEventListener('input', function() {
    scoreToWin = scoreSetter.value;
})

p1Scores.addEventListener('click', function() {
    if (p1Total < scoreToWin && p2Total < scoreToWin) {
        p1Total += 1;
        p1Display.innerHTML = p1Total;
    }
});

p2Scores.addEventListener('click', function() {
    if (p1Total < scoreToWin && p2Total < scoreToWin) {
        p2Total += 1;
        p2Display.innerHTML = p2Total;
    }
});