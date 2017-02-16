function printNumbers(args) {
    const maxNumber = +args[0];
    let result = '';

    for (let num = 0; num < maxNumber; num += 1) {
        if (num + 1 !== maxNumber) {
            result += num + 1 + ' ';            
        } else {
            result += num + 1;
        }
    }
    console.log(result);
}

printNumbers(['5']);
printNumbers(['1'])