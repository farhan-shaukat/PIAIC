"use strict";
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array.
numbers.forEach((element) => {
    if (element == 1) {
        console.log(`${element}st`);
    }
    else if (element == 2) {
        console.log(`${element}nd`);
    }
    else if (element == 3) {
        console.log(`${element}rd`);
    }
    else {
        console.log(`${element}th`);
    }
});
