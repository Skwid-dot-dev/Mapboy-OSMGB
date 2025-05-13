const gameText = document.getElementById("game-text");

let mileage = 100;  // Starting mileage
let monsters = [];
let carCapacity = 3;  // Car limits the number of monsters

let playerName = "Skwid"; // Default name

function setPlayerName(name) {
    playerName = name;
    document.getElementById("gameboy-label").innerText = `${playerName}BOI`; // Update bezel
    updateUI();
}

function updateUI() {
    document.getElementById("game-text").innerText = `${playerName}BOI embarks on the journey!`;
}

function promptNameChange() {
    let newName = prompt("Enter your name:");
    if (newName) setPlayerName(newName);
}

function navigate(action) {
    let gameText = document.getElementById("game-text");
    switch (action) {
        case "up": gameText.innerText = `${playerName}BOI moves upward!`; break;
        case "down": gameText.innerText = `${playerName}BOI moves downward!`; break;
        case "left": gameText.innerText = `${playerName}BOI moves left!`; break;
        case "right": gameText.innerText = `${playerName}BOI moves right!`; break;
        case "select": gameText.innerText = `${playerName}BOI selects an action!`; break;
        case "back": gameText.innerText = `${playerName}BOI cancels and goes back!`; break;
    }
}

