function numberAsWords(args) {
    const number = +args[0];
    let ones = number % 10,
        teens,
        tens = number % 100,
        hundreds = number / 100 | 0,
        word;

        if (tens >= 10 && tens < 20) {
            teens = tens;
        } else {
            tens = tens / 10 | 0;
        }

        if (hundreds) {
            word = getHundreds(hundreds);
            if (teens) {
             word += ` and ${getTeens(teens).toLowerCase()}`;
            } else if (tens) {
                word += ` and ${getTens(tens).toLowerCase()}`;
                
                if (ones > 0) {
                    word += ' ' + getOnes(ones).toLowerCase();
                }
            } else if (ones > 0) {
                word += ` and ${getOnes(ones).toLowerCase()}`;            
            }
        } else if (teens) {
            word = getTeens(teens);
        } else if (tens) {
            word = `${getTens(tens)}`;
            if (ones > 0) {
                word += ` ${getOnes(ones).toLowerCase()}`;
            }
        } else {
            word = getOnes(ones);
        }
    console.log(word);

    function getOnes(number) {
    let ones;

        if (number === 0 && number !== '') {
            ones = 'Zero';
        } else if (number === 1) {
            ones = 'One';
        } else if (number === 2) {
            ones = 'Two';
        } else if (number === 3) {
            ones = 'Three';
        } else if (number === 4) {
            ones = 'Four';
        } else if (number === 5) {
            ones = 'Five';
        } else if (number === 6) {
            ones = 'Six';
        } else if (number === 7) {
            ones = 'Seven';
        } else if (number === 8) {
            ones = 'Eight';
        } else if (number === 9) {
            ones = 'Nine';
        }
        return ones;
    }

    function getTeens(number) {
        let teens;

        if (number === 10) {
            teens = 'Ten';
        } else if (number === 11) {
            teens = 'Eleven';
        } else if (number === 12) {
            teens = 'Twelve';
        } else if (number === 13) {
            teens = 'Thirteen';
        } else if (number === 14) {
            teens = 'Fourteen';
        } else if (number === 15) {
            teens = 'Fifteen';
        } else if (number === 16) {
            teens = 'Sixteen';
        } else if (number === 17) {
            teens = 'Seventeen';
        } else if (number === 18) {
            teens = 'Eighteen';
        } else if (number === 19) {
            teens = 'Nineteen';
        }
        return teens;
    }

    function getTens(number) {
        let tens;

        if (number === 2) {
            tens = 'Twenty';
        } else if (number === 3) {
            tens = 'Thirty'
        } else if (number === 4) {
            tens = 'Forty';
        } else if (number === 5) {
            tens = 'Fifty';
        } else if (number === 6) {
            tens = 'Sixty';
        } else if (number === 7) {
            tens = 'Seventy';
        } else if (number === 8) {
            tens = 'Eighty';
        } else if (number === 9) {
            tens = 'Ninety';
        } 
        return tens;
    }
        
    function getHundreds(number) {
        let hundreds;

        if (number === 1) {
            hundreds = 'One hundred';
        } else if (number === 2) {
            hundreds = 'Two hundred';
        } else if (number === 3) {
            hundreds = 'Three hundred';
        } else if (number === 4) {
            hundreds = 'Four hundred';
        } else if (number === 5) {
            hundreds = 'Five hundred';
        } else if (number === 6) {
            hundreds = 'Six hundred'
        } else if (number === 7) {
            hundreds = 'Seven hundred';
        } else if (number === 8) {
            hundreds = 'Eight hundred';
        } else if (number === 9) {
            hundreds = 'Nine hundred';
        } 
        return hundreds;
    }
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
numberAsWords(['120']);
