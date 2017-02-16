function printMatrix(args) {
    const matrixSize = +args[0];
    let start,
        result = '';

    for (let row = 0; row < matrixSize; row += 1) {
        for (let col = 0; col < matrixSize; col += 1) {
            start = row + col + 1;            
            if (col + 1 !== matrixSize ) {
                result += start + ' ';
            } else {
                result += start;
            }
        }
        console.log(result);
        result = '';
    }
}

// Print matrix without nested loops 
// ===============================================================

// function printMatrix(args) {
//     const matrixSize = +args[0];
//     let start = 1,
//         count = 0,
//         nextLineStartNumber = 2,
//         result = '';

//     while (count < matrixSize ** 2 ) {
//         count += 1;

//         if (count % matrixSize !== 0) {
//             result += start + ' ';              
//         } else {
//             result += start
//         }
//         start += 1;        
        
//         if (start === nextLineStartNumber + matrixSize - 1) {
//             console.log(result);
//             result = '';
//             start = nextLineStartNumber;            
//             nextLineStartNumber += 1;
//         }
//     }
// }

printMatrix(['2']);
printMatrix(['3']);
printMatrix(['4']);
printMatrix(['5']);