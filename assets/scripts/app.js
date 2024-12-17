// variables
let attack = 15;
let strongAttack = 25;

let heal = 30;
let monsterAttack = 20;

let max = 100;

let bonusLife = true;

// take user input value...
let enteredValue = prompt("enter initial value of monster health!", 100);
setPlayerHealth(enteredValue);

function test(player, monster) {
  if (player <= 0 && bonusLife === true) {
    bonusLife = false;
    removeBonusLife();
  } else if (player <= 0 && monster > 0) {
    alert("you lose!");
    adjustHealthBars(max);
  } else if (monster <= 0 && player > 0) {
    alert("you won!");
    adjustHealthBars(max);
  } else if (player === 0 && monster === 0) {
    alert("draw!");
    adjustHealthBars(max);
  }
}

function app(typeOfAction) {
  //bonus life...
  if (playerHealthBar.value <= 0 && bonusLife) {
    removeBonusLife();
  }
  if ("ATTACK" === typeOfAction) {
    dealMonsterDamage(attack);
    dealPlayerDamage(monsterAttack);
  } else if ("STRONG-ATTACK" === typeOfAction) {
    dealMonsterDamage(strongAttack);
    dealPlayerDamage(monsterAttack);
  } else if ("HEAL" === typeOfAction) {
    if (playerHealthBar.value === 100) {
      alert("you have full health!");
    }
    increasePlayerHealth(heal);
  } else if ("SHOW-LOG" === typeOfAction) {
  } else if ("RESET" === typeOfAction) {
    if (monsterHealthBar.value === max && playerHealthBar.value === max) {
      alert("you cannot reset ");
    } else {
      adjustHealthBars(max);
      alert("game is reset");
    }
  }

  test(playerHealthBar.value, monsterHealthBar.value);
}

// all four button target...
function light() {
  app("ATTACK");
}
function strong() {
  app("STRONG-ATTACK");
}
function healing() {
  app("HEAL");
}
function showLog() {
  app("SHOW-LOG");
}
function reSet() {
  app("RESET");
}

// lisnter for buttons..,
attackBtn.addEventListener("click", light);
strongAttackBtn.addEventListener("click", strong);

healBtn.addEventListener("click", healing);
logBtn.addEventListener("click", showLog);

resetBtn.addEventListener("click", reSet);
