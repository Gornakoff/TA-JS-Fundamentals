function findThirdDigit(args) {
    const str = args[0],
        position = str.length - 3,
        digit = str[position] || 0;

    if (digit == 7) {
        console.log('true');        
    } else {
        console.log(`false ${digit}`);     
    }
}

findThirdDigit(['5']);
findThirdDigit(['701']);
findThirdDigit(['9703']);
findThirdDigit(['877']);
findThirdDigit(['777877']);
findThirdDigit(['9999799']);