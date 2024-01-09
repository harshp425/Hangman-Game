# Hangman-Game

This is an interactive game of hangman that not only offers a great playing experience to users, but also offers a degree of customizability. For the version on this repository, users can select from a range of 3 different categories of words. Upon selection, they will then be able to guess letters of the chosen word with each successful guess filling in the word while each unsuccessful guess drawing a part of a stick figure's body. The program was built using HTML and CSS for the frontend and Javascript for the backend logic of the game. 

## How to Run

In order to run and play the game on a local machine, the user must first create a project folder in which they will add the `index.html`, `script.js`, and `style.css` files. The project folder can then be opened in an IDE and run from an integrated terminal. 

<img width="320" alt="Screenshot 2024-01-09 at 12 31 49 PM" src="https://github.com/harshp425/Hangman-Game/assets/126726290/4d0fc14a-5b38-46c0-a1d5-5fe1c7ef8fba">

## Gameplay

Upon initialization, a new window with the game will appear on the user's screen. The user will first be prompted to select a category for the word to be chosen from. 

<img width="1206" alt="Screenshot 2024-01-09 at 12 51 44 PM" src="https://github.com/harshp425/Hangman-Game/assets/126726290/8f4ac750-a93d-473c-93fe-1d99f2c29694">


Once selected, the program will choose a random word from an array of words corresponding to the category selected. The screen will then show the word with all the letters replaced by dashes along with a button for every single letter in the alphabet. 

<img width="1199" alt="Screenshot 2024-01-09 at 12 52 43 PM" src="https://github.com/harshp425/Hangman-Game/assets/126726290/6749905f-0811-4e4b-8752-5a9a5701978b">


A correctly guessed letter means that the letter is a part of the word to be guessed and as a result the corresponding dashes in the word will be replaced with the chosen letter.

<img width="1204" alt="Screenshot 2024-01-09 at 12 53 32 PM" src="https://github.com/harshp425/Hangman-Game/assets/126726290/8d2649fb-0256-4a1f-8e68-dda5aa39b715">


An incorrect guess will lead to an appendage of the stickman figure to be drawn on screen.

<img width="1201" alt="Screenshot 2024-01-09 at 12 54 39 PM" src="https://github.com/harshp425/Hangman-Game/assets/126726290/d48ae7d5-87af-434a-8684-ce283e049fe1">


Six incorrect guesses will ensure that the entire stick figure is drawn and as a result the user will be prompted to a screen displaying thier loss, the actaul word, and a button to start a new game. 

<img width="1200" alt="Screenshot 2024-01-09 at 12 55 50 PM" src="https://github.com/harshp425/Hangman-Game/assets/126726290/8fca3a00-8e0d-4ca5-ab16-312410ef9f82">


Successfully guessing all the letters in the word without takeing six incorrect guesses will lead to a screen displaying a win message, the word, and a button to start a new game. 

<img width="1202" alt="Screenshot 2024-01-09 at 12 55 15 PM" src="https://github.com/harshp425/Hangman-Game/assets/126726290/f7954e79-4cb8-4d8a-a732-3295d4510428">

## Customizability

The structure of the code for this program allows for a great degree of customizability specifically for the types of categories and the actaul word bank. Within the `script.js` file, there is an `options` object created at the top. 

<img width="1125" alt="Screenshot 2024-01-09 at 1 15 39 PM" src="https://github.com/harshp425/Hangman-Game/assets/126726290/462dab53-7e3d-4030-b244-6c0b593f9a4c">


If users wish to change the categories, they can simply change the keys (ex. fruits can be changed to NBA_Teams). The user can also change the actaul word bank by changing the words in the array corresponding to the appropriate category. Additionally, the user can also add and delete categories of thier choice to personalize thier experience. 

