"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person = "eric micheal jackson";
console.log("Name (Uppercase): " + person.toUpperCase());
console.log("Name (Uppercase): " + person.toLowerCase());
let words = person.split(" ");
let titlecaseName = " ";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log("Name (Titlecase): " + titlecaseName);
