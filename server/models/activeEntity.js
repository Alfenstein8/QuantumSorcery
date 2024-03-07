const Entity = require("./entity");
const Stat = require("./stat");

class ActiveEntity extends Entity {
  constructor() {
    super();
    this.health = 100;
    this.maxHealth = new Stat(100);
    this.atkDamage = new Stat(1);
    this.atkSpeed = new Stat(1);
    this.moveSpeed = new Stat(1);

    this.items = [];
  }
  /**
   * @param {number} dmg
   * @param {ActiveEntity} dealer
   */
  damage(dmg, dealer) {
    this.health -= dmg;
    if (this.health > 0) return false;

    this.die(dealer);
    return true;
  }

  heal(hp) {
    this.health += hp;
  }

  /**
   * @param {ActiveEntity} killer
   */
  die(killer) {}

  addItem(item) {
    this.items.push(item);
    return true;
  }

  removeItem(item) {
    const itemIndex = this.items.indexOf(item);
    if (itemIndex === -1) return false;
    this.items.splice(itemIndex, 1);
    return true;
  }
}

module.exports = ActiveEntity;
