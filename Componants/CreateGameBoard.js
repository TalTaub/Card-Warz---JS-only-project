
// "puts" the right first image befind the "player decks", and make the rest of the cards disapear (only used ones). 
function startWar(decks){
    
   
    /*  reduce opacity of all the "flipped" cards - making them completly disapear.
        also bring forth the "cards", slowly changing thier opacity to 1.
    */

     switchingCards("player1SecondDeckFlipped","player1SecondCard");
     switchingCards("fightingZoneFlipped","fightingZoneCard");
     switchingCards("player2SecondDeckFlipped","player2SecondCard");

}

function createGameBoard(stack){
    document.getElementById('app').style.display= "block";
    mainDecks = divDecks(stack);
    startWar(mainDecks);
}