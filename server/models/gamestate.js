const GameSettings = require("./gameSettings");

class GameState {
  constructor() {
    this.bounds = { left: 100, right: 100, up: 100, down: 100 };
    this.time = 0.0;
    this.playerLevel = 0;
    this.playerXP = 0;
    this.requiredXP;
    this.settings = new GameSettings();
    this.entities = [];
    this.players = [];
  }
}

module.exports = GameState;
