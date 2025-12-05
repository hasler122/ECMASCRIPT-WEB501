//Bài 1:
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let result = '';

    if (bmi < 18.5) {
        result = 'Thiếu cân';
    } else if (bmi < 25) {
        result = 'Bình thường';
    } else if (bmi < 30) {
        result = 'Thừa cân';
    } else
        result = 'Béo phì';

    return `BMI: ${bmi.toFixed(2)} - Phân loại: ${result}`;
}

console.log(calculateBMI(70, 1.75));
