// DICE SIMULATOR PROGRAM

function rollDice(){
    const numOfDice = document.getElementById("numOfDiceTextbox").value;
    
    // Generates a random integer between 1 and 6 for each die
    for (let i = 0; i < numOfDice; i++) {
        const rollResult = Math.floor((Math.random() * 6) + 1);
        
    }
}