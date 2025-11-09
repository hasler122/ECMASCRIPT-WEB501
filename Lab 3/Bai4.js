const shoppingCart = (customerName, ...products) => {
  return {
    customer: customerName,
    products: products,
    totalItems: products.length,
  };
};
