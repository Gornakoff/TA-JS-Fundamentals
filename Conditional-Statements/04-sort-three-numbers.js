function sortNumbers(args) {
    let firstNumber = +args[0],
        secondNumber = +args[1],
        thirdNumber = +args[2],
        temp;

    if (firstNumber > secondNumber) {
        if (firstNumber >= thirdNumber) {
            if (secondNumber < thirdNumber) {
                temp = secondNumber;
                secondNumber = thirdNumber;
                thirdNumber = temp;
            }
        } else {
            temp = firstNumber;
            firstNumber = thirdNumber;
            thirdNumber = secondNumber;
            secondNumber = temp;
        }
    } else if (firstNumber < secondNumber) {
        if (firstNumber >= thirdNumber) {
            if (secondNumber > thirdNumber) {
                temp = firstNumber;
                firstNumber = secondNumber;
                secondNumber = temp;
            }
        } else {
            if (secondNumber <= thirdNumber) {
                temp = firstNumber;
                firstNumber = thirdNumber;
                thirdNumber = temp;
            } else {
                temp = firstNumber;
                firstNumber = secondNumber;
                secondNumber = thirdNumber;
                thirdNumber = temp;
            }
        }
    } else {
        if (firstNumber < thirdNumber) {
            temp = firstNumber;
            firstNumber = thirdNumber;
            thirdNumber = temp;
        }
    }

    console.log(`${firstNumber} ${secondNumber} ${thirdNumber}`);
}


// Sort numbers in accending order (from smallest to biggest)

// function sortNumbers(args) {
//     let firstNumber = +args[0],
//         secondNumber = +args[1],
//         thirdNumber = +args[2],
//         temp;

//     if (firstNumber > secondNumber) {
//         if (firstNumber >= thirdNumber) {
//             if (secondNumber >= thirdNumber) {
//                 temp = firstNumber;
//                 firstNumber = thirdNumber;
//                 thirdNumber = temp;
//             } else {
//                 temp = firstNumber;
//                 firstNumber = secondNumber;
//                 secondNumber = thirdNumber;
//                 thirdNumber = temp;
//             }
//         } else {
//             temp = firstNumber;
//             firstNumber = secondNumber;
//             secondNumber = temp;
//         }
//     } else if (firstNumber < secondNumber) {
//         if (firstNumber >= thirdNumber) {
//             temp = firstNumber;
//             firstNumber = thirdNumber;
//             thirdNumber = secondNumber;
//             secondNumber = temp;
//         } else {
//             if (secondNumber >= thirdNumber) {
//                 temp = secondNumber;
//                 secondNumber = thirdNumber;
//                 thirdNumber = temp;
//             }
//         }
//     } else {
//         if (firstNumber > thirdNumber) {
//             temp = firstNumber;
//             firstNumber = thirdNumber;
//             thirdNumber = temp;
//         }
//     }

//     console.log(`${firstNumber} ${secondNumber} ${thirdNumber}`);
// }

sortNumbers(['5', '1', '2']);
sortNumbers(['-2', '-2', '1']);
sortNumbers(['-2', '4', '3']);
sortNumbers(['0', '-2.5', '5']);
sortNumbers(['-1.1', '-0.5', '-0.1']);
sortNumbers(['10', '20', '30']);
sortNumbers(['1', '1', '1']);
sortNumbers(['0', '2', '1']);
