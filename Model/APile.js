"use-strict";
// represents a general pile that cannot be instantiated
class APile {

  // Cannot be instantiated, but is used by subclasses.
  constructor(cds, pn) {
    if (this.constructor === APile) {
            throw new TypeError('Abstract class "APile" cannot be instantiated directly.');
    }


    this.cards = cds;
    this.pileNum = pn;
  }

  set pileNumber(pileNum) {
    // do nothing
  }

  set card_stack(cards) {
    // do nothing
  }

  // gets the pile number of this pile.
  get pileNumber() {
      return this.pileNum;
  }

  // gets the list of cards in this pile - returns a shallow copy.
  get card_stack() {
    return this.cards.slice();
  }

  /**
  * Draws all cards with the given information.
  * @param location_x is the top left starting location of the pile.
  * @param location_y is the top left starting location of the pile.
  * @param card_size_x is the x size of the card.
  * @param card_size_y is the y size of the card.
  */
  drawCards(location_x, location_y, card_size_x, card_size_y) {
    // if it is empty, then just draw a rectangle.
    if (this.cards.length == 0) {
      var ctx = canvas.getContext('2d');
      var img = document.createElement("img");
      img.setAttribute("src", "../Images/card_border.jpg");
      img.setAttribute("width", card_size_x);
      img.setAttribute("height", card_size_y);
      img.style.marginLeft = location_x + 'px';
      img.style.marginTop = location_y + 'px';
      img.style.position = "absolute";
      document.body.appendChild(img);
    }

    var last_y = location_y; // this needs to be shifted down
    var shift_factor = card_size_x / 4;
    for (var i = 0; i < this.cards.length; i++) {
        this.cards[i].draw(location_x, last_y + shift_factor, card_size_x, card_size_y, i);
        last_y += shift_factor;
        // give time for the image to load
    }
  }

  // Remove the card at the given location.
  removeCard(location) {
    if (location < this.cards.length) {
      this.cards.slice(location, 1);
    } else {
      throw Error("Invalid location.");
    }
  }

  // add the card to the pile if possible.
  addCard(card) {
    if (this.canAdd(card)) {
      this.cards.push(card);
    } else {
      throw Error("Cannot place card there.");
    }
  }

  // get the card at the requested location
  getCard(location) {
    if (location < this.cards.length) {
      this.cards[location];
    } else {
      throw Error("Invalid location.");
    }
  }

}

/*
Represents an Foundation pile to be used in freecell.
*/
class Foundation extends APile {

  // creates a Foundation pile.
  constructor(cards, pileNum) {
    super(cards, pileNum);
  }

  // determines if this pile is in an end state.
  isGameOver() {
    return this.cards.length == 0;
  }

  // Determines if the given card can be added to the pile.
  canAdd(card) {
    return this.cards[this.cards.length] == 0;
  }

}


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

/*
Represents an open pile to be used in freecell.
*/
class Open extends APile {

  // creates a open pile.
  constructor(cards, pileNum) {
    super(cards, pileNum);
  }

  // determines if this pile is in an end state.
  isGameOver() {
    return this.cards.length == 0;
  }

  // Determines if the given card can be added to the pile.
  canAdd(card) {
    return this.cards[this.cards.length] == 0;
  }

}
