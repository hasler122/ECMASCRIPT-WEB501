//Bài 2:
function createBook(title, author, year, price) {
    const book = {
        title,
        author,
        year,
        price,
        getBookInfo() {
            return `sách: ${this.title}  - Tác giả: ${this.author} - Năm xuất bản: ${this.year} - Giá: ${this.price.toLocaleString()} VNĐ`;
        },

        calculateDiscount(discount) {
            const finalPrice = this.price - (this.price * discount / 100);
            return `Giá sau khi giảm ${discount}% là: ${finalPrice.toLocaleString()} VNĐ`;
        }
    };

    return book;
}

// Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10)); // Giảm 10%