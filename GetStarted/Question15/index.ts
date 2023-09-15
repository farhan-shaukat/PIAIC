// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need tlo send out a new set of invitations. You’ll have to think of someone else to invite.

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
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