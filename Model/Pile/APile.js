// represents a general pile that cannot be instantiated
class APile {

  // Cannot be instantiated, but is used by subclasses.
  constructor(cards, pileNum) {
    if (this.constructor === APile) {
            throw new TypeError('Abstract class "APile" cannot be instantiated directly.');
    }

    this.cards = cards.splice();
    this.pileNum = pileNum;
  }

  // gets the pile number of this pile.
  get pileNum() {
      return pileNum;
  }

  // gets the list of cards in this pile - returns a shallow copy.
  get cards() {
    return cards.splice();
  }

};
