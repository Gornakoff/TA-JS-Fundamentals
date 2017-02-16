function calculateNumbers(args) {
    let min = +args[0],
        max = +args[0],
        sum = 0,
        average = 0,
        count = 0;

    for (let i = 0; i < args.length; i += 1) {
        let number = +args[i];

        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
        sum += number;
        count += 1;
    }

    average = sum / count;
    console.log(`min=${min.toFixed(2)}`);
    console.log(`max=${max.toFixed(2)}`);
    console.log(`sum=${sum.toFixed(2)}`);
    console.log(`avg=${average.toFixed(2)}`);
}

calculateNumbers(['2', '5', '1']);
calculateNumbers(['2', '-1', '4']);