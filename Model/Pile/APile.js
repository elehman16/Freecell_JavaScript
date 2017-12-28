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

  /**
  * Draws all cards with the given information.
  * @param location_x is the top left starting location of the pile.
  * @param location_y is the top left starting location of the pile.
  * @param card_size_x is the x size of the card.
  * @param card_size_y is the y size of the card.
  */
  drawCards(location_x, location_y, card_size_x, card_size_y) {
    last_y = location_y; // this needs to be shifted down
    shift_factor = card_size_x / 4;
    for (card in this.cards) {
        card.draw(location_x, last_y + shift_factor, card_size_x, card_size_y);
        last_y += shift_factor;
    }
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
