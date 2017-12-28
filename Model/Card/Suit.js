/*
* Represents a suit for a playing card.
* 0 is hearts, 1 is diamonds, 2 is spades, and 3 is clubs.
*/
class Suit {

  // creates a suit value between 0 and 3.
  constructor(val) {
    if (val < 0 || val > 3) {
      throw UserError("Invalid value");
    }

    this.value = val;
  }

  // determines if this suit color is the same as this suit color.
  sameSuit(suit) {
    return suit.value === this.value;
  }

  // determines if this suit is of a different color than this suit.
  oppositeColor(suit) {
    switch (this.value) {
      case 0:
        return suit.value > 1;
      case 1:
        return suit.value > 1;
      case 2:
        return suit.value < 2;
      case 3:
        return suit.value < 2;
    }
  }

  // Gets the path for this type of Suit
  getType() {
    switch(val) {
      case 0:
        return "Hearts\\";
      case 1:
        return "Diamonds\\";
      case 2:
        return "Spades\\";
      case 3:
        return "Clubs\\";
      default:
        throw UserError("Not a valid card created.");
    }
  }

}
