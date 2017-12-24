/*
Represents an Foundation pile to be used in freecell.
*/
class Foundation extends APile {

  // creates a Foundation pile.
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
