const mergeArrays = (...arrays) => [].concat(...arrays);
const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);
const createProduct = ({ name = "Sản phẩm mới", price = 0, quantity = 1 } = {}) => {
  return { name, price, quantity };
};

