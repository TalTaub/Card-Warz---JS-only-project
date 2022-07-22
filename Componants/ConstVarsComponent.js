var mainDecks;
var player1DeckPos=0;
var player2DeckPos=0;
var player1Score=0;
var player2Score=0;
var commenCardStack = [];
var fightDeck=[];
var player1SecondDeck = [];
var player2SecondDeck = [];
// an object which holdes all the card images Urls.
var cardImagesUrl = {
    card2: "../cardWarz/images/card2.png",
    card3:"../cardWarz/images/card3.png",
    card4:"../cardWarz/images/card4.png",
    card5:"../cardWarz/images/card5.png",
    card6:"../cardWarz/images/card6.png",
    card7:"../cardWarz/images/card7.png",
    card8:"../cardWarz/images/card8.png",
    card9:"../cardWarz/images/card9.png",
    card10:"../cardWarz/images/card10.png",
    cardJ:"../cardWarz/images/cardJ.png",
    cardQ:"../cardWarz/images/cardQ.png",
    cardK:"../cardWarz/images/cardK.png",
    cardA:"../cardWarz/images/cardA.png",
    cardJoker:"../cardWarz/images/cardJoker.png"
}

// an object that holes the "strength" of cards which card beats which..
var cardPower ={
    card2: 2,
    card3:3,
    card4:4,
    card5:5,
    card6:6,
    card7:7,
    card8:8,
    card9:9,
    card10:10,
    cardJ:11,
    cardQ:12,
    cardK:13,
    cardA:14,
    cardJoker:15
}
