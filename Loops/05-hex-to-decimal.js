function convertHexToDecimal(args) {
    let allDigits = args[0],
        digit,
        power,
        result = 0;

    for (let index = 0; index < allDigits.length; index += 1) {
        power  = allDigits.length - index - 1;
        
        digit = allDigits[index];

        if (digit === 'A') {
            digit = 10;
        } else if (digit === 'B') {
            digit = 11;
        } else if (digit === 'C') {
            digit = 12;
        } else if (digit === 'D') {
            digit = 13;
        } else if (digit === 'E') {
            digit = 14;
        } else if (digit === 'F') {
            digit = 15;
        } else {
            digit = +digit;
        }
        result += digit * (16 ** power);
    }
    console.log(result);
}

convertHexToDecimal(['FE']);
convertHexToDecimal(['1AE3']);
convertHexToDecimal(['4ED528CBB4']);