
function flipCoin() {
    let result = Math.floor(Math.random() * 2) + 1;
    if (result === 1) {
        return "H";
    } else {
        return "T";
    }
}

function animation() {
    document.getElementById("playerCoin1").classList.add("flip");
    setTimeout(() => {
        document.getElementById("playerCoin1").classList.remove("flip");
    }, 500);
    document.getElementById("playerCoin2").classList.add("flip");
    setTimeout(() => {
        document.getElementById("playerCoin2").classList.remove("flip");
    }, 500);
    document.getElementById("playerCoin3").classList.add("flip");
    setTimeout(() => {
        document.getElementById("playerCoin3").classList.remove("flip");
    }, 500);
    
    document.getElementById("cpuCoin1").classList.add("flip");
    setTimeout(() => {
        document.getElementById("cpuCoin1").classList.remove("flip");
    }, 500);
    document.getElementById("cpuCoin2").classList.add("flip");
    setTimeout(() => {
        document.getElementById("cpuCoin2").classList.remove("flip");
    }, 500);
    document.getElementById("cpuCoin3").classList.add("flip");
    setTimeout(() => {
        document.getElementById("cpuCoin3").classList.remove("flip");
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
    let yourCoinResult = ["H", "H", "H"];
    let cpuCoinResult = ["H", "H", "H"];

    let playerResult = 0;
    let cpuResult = 0;
    // Roll dice and modify DOM
    yourCoinResult[0] = flipCoin();
    document.getElementById("playerCoin1").textContent = yourCoinResult[0]
    yourCoinResult[1] = flipCoin();
    document.getElementById("playerCoin2").textContent = yourCoinResult[1]
    yourCoinResult[2] = flipCoin();
    document.getElementById("playerCoin3").textContent = yourCoinResult[2]

    cpuCoinResult[0] = flipCoin();
    document.getElementById("cpuCoin1").textContent = cpuCoinResult[0]
    cpuCoinResult[1] = flipCoin();
    document.getElementById("cpuCoin2").textContent = cpuCoinResult[1]
    cpuCoinResult[2] = flipCoin();
    document.getElementById("cpuCoin3").textContent = cpuCoinResult[2]
    animation();

    // Compute sum
    for (let i = 0; i < 3; i++) {
        if (yourCoinResult[i] === "H") {
            playerResult += 1;
        }
        if (cpuCoinResult[i] === "H") {
            cpuResult += 1;
        }
    };

    // Check winner and update
    gameCondition = checkState(playerResult, cpuResult);
}
