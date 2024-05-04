
function rollDice() {
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
}

function animation() {
    document.getElementById("playerDie1").classList.add("roll");
    setTimeout(() => {
        document.getElementById("playerDie1").classList.remove("roll");
    }, 500);
    document.getElementById("playerDie2").classList.add("roll");
    setTimeout(() => {
        document.getElementById("playerDie2").classList.remove("roll");
    }, 500);
    document.getElementById("playerDie3").classList.add("roll");
    setTimeout(() => {
        document.getElementById("playerDie3").classList.remove("roll");
    }, 500);
    
    document.getElementById("cpuDie1").classList.add("roll");
    setTimeout(() => {
        document.getElementById("cpuDie1").classList.remove("roll");
    }, 500);
    document.getElementById("cpuDie2").classList.add("roll");
    setTimeout(() => {
        document.getElementById("cpuDie2").classList.remove("roll");
    }, 500);
    document.getElementById("cpuDie3").classList.add("roll");
    setTimeout(() => {
        document.getElementById("cpuDie3").classList.remove("roll");
    }, 500);
}

function checkState(player1result, player2result) {
    if (player1result < player2result) {
        document.getElementById("output").textContent = "You Lose";
    } else if (player1result === player2result) {
        document.getElementById("output").textContent = "Tie";
    } else {
        document.getElementById("output").textContent = "You Win";
    }
}

function gameLoop() {
    let yourDiceResult = [1, 1, 1];
    let cpuDiceResult = [1, 1, 1];

    let playerResult = 0;
    let cpuResult = 0;
    // Roll dice and modify DOM
    yourDiceResult[0] = rollDice();
    document.getElementById("playerDie1").textContent = yourDiceResult[0].toString();
    yourDiceResult[1] = rollDice();
    document.getElementById("playerDie2").textContent = yourDiceResult[1].toString();
    yourDiceResult[2] = rollDice();
    document.getElementById("playerDie3").textContent = yourDiceResult[2].toString();

    cpuDiceResult[0] = rollDice();
    document.getElementById("cpuDie1").textContent = cpuDiceResult[0].toString();
    cpuDiceResult[1] = rollDice();
    document.getElementById("cpuDie2").textContent = cpuDiceResult[1].toString();
    cpuDiceResult[2] = rollDice();
    document.getElementById("cpuDie3").textContent = cpuDiceResult[2].toString();
    animation();

    // Compute sum
    for (let i = 0; i < 3; i++) {
        playerResult += yourDiceResult[i];
        cpuResult += cpuDiceResult[i];
    };

    // Check winner and update
    gameCondition = checkState(playerResult, cpuResult);
}
