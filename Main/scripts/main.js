"use strict";

var model = new FreecellModel();

model.startGame(model.getDeck(), 8, 4, true);
var cascade = model.getEntirePile("cascade");
var foundation = model.getEntirePile("foundation");
var open = model.getEntirePile("open");
var view = new View(cascade, foundation, open);
