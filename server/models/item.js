/**
 *
 * @class
 * @classdesc Can be put on ActiveEntities
 */
class Item {
  constructor(owner) {
    this.owner = owner;
    this.isPassive;
    this.level;
    this.maxLevel;
    this.cooldown;
    this.statModifiers;
  }
  /** Runs when a entity gets the item */
  onEquip() {}
  /** Runs every set time */
  onActivation() {}
  /**
   * Runs when the owner kills another ActiveEntity
   * @param {ActiveEntity} killedEntity
   */
  onKill(killedEntity) {}
}

module.exports = Item;
