
// Represents the model to play a freecell with.
class FreecellModel {

  // initializes the inputs.
  constructor() {
    this.hasStarted = false;
    this.foundation = [new Foundation(new Array(), 0), new Foundation([], 1),
     new Foundation([], 2), new Foundation([], 3)];
  }

  // returns a sample deck to use.
  getDeck() {
    var deck = new Array(52);
    var deckIndex = 0;
    for (var i = 0; i < 4; i++) {
      for (var j = 1; j < 14; j++) {
        deck[deckIndex] = new Card(new CardValue(j), new Suit(i));
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
      for (pile in this.cascade) {
        isGameOver = pile.isGameOver() && isGameOver;
      }

      for (pile in this.foundation) {
        isGameOver = pile.isGameOver() && isGameOver;
      }

      for (var pile in this.open) {
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
      throw Error("Invalid values.")
      return ;
    }

    this.hasStarted = true;
    this.deck = deck.slice();
    this.open = new Array(numOpenPiles);
    this.cascade = new Array(numCascadePiles);

    if (shuffle) {
      let counter = this.deck.length;

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = this.deck[counter];
          this.deck[counter] = this.deck[index];
          this.deck[index] = temp;
      }
    }

    // initialize open piles.
    for (var i = 0; i < numOpenPiles; i++) {
      this.open[i]  = new Open([], i);
    }

    // number of cards per cascade pile.
    var cascade_piles = [];

    // initialize the correct number of pile of cards.
    for (var i = 0; i < numCascadePiles; i++) {
      cascade_piles.push([]);
    }

    var pile = 0;

    // fill the pile of cards up.
    for (var deckIndex = 0; deckIndex < 52; deckIndex++) {
        cascade_piles[pile].push(this.deck[deckIndex]);
        pile = (pile + 1) % numCascadePiles;
    }

    // put the filled pile of cards into the cascade piles.
    for (var c = 0; c < cascade_piles.length; c++) {
      this.cascade[c] = new Cascade(cascade_piles[c], c);
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
      throw Error("Please start the game first.");
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
    return this.getEntirePile(source)[pileNum];
  }

  /**
  * Getter for the pile.
  * @param type represents the type of pile to be retrieved.
  */
  getEntirePile(type) {
    switch(type) {
      case "cascade":
        return this.cascade;
      case "open":
        return this.open;
      case "foundation":
        return this.foundation;
      default:
        throw UserError("Invalid parameters")
    }
  }

}
