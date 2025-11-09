function createBook(title, author, year, price) {

  const book = {
    title,
    author,
    year,
    price,

   
    ["isNewBook"]: year >= 2022,

  
    getBookInfo() {
      return `Sách: "${this.title}" - Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price.toLocaleString()} VND`;
    },

  
    calculateDiscount(discountPercent) {
      const discountedPrice = this.price - (this.price * discountPercent) / 100;
      return `Giá sau giảm ${discountPercent}%: ${discountedPrice.toLocaleString()} VND`;
    }
  };

  return book;
}


const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());


console.log(book.calculateDiscount(10));
