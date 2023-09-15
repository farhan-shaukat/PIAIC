// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
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