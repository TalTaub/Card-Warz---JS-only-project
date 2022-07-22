// this funaction create a standard deck of 54 cards & shuffle the deck.

function createNewStack(){
    let count=0;
    for (j=0;j<4;j++){
        // creates 4 cards of each number type card.
        for (i=2;i<=10;i++) {
            commenCardStack[count] = new card("card"+i);
            count++;
        }
        // each line creates 4 cards of J, Q, K and A
        commenCardStack[count] = new card("cardJ");
        count++;

        commenCardStack[count] = new card("cardQ");
        count++;

        commenCardStack[count] = new card("cardK");
        count++;

        commenCardStack[count] = new card("cardA");
        count++;
        }

        // creats 2 joker cards - outsize of the loop.
        commenCardStack[count] = new card("cardJoker");
        count++;
        commenCardStack[count] = new card("cardJoker");
        // deck shamble!
        
        shuffle(commenCardStack);
    return commenCardStack;
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }