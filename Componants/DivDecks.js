// this function takes in the main deck and returns 2 different decks, one for each player.
function divDecks(stack){
    mainDecks = {
        player1Deck: [],
        player2Deck: []
    }
    /* 
       this for loop runs over the deck and sort half of it into player 1 hands and the other half to the other player.
       i chose to use "if" statment knowing it is worst then simply creating 2 loops (run-time wise),
       just to demonstrate the usage of ? operator 
    */
    for (const i in stack) {
      i<(stack.length/2) ? mainDecks.player1Deck[i]=stack[i] : mainDecks.player2Deck[i-stack.length/2]=stack[i];   
    }
    return mainDecks;
}