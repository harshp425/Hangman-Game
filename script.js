//Container for letter buttons
const letterContainer = document.getElementById("letter-container");

//Container for option buttons
const optionsContainer = document.getElementById("options-container");

//Section to display the underscores that represent the letters of the word
const userInputSection = document.getElementById("user-input-section");

//Container for the new game button
const newGameContainer = document.getElementById("new-game-container");

//New game button
const newGameButton = document.getElementById("new-game-button");

//Canvas for drawing the stick man
const canvas = document.getElementById("canvas");

//The text element in order to display the game result at the end
const resultText = document.getElementById("result-text");

//An object that contains categories where each category has an array of corresponding potential words that can 
//be chosen for the game.
let options = {
    fruits: [
        "Apple",
        "Mango",
        "Banana",
        "Cherry",
        "Watermelon",
        "Orange", 
        "Manderin",
        "Grapefruit", 
        "Peach", 
        "Pineapple",
        "Kiwi",
        "Pomegranete"
    ],
    animals: [
        "Hedgehog", 
        "Rhinoceros", 
        "Elephant", 
        "Panther",
        "Tiger", 
        "Lion",
        "Parrot", 
        "Falcon",
        "Cheetah",
        "Alligator", 
        "Iguana", 
    ],
    countries: [
        "Albania",
        "India",
        "England",
        "Argentina",
        "Canada",
        "Australia",
        "Austria",
        "Mexico", 
        "Chile", 
        "Netherlands", 
        "China", 
        "Japan", 
        "Nepal", 
        "Iceland", 
        "Belgium", 
        "Brazil", 
        "Madagascar", 
        "Italy", 
        "Nicaragua", 
        "Norway", 
        "Denmark", 
        "Ecuador", 
        "Guatemala", 
        "Trinidad", 
        "Venezuela"
    ]
};


//The count for correct letter guesses
let winCount = 0;

//The count for incorrect letter guesses
let count = 0;

//Represents the word to be guessed by the player
let chosenWord = "";

//This function displays the category buttons on the screen and this is done through the optionsContainer
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonContainer = document.createElement("div");
    for (let value in options) {
        buttonContainer.innerHTML += `<button class= "options" onclick= "generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonContainer);
};

//This function disables the category and letter buttons at the end of a game and it also reveals the newGameContainer
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");

    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    letterButtons.forEach((button) => {
        button.disabled = true; 
    });

    newGameContainer.classList.remove("hide");
};


//This function goes through all of the options buttons and for whichever option button matches the optionvalue
//the function will randomly select a word from that particular option from the options object and will display
//the corresponding number of underscore dashes for the chosen word 
const generateWord = (optionValue) => {
    //seeing which button is pressed
    let optionsButtons = document.querySelectorAll(".options");
    optionsButtons.forEach((button => {
        if (button.innerText.toLowerCase() == optionValue) {
            button.classList.add("active");
        };
        button.disabled = true;
    }));
    
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    //randomly choosing a word
    let optionArray = options[optionValue];
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
    
    userInputSection.innerHTML = displayItem;
};

//This function initializes the game state, sets up all the letter buttons, displays the category buttons, and calls
//the appropriate helper functions to ensure the game logic works properly
const initializer = () => {
    winCount = 0;
    count = 0;

    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";

    //creates all the buttons for each letter
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i); 
        //adds an event listener to each button with an event of "click" so that when that button is clicked, it 
        //triggers the lambda function
        button.addEventListener("click", () => {
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");
            
            //if the letter corresponding to the button pressed is inside the chosen word, replace all the dashes
            //corresponding to those positions in the word to the actual letter.
            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    if (char === button.innerText) {
                        dashes[index].innerText = char;
                        winCount += 1;
                        //if the entire word had been guessed correctly then call the blocker function to get rid of all
                        //the buttons and canvas
                        if (winCount == charArray.length) {
                            resultText.innerHTML = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${chosenWord}</span></p>`;
                            blocker();
                        };
                    
                    };
                });
            //if the letter corresponding to the button pressed is not in the chose word, a part of the stick figure
            //gets drawn
            } else {
                count += 1;
                drawMan(count);
                if (count == 6) {
                    resultText.innerHTML = `<h2 class='lose-msg'>Game Over!</h2><p>The word was <span>${chosenWord}</span></p>`;
                    blocker();
                };
            };
            button.disabled = true;
        });
        letterContainer.append(button);
    };

    displayOptions();

    let {initialDrawing} = canvasCreater();

    initialDrawing()
};

//This function has nested functions that actaully draw every part of the stick man's body and it essentially
//returns an object that has these functions within it
const canvasCreater = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    const drawLine = (fromX, fromY, toX, toY) => {
            context.moveTo(fromX, fromY);
            context.lineTo(toX, toY);
            context.stroke();
    };

    //draws the head
    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    //draws the body
    const body = () => {
        drawLine(70, 40, 70, 80);
    };
    
    //draws the left arm
    const leftArm = () => {
        drawLine(70, 50, 90, 70);
    };

    //draws the right arm
    const rightArm = () => {
        drawLine(70, 50, 50, 70);
    };

    //draws the left leg
    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    //draws the right leg
    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };

    //makes the initial stand part of the drawing
    const initialDrawing = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        drawLine(10, 130, 130, 130);
        drawLine(10, 10, 10, 131);
        drawLine(10, 10, 70, 10);
        drawLine(70, 10, 70, 20);
        };
        return { initialDrawing, head, body, leftArm, leftLeg, rightArm, rightLeg };
};

//This function takes in the count of incorrect guesses and then based on the count, it calls the corresponding, 
//function to draw that part of the body.
const drawMan = (count) => {
    let { head, body, leftArm, leftLeg, rightArm, rightLeg } = canvasCreater();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
};

newGameButton.addEventListener("click", initializer);
window.onload = initializer;
