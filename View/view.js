//Reprsents the view for the game of Freecell
class View {

  // constructs the view with lists of piles
  constructor(cascade, foundation, open) {
    if (cascade.length >= 4 && foundation.length == 4 && open.length >= 1) {
      this.cascade = cascade;
      this.foundation = foundation;
      this.open = open;
    } else {
      throw UserError("Piles cannot be initialized.");
    }

  var width = canvas.width;
  var card_size = 100;
  var space = card_size / 4;
  this.setCascade(-1 * width, 2 * card_size + space, space, card_size, card_size);
  this.setOpen(-1 * width, card_size, space, card_size, card_size);
  this.setFoundation(-1 * width + (card_size + space) * 4, card_size, space, card_size, card_size);
}

  // sets the locations of the cascade piles
  setCascade(x, y, space, width, height) {
      this.setPiles(x, y, space, width, height, this.cascade);
  }

  // sets the locations of the foundation piles
  setFoundation(x, y, space, width, height) {
    this.setPiles(x, y, space, width, height, this.foundation);
  }

  // sets the locations of the open pile(s)
  setOpen(x, y, space, width, height) {
    this.setPiles(x, y, space, width, height, this.open);
  }

  // sets the locations of a generic piles
  setPiles(x, y, space, width, height, piles) {
    var newX = x;
    for (var i = 0; i < piles.length; i++) {
       piles[i].drawCards(newX, y, width, height);
       newX = (newX + width + space);
    }
  }

  // clears the canvas
  clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
