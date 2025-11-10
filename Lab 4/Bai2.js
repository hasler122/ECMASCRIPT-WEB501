function swapElements(arr) {
    let temp = arr[1];
    arr[1] = arr[3];
    arr[3] = temp;
    return arr;

}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]