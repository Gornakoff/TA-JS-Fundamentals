'use strict';

function getMaxIncreasedSequence(args) {
    const arrLength = args.length;
    let count = 1,
        maxCount = 0;

    for (let index = 0; index < arrLength  - 1; index += 1) {
        if (+args[index] < +args[index + 1]) {
            count += 1;
        } else {
            count = 1;
        }

        if (count > maxCount) {
            maxCount = count;
        }
    }

    console.log(maxCount);
}

getMaxIncreasedSequence(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
getMaxIncreasedSequence(['8', '3', '4']);
