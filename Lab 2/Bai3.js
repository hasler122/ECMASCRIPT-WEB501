
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};


const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!

Thông tin đơn hàng:
- Sản phẩm: ${user.product}
- Giá: ${user.price.toLocaleString("vi-VN")} VNĐ
- Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ sớm liên hệ để xác nhận và giao hàng.

Trân trọng,
Đội ngũ Hỗ trợ Khách hàng
`;

console.log(emailTemplate);
