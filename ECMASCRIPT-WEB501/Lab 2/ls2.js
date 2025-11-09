function varExample() {
  if (true) {
    var x = 10;
  }
  console.log(x); 
}


varExample();

// vd về const

function constExample() {
  const PI = 3.14;
  // PI = 3.15; // TypeError: Assignment to constant variable

  const person = { name: "hoadv" };
  person.name = "vanhoa"; // ✅ Được phép - thay đổi thuộc tính
  // person = { name: "Bob" }; // ❌ Không được - reassign
}
constExample();




const name = "hoadv";
const age = 25;
console.log(`Xin chào, tôi là ${name}, năm nay ${age} tuổi.`);


const message = `Đây là dòng đầu tiên
Đây là dòng thứ hai
Và đây là dòng thứ ba`;


const a = 5;
const b = 10;
console.log(`Tổng của ${a} và ${b} là ${a + b}`);


function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
console.log(`Bây giờ là: ${getCurrentTime()}`);

