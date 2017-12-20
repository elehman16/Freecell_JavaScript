// represents a general pile that cannot be instantiated
class APile {

  // Cannot be instantiated, but is used by subclasses.
  constructor(cards) {
    if (this.constructor === APile) {
            throw new TypeError('Abstract class "APile" cannot be instantiated directly.');
    }

    this.cards = cards;
  }






}
