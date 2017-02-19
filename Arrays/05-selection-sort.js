'use strict';

function sort(args) {
    const count = args[0];
    let minNum,
        nextNumber,
        elements = args.splice(1),    
        position;

    for (let index = 0; index < count; index += 1) {
        minNum = +elements[index];
        position = index;
        
        for (let nextIndex = index + 1; nextIndex < count; nextIndex += 1) {
            nextNumber = +elements[nextIndex];
            if (nextNumber < minNum) {
                minNum = nextNumber;
                position = nextIndex;
            }
        }

       if (position !== index) {
            elements.splice(position, 1);
            elements.splice(index, 0, minNum);
       }       
        console.log(elements[index]);
    }
}


sort(['6', '3', '4', '1', '5', '2', '6']);
sort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);