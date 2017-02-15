function isPrimeCheck(args) {
    const number = Number(args[0]),
        maxDivider = Math.sqrt(number) | 0;
    let isPrime = true;

    if (number < 2) {
        isPrime = false;
    }

    for (let divider = 2; divider <= maxDivider; divider += 1) {
        if (number % divider === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
}

isPrimeCheck(['2']);
isPrimeCheck(['23']);
isPrimeCheck(['-3']);
isPrimeCheck(['0']);
isPrimeCheck(['1']);
isPrimeCheck(['4']);