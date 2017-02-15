function digitAsWord(args) {
    const digit = +args[0];
    let word;

    switch (digit) {
    case 0:
        word = 'zero';
        break;
    case 1:
        word = 'one';
        break;
    case 2:
        word = 'two';
        break;
    case 3:
        word = 'three';
        break;
    case 4:
        word = 'four';
        break;
    case 5:
        word = 'five';
        break;
    case 6:
        word = 'six';
        break;
    case 7:
        word = 'seven';
        break;
    case 8:
        word = 'eight';
        break;
    case 9:
        word = 'nine';
        break;
    default:
        word = 'not a digit';
        break;
    }

    console.log(word);
}

digitAsWord(['0']);
digitAsWord(['1']);
digitAsWord(['2']);
digitAsWord(['3']);
digitAsWord(['4']);
digitAsWord(['5']);
digitAsWord(['6']);
digitAsWord(['7']);
digitAsWord(['8']);
digitAsWord(['9']);
digitAsWord(['10']);
digitAsWord(['-1']);
digitAsWord(['hi']);
