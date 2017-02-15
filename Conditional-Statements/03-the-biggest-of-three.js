function biggestNumber(args) {
    const firstNumber = +args[0],
        secondNumber = +args[1],
        thirdNumber = +args[2];

    if (firstNumber > secondNumber) {
        if (firstNumber > thirdNumber) {
            console.log(firstNumber);
        } else {
            console.log(thirdNumber);
        }
    } else if (firstNumber < secondNumber) {
        if (secondNumber > thirdNumber) {
            console.log(secondNumber);
        } else {
            console.log(thirdNumber);
        }
    } else {
        if (firstNumber < thirdNumber) {
            console.log(thirdNumber);
        } else {
            console.log(firstNumber);
        }
    }
}

biggestNumber(['5', '2', '2']);
biggestNumber(['-2', '-2', '1']);
biggestNumber(['-2', '4', '3']);
biggestNumber(['0', '-2.5', '5']);
biggestNumber(['-0.1', '-0.5', '-1.1']);