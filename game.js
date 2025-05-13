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

function adjustUIScale() {
    let container = document.getElementById("game-container");
    let scaleFactor = window.innerWidth < 600 ? 1.5 : 1;
    
    container.style.transform = `scale(${scaleFactor})`;
}

window.addEventListener("resize", adjustUIScale);
adjustUIScale(); // Apply scaling on load
