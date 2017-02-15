function solve(args) {
    const number = Number(args[0]);

    if (number % 2 === 0) {
        console.log(`even ${number}`);
    } else {
        console.log(`odd ${number}`);
    }
}

solve(['-2']);
solve(['-1']);