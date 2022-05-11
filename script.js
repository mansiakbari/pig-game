"use strict";
//selecting elements
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const score1 = document.querySelector("#score-0");
const score2 = document.getElementById("score-1");
const current0 = document.getElementById("current-0");
const current1 = document.getElementById("current-1");

const diceel = document.querySelector(".dice");
const newgame = document.querySelector(".btn-new");
const roll = document.querySelector(".btn-roll");
const hold = document.querySelector(".btn-hold");

// let scores, active, currentscore, playing;
const scores = [0, 0];
let currentscore = 0;
let active = 0;
let playing = true;
//starting conditions
const init = function () {
  score1.textContent = 0;
  score2.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceel.classList.add("hidden");
  player0.classList.remove("player-winner");
  player1.classList.remove("player-winner");
  player0.classList.add("player-active");
  player1.classList.remove("player-active");
};
init();
//switch active player
const switchplayer = function () {
  document.getElementById(`current-${active}`).textContent = currentscore = 0;
  currentscore = 0;
  active = active === 0 ? 1 : 0;
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
};
//rolling dice function..
roll.addEventListener("click", function () {
  if (playing) {
    //1.generating random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.display
    diceel.classList.remove("hidden");
    diceel.src = `dice-${dice}.png`;
    //3.check-1 if true,switch next player
    if (dice !== 1) {
      currentscore = currentscore + dice;
      document.getElementById(`current-${active}`).textContent = currentscore;
    } else {
      //switch to next playerr
      switchplayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    //1.add score to final
    scores[active] += currentscore;
    document.getElementById(`score-${active}`).textContent = scores[active];
    //2.check for 100<=
    if (scores[active] >= 20) {
      //finish game
      playing = false;
      diceel.classList.add("hidden");
      document
        .querySelector(`.player-${active}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${active}`)
        .classList.remove("player-active");
    } else {
      //switch to next player
      switchplayer();
    }
  }
});

//new game
newgame.addEventListener("click", init);
