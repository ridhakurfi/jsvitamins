class Disaster {
  constructor(id, name, type, origin, effect) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.origin = origin;
    this.effect = effect;
  }
}

class Factory {
  static createDisaster(item) {
    let { id, name, type, origin, effect } = item;
    return new Disaster(id, name, type, origin, effect);
  }
  static createManyDisaster(item) {
    let result = item.map((it) => {
      return this.createDisaster(it);
    });
    return result;
  }
}

module.exports = Factory;