"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings;
let person = "Abdullah";
console.log(person == "Abdullah");
console.log(person == "abdullah");
// Tests using the lower case function;
var person1 = "Sheikh Shoaib";
var person2 = "sheikh shoaib";
console.log(person1.toLowerCase() == person2);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 259;
console.log(`Number is greater than 200 is ${number > 200}`);
console.log(`Number is less than 300 is ${number < 300}`);
console.log(`Number is greater than equal to 230 is ${number >= 230}`);
console.log(`Number is less than or equal to 149 is ${number <= 149}`);
// Tests using "and" and "or" operators
console.log(number > 140 && number < 260);
console.log(number > 100 || number < 200);
// Test whether an item is in a array
const numArray = [5, 8, 3, 9, 1, 0, 2, 7];
console.log(numArray.includes(7));
// Test whether an item is not in a array
console.log(numArray.includes(4));
