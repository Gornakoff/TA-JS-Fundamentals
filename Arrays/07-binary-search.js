'use strict';

function binarySearch(args) {
    args = args.map(Number);

    const maxElements = args.shift(),
        searchValue = args.pop(),
        items = args.sort((a, b) => a - b);
    let startPosition = 0,
        stopPosition = maxElements - 1,
        middle = (startPosition + stopPosition) / 2 | 0;
        
    while (items[middle] !== searchValue && startPosition < stopPosition) {
        if (searchValue < items[middle]) {
            stopPosition = middle - 1;
        } else {
            startPosition = middle + 1;
        }
        middle = (startPosition + stopPosition) / 2 | 0;
    }

    if (items[middle] === searchValue) {
        console.log(middle);
    } else {
        console.log(-1);
    }
}

binarySearch(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);