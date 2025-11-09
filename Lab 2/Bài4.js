const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

const finalPrice = product.price * (1 - product.discount / 100);

const productCard = `
  <div class="card" style="width: 18rem; border: 1px solid #ddd; border-radius: 10px; padding: 16px; text-align: center;">
    <h2>${product.name}</h2>
    <p>Giá gốc: <s>${product.price.toLocaleString("vi-VN")} VNĐ</s></p>
    <p>Giảm giá: ${product.discount}%</p>
    <p><strong>Giá sau giảm: ${finalPrice.toLocaleString("vi-VN")} VNĐ</strong></p>
    <p>Trạng thái: 
      ${product.inStock ? "<span style='color: green;'>Còn hàng</span>" : "<span style='color: red;'>Hết hàng</span>"}
    </p>
    <button style="padding: 8px 16px; border: none; background-color: ${product.inStock ? "#007bff" : "#ccc"}; color: white; border-radius: 5px;" ${product.inStock ? "" : "disabled"}>
      ${product.inStock ? "Mua ngay" : "Hết hàng"}
    </button>
  </div>
`;

console.log(productCard);
