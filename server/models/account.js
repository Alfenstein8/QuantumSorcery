const { V4: uuidv4 } = require("uuid");

/**
 * @class
 * @classdesc 
 */
class Account {
  constructor() {
    this.id = uuidv4();
    this.username;
    this.lobby;
  }
}

module.exports = Account;
