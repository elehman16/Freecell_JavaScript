/*
Represents an open pile to be used in freecell.
*/
class Open extends APile {

  // creates a open pile.
  constructor(cards, pileNum) {
    super(cards, pileNum);
  }

  // determines if this pile is in an end state.
  isGameOver() {
    return this.cards.length == 0;
  }

  // Determines if the given card can be added to the pile.
  canAdd(card) {
    return this.cards[this.cards.length] == 0;
  }

}
