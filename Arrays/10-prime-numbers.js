'use strict';

// function getBiggestPrime(args) {
//     const number = +args[0];
//     let result,
//         isPrime = true;

//     for (let i = 3; i <= number; i += 1) {
//         isPrime = true;
//         for (let j = 2; j <= Math.sqrt(number); j += 1) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             result = i;
//         }
//     }

//     console.log(result);
// }

function getBiggestPrime(args) {
    let number = args[0],
        isPrime = true;

    while (number > 3) {
        isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i += 1) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return console.log(number);
        }
        number -= 1;
    }
}

getBiggestPrime(['13']);
getBiggestPrime(['126']);
getBiggestPrime(['26']);