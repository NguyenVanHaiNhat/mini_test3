
function findNumber(arr){
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
let arr = [1, 2, 3, 4, 5, -1, -2, -3, -20, 12, 15];
let result = [];
result = findNumber(arr);
document.write(result);