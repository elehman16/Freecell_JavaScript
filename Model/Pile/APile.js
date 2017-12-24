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

  // Remove the card at the given location.
  removeCard(location) {
    if (location < this.cards.length) {
      this.cards.splice(location, 1);
    } else {
      throw UserError("Invalid location.");
    }
  }

  // add the card to the pile if possible.
  addCard(card) {
    if (this.canAdd(card)) {
      this.cards.push(card);
    } else {
      throw UserError("Cannot place card there.");
    }
  }

  // get the card at the requested location
  getCard(location) {
    if (location < this.cards.length) {
      this.cards[location];
    } else {
      throw UserError("Invalid location.");
    }
  }

}
