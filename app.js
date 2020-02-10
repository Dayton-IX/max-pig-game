/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayers, gamePlaying, sixes, scoreToWin, rounds;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying){
        var scoreDOM = document.querySelector('.score-form input');
        // only allow the players to edit the scoreToWin before the first roll, to prevent cheating
        if (rounds === 0){
            scoreToWin = scoreDOM.value;
        }
        rounds++;
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        var dice2DOM = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        // hide the score editor on first roll
        document.querySelector('.score-form').style.display = 'none';
        document.querySelector('.score-head').style.display = 'none';

        
        if (dice !== 1 && dice2 != 1){
            // if a six is rolled, add one to sixes, if not, reset sixes to zero
            if (dice === 6 || dice2 === 6){
                if (dice === 6 && dice2 === 6){
                    sixes += 2;
                } else {
                    sixes++;
                }
            } else {
                sixes = 0;
            }
            // if you roll 2 sixes in a row, your score is reseted to zero and it becomes the next players turn
            if (sixes === 2){
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            } else {
                roundScore += dice + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
        } else {
            nextPlayer();
        }
        // console.log(sixes);
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= scoreToWin){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    sixes = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    sixes = 0;
    scoreToWin = 100;
    rounds = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.score-form').style.display = 'block';
    document.querySelector('.score-head').style.display = 'block';
}