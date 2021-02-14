class ProductList {
  constructor() {
    this.items = [];
  }

  add(num) {
    this.items.push(num);
  }

  product(lastItems) {
    return this.items.slice(this.items.length - lastItems, this.items.length).reduce((prev, curr) => prev * curr);
  }
}

const list1 = new ProductList();
list1.add(2); // [2]
list1.add(4);  // [2, 4]
list1.add(2);  // [2, 4, 2]
list1.add(3);  // [2, 4, 2, 3]
list1.add(4);  // [2, 4, 2, 3, 4]
console.log(list1.product(3)); // return 24 because 2 * 3 * 4