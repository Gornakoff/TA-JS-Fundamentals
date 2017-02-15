function solve(args) {
    const number = Number(args[0]);

    if (number % 7 === 0 && number % 5 === 0) {
        console.log(`true ${number}`);
    } else {
        console.log(`false ${number}`);
    }
}

solve(['0']);
solve(['5']);
solve(['7']);
solve(['35']);
solve(['140']);
