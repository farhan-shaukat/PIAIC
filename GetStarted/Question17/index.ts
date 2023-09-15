// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let invitedPerson:string[] = ["Ali", "Ahmed", "Abdullah", "Musa"];

for (let i = 0; i < invitedPerson.length; i++) {
    console.log(`Hello ${invitedPerson[i]}, I would like to invite you to dinner today. Please be on time @ 8p.m. sharp.`);
}

let missingGuest:string = "Ali";
console.log(`For some personal reasons ${missingGuest} cannot come today.`);

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
invitedPerson.splice(0,1,"Abdul Hadi")
console.log(`Lets update our list with the new guests ${invitedPerson}`);

// Print a second set of invitation messages, one for each person who is still in your list.
for(let i=0;i<invitedPerson.length;i++){
    console.log(`Hello ${invitedPerson[i]}, I would like to invite you to dinner today. Please be on time @ 8p.m. sharp.`);
}

console.log("---------------------------------------------------------------------");
console.log("Hey guys! I have a good news for you. I just found a bigger dinner table and I will be inviting more friends to the dinner tonight. Hurray!");

// Add one new guest to the beginning of your array.
invitedPerson.unshift("Qamar");

// Add one new guest to the middle of your array.
const listMiddle = invitedPerson.length/2;
invitedPerson.splice(listMiddle, 0, "Qasim")

// Use append() to add one new guest to the end of your list.
invitedPerson.push("Faisal");

// Print a new set of invitation messages, one for each person in your list.
for(let i=0;i<invitedPerson.length;i++){
    console.log(`Hey ${invitedPerson[i]}, I would like to invite you to dinner today. Please be on time @ 8p.m. sharp.`);
}

console.log("---------------------------------------------------------------------");
console.log("Sorry guys, I have a bad news for you all. I can only invite two friends tonight for the dinner. The new dinner table is late. :(");
console.log("---------------------------------------------------------------------");

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let listLenght:number = invitedPerson.length;
for(let i = 0; i < listLenght - 2; i++){
    let personRemoved = invitedPerson.pop();
    console.log(`Sorry ${personRemoved}, due to some reason, I wont be able to host you tonight.`);
}

for(let i = 0; i < 2; i++){
    invitedPerson.pop();
}

console.log(invitedPerson);