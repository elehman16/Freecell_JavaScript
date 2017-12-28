/*
* Represents a value of a playing card.
*/
class CardValue {

  // creates a card value.
  constructor(value) {
    if (value < 1 || value > 13) {
      throw UserError("Invalid card value.");
    }

    this.value = value;
  }

  // determines if given a valid cardValue that it is 1 less than this value.
  canPlaceBelow(cardValue) {
    return (cardValue.value - this.value) === -1;
  }

  // Gets the path for this value of card
  getType() {
    switch(this.value) {
      case 1:
        return "Ace.jpg";
      case 2:
        return "Two.jpg";
      case 3:
        return "Three.jpg"
      case 4:
        return "Four.jpg";
      case 5:
        return "Five.jpg";
      case 6:
        return "Six.jpg";
      case 7:
        return "Seven.jpg";
      case 8:
        return "Eight.jpg";
      case 9:
        return "Nine.jpg";
      case 10:
        return "Ten.jpg";
      case 11:
        return "Jack.jpg";
      case 12:
        return "Queen.jpg";
      case 13:
        return "King.jpg";
      default:
        throw UserError("Invalid Card.");
    }
  }

}
