"use-strict";

/*
* Represents a suit for a playing card.
* 0 is hearts, 1 is diamonds, 2 is spades, and 3 is clubs.
*/
class Suit {

  // creates a suit value between 0 and 3.
  constructor(val) {
    if (val < 0 || val > 3) {
      throw Error("Invalid value");
    }

    this.value = val;
  }

  // getter for the value
  valueNum() {
    return this.value;
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
    switch(this.value) {
      case 0:
        return "Hearts/";
      case 1:
        return "Diamonds/";
      case 2:
        return "Spades/";
      case 3:
        return "Clubs/";
      default:
        throw Error("Not a valid card created.");
    }
  }

}

/*
* Represents a value of a playing card.
*/
class CardValue {

  // creates a card value.
  constructor(value) {
    if (value < 1 || value > 13) {
      throw Error("Invalid card value.");
    }

    this.value = value;
  }

  // getter for the value
  valueNum() {
    var type = this.getType();
    return type.substring(0, type.length - 4);
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
        throw Error("Invalid Card.");
    }
  }

}

// represents a playing card
class Card {

  /**
  * Creates a card with card value and a suit.
  * @param cardValue represents the value for this card.
  * @param suit represents the suit for this card.
  */
  constructor(cardVal, suit) {
    this.cardVal = cardVal;
    this.suit = suit;
  }

  /**
  * Determines if the card given can placed below this card.
  * @param card represents the card to compare to.
  */
  canPlaceBelow(card) {
    return card.suit.oppositeColor(this.suit) && this.cardVal.canPlaceBelow(card.cardVal);
  }

  // gets the path for this cards
  getType() {
    return "../Images/" + this.suit.getType() + this.cardVal.getType();
  }

  /**
  * Draws this card at the given location with the given size.
  * @param location_x is the top left starting location of the pile.
  * @param location_y is the top left starting location of the pile.
  * @param card_size_x is the x size of the card.
  * @param card_size_y is the y size of the card.
  * @param layer is for organization of cards and what appears first/on-top.
  */
  draw(location_x, location_y, size_x, size_y, layer) {
    var ctx = canvas.getContext('2d');
    var img = document.createElement("img");
    img.setAttribute("src", this.getType());
    img.setAttribute("width", size_y);
    img.setAttribute("height", size_y);
    img.style.marginLeft = location_x + 'px';
    img.style.marginTop = location_y + 'px';

    img.style.position = "absolute";
    img.style.zIndex = layer;
    document.body.appendChild(img);
  }
}
