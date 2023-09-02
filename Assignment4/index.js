"use strict";
// 1 Write a program that uses filter to remove all negative numbers from an array of numbers
function removeNegativeNumbers(numbers) {
    return numbers.filter((number) => number >= 0);
}
const numbArray = [1, -2, 3, -4, 5, -6];
const positiveNumbersArray = removeNegativeNumbers(numbArray);
console.log('Array with negative numbers removed:', positiveNumbersArray);
// 2 Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map((number) => number * 2);
console.log('Original array:', originalArray);
console.log('Array with each number multiplied by 2:', doubledArray);
// 3 Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
const fruitsArray = ["apple", "banana", "cherry", "date", "grape"];
const longFruitsArray = fruitsArray.filter((fruit) => fruit.length > 5);
console.log('Original array:', fruitsArray);
console.log('Fruits with more than 5 characters:', longFruitsArray);
// 4 Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaresOfEvenNumbersArray = numbersArray
    .filter((number) => number % 2 === 0) // Filter even numbers
    .map((evenNumber) => evenNumber ** 2); // Square each even number
console.log('Original array:', numbersArray);
console.log('Squares of even numbers:', squaresOfEvenNumbersArray);
// 5 Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const celsiusTemperatures = [0, 10, 20, 30, 40];
const fahrenheitTemperatures = celsiusTemperatures.map((celsius) => (celsius * 9 / 5) + 32);
console.log('Celsius Temperatures:', celsiusTemperatures);
console.log('Fahrenheit Temperatures:', fahrenheitTemperatures);
// 6 Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
const numbArray2 = [3, 6, 9, 12, 15, 18];
const doubledOddNumbersArray = numbArray2
    .filter((number) => number % 2 !== 0) // Filter odd numbers
    .map((oddNumber) => oddNumber * 2); // Double each odd number
console.log('Original array:', numbArray2);
console.log('Doubled values of odd numbers:', doubledOddNumbersArray);
// 7 Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
const namesArray = ["Alice", "Bob", "Charlie", "David", "Emily"];
namesArray.forEach((name) => {
    console.log(`${name}!`);
});
