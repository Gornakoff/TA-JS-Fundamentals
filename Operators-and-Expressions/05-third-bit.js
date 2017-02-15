function getThirdBit(args) {
    const number = Number(args[0]),
        mask = 1 << 3,
        result = (number & mask) >> 3;

    console.log(result);
}

getThirdBit(['-11']);
getThirdBit(['15']);
getThirdBit(['1024']);
getThirdBit(['100']);
