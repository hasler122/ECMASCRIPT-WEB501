// Bài tập 1: Array Destructuring
// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng
function getFirstLast(array) {
    const [first, ...rest] = array;
    const last = array[array.length - 1];
    return [first, last];
}
console.log(getFirstLast([1, 2, 3, 4]));

// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
function swapElements(arr) {
    const newArr = [...arr];
    [newArr[1], newArr[3]] = [newArr[3], newArr[1]];
    return newArr;
}
console.log(swapElements([1, 2, 3, 4, 5])); 

// Bài tập 2: Object Destructuring
// Bài 1: Viết hàm extract thông tin user
const user = {
    id: 1,
    personalInfo: {
        name: "Lê Ngọc",
        contact: {
            email: "ngocletranbao58@gmail.com",
            phone: "0969068170",
        },
    },
};

function getUserInfo(user) {
    const {
        personalInfo: {
            name,
            contact: { email },
        },
    } = user;
    return { name, email };
}

console.log(getUserInfo(user));


// Bài 2: Viết hàm với tham số mặc định
function createProduct({ name, price, category = "general", inStock = true }) {
    return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 15000000 });
console.log(product);


delay(2000).then(() => console.log("2 seconds passed"));

// Bài tập 3: Promises
// Bài 1: Viết hàm delay trả về Promise
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => console.log("2 seconds passed"));

// Bài 2: Viết hàm fetchMultipleData
function fetchMultipleData(urls) {
    const requests = urls.map((url) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Fetched data from ${url}`);
            }, 1000);
        });
    });
    return Promise.all(requests);
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
    console.log(users)
);
