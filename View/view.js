//Reprsents the view for the game of Freecell
class View {

  // constructs the view with lists of piles
  constructor(cascade, foundation, open) {
    if (cascade.length >= 4 && foundation.length == 4 && open.length >= 1) {
      this.cascade = cascade;
      this.foundation = foundation;
      this.open = open;
    }
    else { throw UserError("Piles cannot be initialized.");
  }

  gameArea = {
      canvas : document.createElement("canvas"),
      start() {
          this.canvas.width = 2000;
          this.canvas.height = 1000;
          this.context = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
          this.interval = setInterval(updateGameArea, 20);
      }
  }
}

  // sets the locations of the cascade piles
  setCascade(x, y, space, width, height) {
      setPiles(x, y, space, width, height, this.cascade);
  }

  // sets the locations of the foundation piles
  setFoundation(x, y, space, width, height) {
    setPiles(x, y, space, width, height, this.foundation);
  }

  // sets the locations of the open pile(s)
  setOpen(x, y, space, width, height) {
    setPiles(x, y, space, width, height, this.open);
  }

  // sets the locations of a generic piles
  setPiles(x, y, space, width, height, piles) {
    for(int i = 1 ; i < piles.length ; i++) {
       newX = i * (width + space);
       piles.get(i - 1).drawCards(newX, y, width, height)
    }
  }

  // clears the canvas
  clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
