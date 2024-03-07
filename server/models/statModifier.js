/**
 *
 * @class
 * @classdesc Modifies a stat
 */
class StatModifier {
  /**
   * @param {number} value
   * @param {statModType} type
   * @param {Item} source
   */
  constructor(value, type, source) {
    this.value = value;
    this.type = type;
    this.source = source;
  }
  static statModType = {
    FLAT: 0,
    PERCENT_ADD: 1,
    PERCENT_MULT: 2,
  };
}

module.exports = StatModifier;
