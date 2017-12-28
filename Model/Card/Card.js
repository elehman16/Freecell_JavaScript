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

    // create a new div element to be used later to draw
    var newDiv = document.createElement(cardVal + suit);
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
    return ".\\Freecell_JavaScript\\Images\\" + this.suit + this.cardValue;
  }

  /**
  * Draws this card at the given location with the given size.
  * @param location_x is the top left starting location of the pile.
  * @param location_y is the top left starting location of the pile.
  * @param card_size_x is the x size of the card.
  * @param card_size_y is the y size of the card.
  */
  draw(location_x, location_y, size_x, size_y) {
    var card = document.getElementById(cardVal + suit);
    var ctx = card.getContext('2d');
    var image = new Image();
    image.src = this.getType();
    ctx.drawImage(image, location_x, location_y, size_x, size_y);
  }
}
