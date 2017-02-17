function compare(args) {
    const firstString = args[0].split(''),
        secondString = args[1].split(''),
        maxLength = Math.min(firstString.length, secondString.length);
    let sign = '=';

    for (let i = 0; i < maxLength; i += 1) {
        if (i !== maxLength) {
            if (firstString[i] > secondString[i]) {
                sign = '>';
                break;
            } else if (firstString[i] < secondString[i]) {
                sign = '<';
                break;
            }
        }
    }

    if (sign === '=' && firstString.length !== secondString.length) {
        if (firstString.length < secondString.length) {
            sign = '<';
        } else {
            sign = '>';
        }
    } 

    console.log(sign);
}

compare(['hello', 'halo']);
compare(['food', 'food']);