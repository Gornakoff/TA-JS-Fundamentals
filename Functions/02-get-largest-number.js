'use strict';

function largestNumber(args) {
    let numbers = args[0].split(' ').map(Number);

    function GetMax(input) {
        let maxNum = input[0];

        for (let i = 0; i < input.length; i += 1) {
            if (input[i] > maxNum) {
                maxNum = input[i];
            }
        }
        return maxNum;
    }

    console.log(GetMax(numbers));
}

largestNumber(['8 3 6']);
largestNumber(['7 19 19']);