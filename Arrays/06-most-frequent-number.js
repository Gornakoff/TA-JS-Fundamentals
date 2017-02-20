'use strict';

function repeatingNumber(args) {
    args = args.map(Number);
    const sorted = args.sort((a, b) => a - b);
    let number,
        count = 1,
        maxCount = 0;
    
    for (let i = 0; i < sorted.length; i += 1) {
        if (sorted[i] === sorted[i + 1]) {
            count += 1;
        } else {
            count = 1;
        }

        if (count > maxCount) {
            maxCount = count;
            number = sorted[i];
        }
    }
    console.log(`${number} (${maxCount} times)`);
}

repeatingNumber(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
repeatingNumber(['13', '4', '13', '4', '13']);
