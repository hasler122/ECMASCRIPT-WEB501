function createProduct({ name, price, category = "general", inStock = true }) {
  return { name, price, category, inStock};
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }