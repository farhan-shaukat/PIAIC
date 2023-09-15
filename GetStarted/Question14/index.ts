// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let invitedPerson:string[] = ["Ali", "Ahmed", "Abdullah", "Musa"];

for (let i = 0; i < invitedPerson.length; i++) {
    console.log(`Hello ${invitedPerson[i]}, I would like to invite you to dinner today. Please be on time @ 8p.m. sharp.`);
}