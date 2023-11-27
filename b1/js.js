function calculate_Factorial(x){
    if (x === 0 || x === 1){
        return 1;
    } else {
        return x * calculate_Factorial(x - 1);
    }
}
let x1 = +prompt("nhập x: ");
let result = calculate_Factorial(x1);
document.write(result);
