/*
Represents a value of a playing card.
*/
class CardValue {

  // creates a card value.
  constructor(value) {
    if (value < 0 || value > 13) {
      throw UserError("Invalid card value.");
    }

    this.value = value;
  }

  // determines if given a valid cardValue that it is 1 less than this value.
  canPlaceBelow(cardValue) {
    return (cardValue.value - this.value) === -1;
  }

}
