let play, startprize = 100,
    increasedprize = startprize,
    currentprize, wonprize = 0,
    attempts = 3,
    guess, maxrange = 8,
    rangeincrease = 4,
    gameover;

play = confirm('Do you want to play a game?');
while (play) {
    currentprize = startprize;
    while (attempts > 0) {
        let num = Math.random(maxrange + 1) * 10
        guess = +prompt('Choose the rullete pocket number from 0 to ' + maxrange +
            '\nAttempts left: ' + attempts +
            '\nTotal prize: ' + wonprize + '$' +
            '\nPossible prize on current attempt: ' + currentprize);
        if (guess === num) {
            gameover = false;
            break;
        }
        if (guess !== num) {
            attempts--;
            if (attempts === 0) {
                gameover = true;
                break;
            } else {
                currentprize = currentprize / 2;
                alert('Try again');
            }
        }
    }
    if (gameover) {
        maxrange = 8;
        startprize = 100;
        attempts = 3;
        alert('Thank you for your participation. Your prize is ' + wonprize + ' $');
        play = confirm('Do you want to play again?');
    } else {
        maxrange += rangeincrease;
        wonprize += currentprize;
        startprize = increasedprize * 2;
        attempts = 3;
        play = confirm('Congratulation, you won! Your prize is ' + wonprize + '$. Do you want to continue?');
    }
}
if (!play) {
    alert('You did not become a billionaire, but you could');
}
