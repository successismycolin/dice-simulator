// DICE SIMULATOR PROGRAM

function rollDice(){
    const numOfDice = document.getElementById("numOfDiceTextbox").value;
    let numOfDiceTextbox = document.getElementById("numOfDiceTextbox");
    let rollsElement = document.getElementById("diceResult");
    let iconsElement = document.getElementById("diceIcons");
    
    if (Number(numOfDice) > 0){
        rollsElement.innerHTML = "Result: ";
        iconsElement.innerHTML = ""

        // Generates a random integer between 1 and 6 for each die
        for (let i = 0; i < numOfDice; i++) {
            const rollResult = Math.floor((Math.random() * 6) + 1); 

            // Converting a rollResult into its word equivalent in English for use in the icon adding section
            switch (rollResult){
                case 1: numWord = 'one';
                break;
                case 2: numWord = 'two';
                break;
                case 3: numWord = 'three';
                break;
                case 4: numWord = 'four';
                break;
                case 5: numWord = 'five';
                break;
                case 6: numWord = 'six';
            }

            // Adds the number of the die rolled to the diceResult HTML element
            rollsElement.innerHTML += `${rollResult} `;
            // Adds an icon for the die rolled to the diceIcons HTML element 
            iconsElement.innerHTML += `<i class="fa-solid fa-dice-${numWord}"></i>`;
        }

    } else {
        alert("Enter a positive number");
        numOfDiceTextbox = "";
    }
}