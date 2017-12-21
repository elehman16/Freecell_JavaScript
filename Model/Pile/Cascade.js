/*
Represents a cascade pile to be used in freecell.
*/
class Cascade extends APile {

  // creates a cascade pile.
  constructor(cards, pileNum) {
    super(cards, pileNum);
  }

  // determines if this pile is in an end state.
  isGameOver() {
    return this.cards.length == 0;
  }

  // Determines if the given card can be added to the pile.
  canAdd(card) {
    return this.cards[this.cards.length].canPlaceBelow(card);
  }

  





}
