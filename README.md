# Wordle-Game

Project 1 for General Assembly SEI

## Work plan

- [ ] Create HTML contents ✅
- [ ] Add basic CSS ✅
- [ ] Define the Model
    - Look up the list of possible 5 letter words that are playable ✅
    - create an array containing these words ✅

- [ ] Define basic logic 
    1. In the original wordle game, a new word is selected every day at 00:00:00 and players have exactly 24hrs to guess that word until a new word is selected. To begin with lets select a new word every time the page is loaded from the list of possible words (this will be shown in the console).✅

    2. When the user clicks a key on the keyboard, the letter corresponding to the key should appear in the appropriate square in the grid ✅. Alternatively, when the user clicks the 'backspace' key, the most recent tile should be cleared. ✅

    3. When the user enters a 5 letter word and presses 'ENTER', the controller should invoke a 'checkWord()' function that firstly checks if the word is valid (i.e is included in the list of possible words) ✅ and secondly compares it to the correct answer. 

        - Split the answer into an array of characters and compare each character to each corresponding tile. If they match - change the tile CSS to green. ✅ If the answer includes the tile but not at the correct index - change the tile CSS to yellow.
