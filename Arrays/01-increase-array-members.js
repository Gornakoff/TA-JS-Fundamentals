function increaseElements(args) {
    const arrLength = +args[0];
    let arr = [];

    for (let i = 0; i < arrLength; i += 1) {
        arr.push(i * 5);
    }

    console.log(arr.join('\n'));
}

increaseElements(['5']);