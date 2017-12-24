// represents a playing card
class Card {

  /*
  * Creates a card with card value and a suit.
  */
  constructor(cardVal, suit) {
    this.cardVal = cardVal;
    this.suit = suit;
  }

  // determines if the card given can placed below this card.
  canPlaceBelow(card) {
    return card.suit.oppositeColor(this.suit) && this.cardVal.canPlaceBelow(card.cardVal);
  }
}
