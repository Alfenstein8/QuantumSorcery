const { V4: uuidv4 } = require("uuid");
const GameState = require("./gamestate");
/**
 *
 * @class
 * @classdesc Holds all information about a game and the accounts in it
 */
class Lobby {
  constructor() {
    this.id = uuidv4();
    this.maxPlayers = 10;
    this.gameState = new GameState();
    this.accounts = [];
  }

  /**
   * @param {Account} account
   * @returns {bool}
   */
  joinLobby(account) {
    if (this.accounts.length > this.maxPlayers) return false;

    account.lobby = this;
    this.accounts.push(account);
    return true;
  }

  /**
   * @param {Account} account
   * @returns {bool}
   */
  leaveLobby(account) {
    this.accounts.slice(
      this.accounts.findIndex((a) => a.id === account.id),
      1
    );
    return true;
  }
}

module.exports = Lobby;
