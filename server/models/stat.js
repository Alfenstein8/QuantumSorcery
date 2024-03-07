const StatModifier = require("./statModifier")
/**
 * @class
 * @classdesc Allow StatModifiers to modifies the value
 * @example
 * let damage = new Stat(100);
 */
class Stat {
  constructor(base) {
    this.baseValue = base;
    this.value = calcValue();
    this.modifiers = [];
  }
  calcValue(){
    //TODO: Calc value based on modifiers
  }
}

module.exports = Stat;
