function calculate(n){
    let count = 0;
    let currentNumber = n;

    while (count < 15){
        if (currentNumber %3 === 0){
            document.write(currentNumber + ", ");
            count++
        }
        currentNumber++
    }
}
calculate(3);