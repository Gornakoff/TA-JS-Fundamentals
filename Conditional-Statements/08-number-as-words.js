function numberAsWords(args) {
    const number = +args[0];
    let ones,
        tens,
        hundreds,
        onesWord,
        tensWord,
        hundredsWord,
        word;

    if (number < 10) {
        ones = number;
    } else if (number < 100) {
        ones = number % 10;
        tens = number % 100;
        if (tens > 19) {
            tens = (number / 10 | 0) * 10;
        }
    } else if (number < 1000) {
        ones = number % 10;
        tens = number % 100 / 10;
        if (tens >= 1 && tens < 2) {
            tens *= 10;  
        } else {
            tens = (tens | 0) * 10;
        }
        hundreds = number / 100 | 0;
    }

    if (ones >= 0 && ones <= 9) {
        if (ones === 0) {
            onesWord = 'Zero';
        } else if (ones === 1) {
            onesWord = 'One';
        } else if (ones === 2) {
            onesWord = 'Two';
        } else if (ones === 3) {
            onesWord = 'Three';
        } else if (ones === 4) {
            onesWord = 'Four';
        } else if (ones === 5) {
            onesWord = 'Five';
        } else if (ones === 6) {
            onesWord = 'Six';
        } else if (ones === 7) {
            onesWord = 'Seven';
        } else if (ones === 8) {
            onesWord = 'Eight';
        } else if (ones === 9) {
            onesWord = 'Nine';
        }
    }

    if (tens >= 10 && tens < 100) {
        if (tens === 10) {
            tensWord = 'Ten';
        } else if (tens === 11) {
            tensWord = 'Eleven';
        } else if (tens === 12) {
            tensWord = 'Twelve';
        } else if (tens === 13) {
            tensWord = 'Thirteen';
        } else if (tens === 14) {
            tensWord = 'Fourteen';
        } else if (tens === 15) {
            tensWord = 'Fifteen';
        } else if (tens === 16) {
            tensWord = 'Sixteen';
        } else if (tens === 17) {
            tensWord = 'Seventeen';
        } else if (tens === 18) {
            tensWord = 'Eighteen';
        } else if (tens === 19) {
            tensWord = 'Nineteen';
        } else if (tens === 20) {
            tensWord = 'Twenty';
        } else if (tens === 30) {
            tensWord = 'Thirty';
        } else if (tens === 40) {
            tensWord = 'Forty';
        } else if (tens === 50) {
            tensWord = 'Fifty';
        } else if (tens === 60) {
            tensWord = 'Sixty';
        } else if (tens === 70) {
            tensWord = 'Seventy';
        } else if (tens === 80) {
            tensWord = 'Eighty';
        } else if (tens === 90) {
            tensWord = 'Ninety';
        } 
    }
    
    if (hundreds >= 1 && hundreds <= 9) {
        if (hundreds === 1) {
            hundredsWord = 'One hundred';
        } else if (hundreds === 2) {
            hundredsWord = 'Two hundred';
        } else if (hundreds === 3) {
            hundredsWord = 'Three hundred';
        } else if (hundreds === 4) {
            hundredsWord = 'Four hundred';
        } else if (hundreds === 5) {
            hundredsWord = 'Five hundred';
        } else if (hundreds === 6) {
            hundredsWord = 'Six hundred'
        } else if (hundreds === 7) {
            hundredsWord = 'Seven hundred';
        } else if (hundreds === 8) {
            hundredsWord = 'Eight hundred';
        } else if (hundreds === 9) {
            hundredsWord = 'Nine hundred';
        } 
    }

    if (number < 10 ) {
        word = onesWord;
    } else if (number < 20) {
        word = tensWord;
    } else if (number < 100) {
        if (ones > 0) {
            word = `${tensWord} ${onesWord.toLowerCase()}`;
        } else {
            word = tensWord;
        }
    } else if (number < 1000) {
        if (tens > 9 && tens < 20) {
            word = `${hundredsWord} and ${tensWord.toLowerCase()}`;
        } else if (tens < 10 && ones > 0) {
            word = `${hundredsWord} and ${onesWord.toLowerCase()}`;
        } else if (tens > 19) {
            if (ones === 0) {
                word = `${hundredsWord} and ${tensWord.toLowerCase()}`;
            } else {
                word = `${hundredsWord} and ${tensWord.toLowerCase()} ${onesWord.toLowerCase()}`;
            }
        } else {
            word = `${hundredsWord}`;
        }
    }

    console.log(word);
}

numberAsWords(['0']);
numberAsWords(['9']);
numberAsWords(['10']);
numberAsWords(['12']);
numberAsWords(['19']);
numberAsWords(['25']);
numberAsWords(['98']);
numberAsWords(['273']);
numberAsWords(['400']);
numberAsWords(['501']);
numberAsWords(['617']);
numberAsWords(['711']);
numberAsWords(['999']);

numberAsWords(['103']);
numberAsWords(['409']);
numberAsWords(['502']);
numberAsWords(['510']);

