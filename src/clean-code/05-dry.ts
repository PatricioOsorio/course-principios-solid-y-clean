type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  _name: string;
  _price: number;
  _size: Size;

  constructor(name: string, price: number = 0, size: Size = '') {
    this._name = name;
    this._price = price;
    this._size = size;
  }

  isProductValid(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (!this[key]) throw new Error(`Product ${key} is empty`);

        case 'number':
          if ((this[key] as number) <= 0) throw new Error(`Product ${key} cannot be zero or negative`);

        default:
          throw new Error(`Product ${key} is not valid`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductValid()) return;

    return `Product: ${this._name} - Price: $${this._price} - Size: ${this._size}`;
  }
}

(() => {
  const bluePants = new Product('Blue Pants', 10);
  console.log(bluePants.toString());
})();
