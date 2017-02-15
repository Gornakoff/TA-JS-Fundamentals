function showSign(args) {
    const firstNumber = +args[0],
        secondNumber = +args[1],
        thirdNumber = +args[2];
    let sign = '-';

    if (firstNumber !== 0 && secondNumber !== 0 && thirdNumber !== 0) {
        if (firstNumber > 0 && secondNumber > 0 && thirdNumber > 0) {
            sign = '+';
        } else if (firstNumber > 0 && secondNumber < 0 && thirdNumber < 0) {
            sign = '+';
        } else if (firstNumber < 0 && secondNumber < 0 && thirdNumber > 0) {
            sign = '+';
        } else if (secondNumber > 0 && firstNumber < 0 && thirdNumber < 0) {
            sign = '+';
        }
    } else {
        sign = 0;
    }

    console.log(sign);
}

showSign(['5', '2', '2']);
showSign(['-2', '-2', '1']);
showSign(['-2', '4', '3']);
showSign(['0', '-2.5', '4']);
showSign(['-1', '-0.5', '-5.1']);