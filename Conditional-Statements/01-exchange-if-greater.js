function exchange(args) {
    let firstNumber = +args[0],
        secondNumber = +args[1],
        temp;
    
    if (firstNumber > secondNumber) {
        temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }
    console.log(`${firstNumber} ${secondNumber}`);
}

exchange(['5', '2']);
exchange(['3', '4']);
exchange(['5.5', '4.5'])
exchange(['-1', '-1.5']);