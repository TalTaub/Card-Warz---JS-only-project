/* 
this function is here to simplify the code - instead of creating all the code in one file, 
this function is here to automaticly load all the different components i have created.
*/
(function(){
    function load(script) {
      document.write('<'+'script src="'+script+'" type="text/javascript"><' + '/script>');
    }
  
    load("../cardWarz/Componants/ConstVarsComponent.js"); // the component holds all the "simple" variables.
    load("../cardWarz/Componants/CreateNewStack.js"); // this component creates a new stack full of cards and randomize it.
    load("../cardWarz/Componants/CardClass.js"); // this component defines the "card" class.
    load("../cardWarz/Componants/CreateGameBoard.js"); // this component Creates the area where the game will be loaded onto.
    load("../cardWarz/Componants/fight.js"); // defines what happans when the middle card is pressed.
    load("../cardWarz/Componants/SwitchingCards.js"); // changes one card with another.
    load("../cardWarz/Componants/DivDecks.js"); // devide the main deck into 2 different decks.
    

  })();

// this function activates all the other function, and is basicly the "base" of everything going on.
function cardApp(){
    let stack = createNewStack();
    createGameBoard(stack); 
}