const { V4: uuidv4 } = require("uuid");
const ActiveEntity = require("./activeEntity");

/**
 * 
 * @class
 * @classdesc a player in the game
 */
class Player extends ActiveEntity {
  constructor() {
    super();
    this.id = uuidv4();
  }
}

module.exports = Player;
