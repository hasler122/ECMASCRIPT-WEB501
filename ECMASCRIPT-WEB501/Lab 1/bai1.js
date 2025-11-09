function calculateBMI(weight, height) {

  const bmi = weight / (height * height);
  let category = "";


  if (bmi < 18.5) {
    category = "Thiếu cân";
  } else if (bmi < 25) {
    category = "Bình thường";
  } else if (bmi < 30) {
    category = "Thừa cân";
  } else {
    category = "Béo phì";
  }


  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
}


console.log(calculateBMI(70, 1.75));
