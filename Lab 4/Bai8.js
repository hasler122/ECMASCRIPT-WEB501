async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message || error };
  }
}


async function getData(id) {
  if (id === 0) throw new Error("ID không hợp lệ");
  return { id, name: "Sản phẩm mẫu" };
}

async function main() {
  const successCase = await safeApiCall(getData, 1);
  console.log(successCase);
  // 👉 { success: true, data: { id: 1, name: 'Sản phẩm mẫu' } }

  const failCase = await safeApiCall(getData, 0);
  console.log(failCase);
  // 👉 { success: false, error: 'ID không hợp lệ' }
}

main();
