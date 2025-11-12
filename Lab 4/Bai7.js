function getOrder(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: orderId, userId: 1, productIds: [101, 102, 103] });
    }, 300);
  });
}

function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Trần Mạnh Trường" });
    }, 300);
  });
}

function getProducts(productIds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productIds.map((id) => ({ id, name: `Sản phẩm ${id}` })));
    }, 300);
  });
}


async function processOrder(orderId) {
  const order = await getOrder(orderId);
  const user = await getUser(order.userId);
  const products = await getProducts(order.productIds);
  return { order, user, products };
}

processOrder(1)
  .then((result) => console.log("Kết quả:", result))
  .catch((error) => console.error("Lỗi:", error));
