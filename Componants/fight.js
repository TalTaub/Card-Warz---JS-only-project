
/*
    this function deal with everything around checking who wins, and updating the score,
    the side decks, and the "fight pile".
*/

function chackwinner(card1,card2){
    fightDeck.push(card1);
    fightDeck.push(card2);

    if (card1.power==card2.power) {
        return;
    }
    if(card1.power>card2.power){
        for(i=0;i<fightDeck.length;i++){
            player1SecondDeck.push(fightDeck[i]);
            player1Score++;
        }
        document.getElementById('fightingZoneCard').src=card1.image;
        fightDeck=[];
    }
    else{
        for(i=0;i<fightDeck.length;i++){
            player2SecondDeck.push(fightDeck[i]);
            player2Score++;
        }
        fightDeck=[];
        document.getElementById('fightingZoneCard').src=card2.image;
    }
    // updating the score on our website.
    player1Score>player2Score ? document.getElementById("score").innerHTML= "Player 1 is leading by: "+(player1Score-player2Score) + "points!" :
    player1Score==player2Score ? document.getElementById("score").innerHTML="Tie!" :
    document.getElementById("score").innerHTML= "Player 2 is leading by: "+(player2Score-player1Score) + "points!";  
}

function deckdone(decks,pos1,pos2){
    if (decks.player1Deck[pos1]==undefined){
        if (player1SecondDeck.length!=0) {
            decks.player1Deck=shuffle(player1SecondDeck);
            player1SecondDeck=[];
            player1DeckPos=0;
            document.getElementById('player1SecondDeckFlipped').style.opacity=0.05;
            console.log(player1DeckPos,player1SecondDeck,decks.player1Deck);
        }  
    }

    if (decks.player2Deck[pos2]==undefined){
        if (player2SecondDeck.length!=0) {
            decks.player2Deck=shuffle(player2SecondDeck);
            player2SecondDeck=[];
            player2DeckPos=0;
            document.getElementById('player2SecondDeckFlipped').style.opacity=0.05;
            console.log(player2DeckPos,player2SecondDeck,decks.player2Deck);
        }  
    }
}

function winning(){
    if (player1Score - player2Score >=20){
        document.getElementById('app').style.display="none";
        document.getElementById('cardwarz').style.display="none";
        document.getElementById('victory').innerHTML="Player 1 WIN! <br> player 1 got 20 more points then player 2";
        document.getElementById('victory').style.display="block";
    }
    if (player2Score - player1Score>=20){
        document.getElementById('app').style.display="none";
        document.getElementById('cardwarz').style.display="none";
        document.getElementById('victory').innerHTML="Player 1 WIN! <br> player 1 got 20 more points then player 2";
        document.getElementById('victory').style.display="block";
    }
}

function fight(){
    // just to simplify the code.
    let player1Card = document.getElementById('player1Card');
    let player2Card = document.getElementById('player2Card');
    
    player1Card.src=mainDecks.player1Deck[player1DeckPos]["image"];
    player2Card.src=mainDecks.player2Deck[player2DeckPos]["image"];

    switchingCards("player1DeckFlipped","player1Card");
    switchingCards("player2DeckFlipped","player2Card");

    // this function deal with everything around checking who wins, and updating different relavent vars.
    chackwinner(mainDecks.player1Deck[player1DeckPos],mainDecks.player2Deck[player2DeckPos]);
    
    if (player1SecondDeck.length!=0) {
        document.getElementById('player1SecondDeckFlipped').style.opacity=1;
    }

    if (player2SecondDeck.length!=0) {
        document.getElementById('player2SecondDeckFlipped').style.opacity=1;
    }

    
    player1DeckPos++;
    player2DeckPos++;
    deckdone(mainDecks,player1DeckPos,player2DeckPos);
    winning(score);


}