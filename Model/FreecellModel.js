// Represents the model to play a freecell with.
class FreecellModel {

  // initializes the inputs.
  constructor() {
    this.hasStarted = false;
    this.foundation = new Array[new Foundation(0), new Foundation(1),
      new Foundation(2), new Foundation(3)];
  }

  // returns a sample deck to use.
  getDeck() {
    var deck = new Array(52);
    var deckIndex = 0;
    for (int suit = 0; suit < 4; suit++) {
      for (int cardValue = 0; cardValue < 14; cardValue++) {
        deck[deckIndex] = new Card(new CardValue(cardIndex), new Suit(suit));
        deckIndex++;
      }
    }

    return deck;
  }

  // Determines if the game is over.
  isGameOver() {
    if (!hasStarted) {
      return false;
    } else {
      var isGameOver = true;
      for (APile pile : this.cascade) {
        isGameOver = pile.isGameOver() && isGameOver;
      }

      for (APile pile : this.foundation) {
        isGameOver = pile.isGameOver() && isGameOver;
      }

      for (APile pile : this.open) {
        isGameOver = pile.isGameOver() && isGameOver;
      }

      return isGameOver;
    }
  }

  /**
  * Starts the game with the given inputs.
  * @param deck represents the deck to be used to play with.
  * @param numCascadePiles represents the number of cascade piles to be used.
  * @param numOpenPiles represents the number of open piles to be used.
  * @param shuffle represents whether or not the deck should be shuffled.
  */
  startGame(deck, numCascadePiles, numOpenPiles, shuffle) {
    // TODO Check if the values are valid.
    if (deck.length != 52 || numCascadePiles < 4 || numOpenPiles < 1) {
      throw UserError("Invalid values.")
    }

    this.hasStarted = true;
    this.deck = deck.slice();
    this.open = new Array(numOpenPiles);
    this.cascade = new Array(numCascadePiles);

    // initialize open piles.
    for (int i = 0; i < numOpenPiles; i++) {
      open.push(new Open(new Array[], i));
    }

    // number of cards per cascade pile.
    var size = Math.ceil(deck.length / numCascadePiles);

    // initialize cascade piles by splitting up the given deck.
    for (int i = 0; i < numCascadePiles; i++) {
      var temp = new Array[];
      var j = 0;

      // allocate proper number of cards, or just finish off the deck.
      while (j < size && j + i * size < deck.size) {
        temp.push(this.deck[j]);
      }

      cascade.push(new Cascade(temp, i));
    }
  }

  /**
  * Makes a move with the given input if it is valid. Throws a user error
  * otherwise.
  *
  * @param source represents the source pile to take the card from.
  * @param pileNumber represents which pile to take from.
  * @param cardIndex represents which card to take from.
  * @param destination represents what type of pile to place the card.
  * @param destPileNumber represents which pile to put the card in.
  */
  move(source, pileNumber, cardIndex, destination, destPileNumber) {
    // TODO check if inputs are valid.
    if (!this.hasStarted) {
      throw UserError("Please start the game first.");
    }
    
    var from = this.getPile(source, pileNumber);
    var to = this.getPile(destination, destPileNumber);
    var cardToMove = from.getCard(cardIndex);
    to.addCard(cardToMove);
    from.removeCard(cardIndex);
  }

  /**
  * Gets the pile of the specified type.
  *
  * @param source represents the type of pile to get.
  * @param pileNum represents which pile to get.
  */
  getPile(source, pileNum) {
    switch(source) {
      case "cascade":
        return this.cascade[pileNum];
      case "open":
        return this.open[pileNum];
      case "foundation":
        return this.foundation[pileNum];
      default:
        throw UserError("Invalid parameters")
    }
  }

}
