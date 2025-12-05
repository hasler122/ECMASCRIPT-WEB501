// 1. Biến và Scope (let, const)
// Bài 1: Sửa lỗi scope
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }

// Bài 2: Sử dụng const đúng cách
// const student = {
//     name: "LeNgoc",
//     age: 19,
// };
// student.grade = "A";
// student.age = 19;
// console.log(student);

// 2. Template Literals
// Bài 1: Tạo email template
// Tạo template cho email thông báo
// const user = {
//     firstName: "Le",
//     lastName: "Ngoc",
//     product: "Iphone 17 Pro Max",
//     price: 50000000,
//     orderDate: "2025-11-05",
// };

// Tạo template string cho email
// const emailTemplate = `
// Xin chào ${user.firstName} ${user.lastName},

// Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!
// Thông tin đơn hàng của bạn như sau:

// - Sản phẩm: ${user.product}
// - Giá: ${user.price.toLocaleString("vi-VN")} VNĐ
// - Ngày đặt hàng: ${user.orderDate}

// Chúng tôi sẽ sớm liên hệ để xác nhận và giao hàng trong thời gian sớm nhất.

// Trân trọng,
// Đội ngũ hỗ trợ khách hàng
// `;

// console.log(emailTemplate);

// Bài 2: Tạo HTML template
// Tạo HTML template cho card sản phẩm
// const product = {
//     name: "iPhone 17 Pro Max",
//     price: 50000000,
//     discount: 15,
//     inStock: true,
// };
// const finalPrice = product.price * (1 - product.discount / 100);

// // Tạo template dạng văn bản
// const productCard = `
// Sản phẩm: ${product.name}
// Giá gốc: ${product.price.toLocaleString("vi-VN")} VNĐ
// Giảm giá: ${product.discount}%
// Giá sau giảm: ${finalPrice.toLocaleString("vi-VN")} VNĐ
// Tình trạng: ${product.inStock ? "Còn hàng" : "Hết hàng"}
// `;

// console.log(productCard);

// 3. Enhanced Object Literals
// Bài 1: Sử dụng property và method shorthand
// const width = 100;
// const height = 200;
// const color = "red";

// const rectangle = {
//     width,
//     height,
//     color,
//     calculateArea() {
//         return this.width * this.height;
//     },
//     describe() {
//         return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
//     },
// };

// console.log(rectangle.describe());
// console.log("Diện tích:", rectangle.calculateArea());

// Bài 2: Sử dụng computed properties
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với computed properties
const config = {
    [`api_${env}_${version}`]: `https://api.example.com/${version}`,

    ...features.reduce((obj, feature) => {
        obj[`feature_${feature}`] = true;
        return obj;
    }, {}),

    [`get${env.charAt(0).toUpperCase() + env.slice(1)}Config`]() {
        return `Config cho môi trường: ${env}, phiên bản: ${version}`;
    },
};

console.log("Cấu hình hệ thống:");
console.log(config);

console.log("Gọi hàm động:");
console.log(config.getProductionConfig());