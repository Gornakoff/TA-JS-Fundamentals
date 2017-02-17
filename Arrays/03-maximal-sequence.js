function maxSequenceCount(args) {
    const arrLength = args.length;
    let count = 1,
        maxCount = 1;

    for (let i = 0; i < arrLength - 1; i += 1) {
        if (args[i] === args[i + 1]) {
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

maxSequenceCount(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '2']);
maxSequenceCount(['1', '1']);
maxSequenceCount([]);