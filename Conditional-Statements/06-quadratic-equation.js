function solveEquation(args) {
    const a = +args[0],
        b = +args[1],
        c = +args[2],
        descriminant = b * b - (4 * a * c);
    let x1,
        x2,
        temp,
        result;

    if (descriminant > 0) {
        x1 = (-b - Math.sqrt(descriminant)) / (2 * a);
        x2 = (-b + Math.sqrt(descriminant)) / (2 * a);

        if (x1 > x2) {
            temp = x1;
            x1 = x2;
            x2 = temp;
        }

        result = `x1=${x1.toFixed(2)}; x2=${x2.toFixed(2)}`;

    } else if (descriminant === 0) {
        x1 = (-b) / (2 * a);
        result = `x1=x2=${x1.toFixed(2)}`;

    } else {
        result = 'no real roots';
    }

    console.log(result);
}

solveEquation(['2', '5', '-3']);
solveEquation(['-1', '3', '0']);
solveEquation(['-0.5', '4', '-8']);
solveEquation(['5', '2', '8']);
solveEquation(['0.2', '9.572', '0.2']);