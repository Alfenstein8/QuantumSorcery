const ActiveEntity = require("./activeEntity");

class Enemy extends ActiveEntity {
  constructor() {
    super();
    this.currentTarget;
  }
}

module.exports = Enemy;
