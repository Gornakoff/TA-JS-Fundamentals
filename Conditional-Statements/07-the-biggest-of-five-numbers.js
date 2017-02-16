function biggestNumber(args) {
    const firstNum = +args[0],
        secondNum = +args[1],
        thirdNum = +args[2],
        fourthNum = +args[3],
        fifthNum = +args[4];
    let biggestNum = firstNum;

    if (!isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum) && !isNaN(fourthNum) && !isNaN(fifthNum)) {
        if (biggestNum < secondNum) {
        biggestNum = secondNum;
        }
        if (biggestNum < thirdNum) {
            biggestNum = thirdNum;
        }
        if (biggestNum < fourthNum) {
            biggestNum = fourthNum;
        }
        if (biggestNum < fifthNum) {
            biggestNum = fifthNum;
        }
        console.log(biggestNum);
    }
}

biggestNumber(['5', '2', '2', '4', '1']);
biggestNumber(['-2', '-22', '1', '0', '0']);
biggestNumber(['-2', '4', '3', '2', '0']);
biggestNumber(['0', '-2.5', '0', '5', '5']);
biggestNumber(['-3', '-0.5', '-1.1', '-2', '-0.1']);