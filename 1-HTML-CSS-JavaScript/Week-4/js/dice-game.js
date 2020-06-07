function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert("You rolled a " + roll + "!");
        if (roll === 1) {
            alert("Sorry\n\nGame Over, Man!");
            break;
        } else if (roll < 5) {
            continue;
        } else if (roll === 5) {
            goldCoins += 5
            alert("Congratulations, you just won 5 golden Dubloons!");
        } else {
            goldCoins += 6
            alert("Congratulations, you just won 6 golden Dubloons!");
        }
    }

    alert("You earned " + goldCoins + " golden dubloons total!\n\nArrgh!");
};

