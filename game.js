const gameText = document.getElementById("game-text");

let mileage = 100;  // Starting mileage
let monsters = [];
let carCapacity = 3;  // Car limits the number of monsters

function navigate(action) {
    if (action === "select") {
        gameText.innerText = "You hit the road! Mileage: " + mileage;
        startEncounter();
    }
}

function startEncounter() {
    let event = Math.random() < 0.5 ? "battle" : "mission";
    gameText.innerText = event === "battle" ? "Wild monster appears!" : "NPC offers a quest!";
    mileage -= 10;
}

