// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// Make a list of five or more usernames called current_users.
let current_users:string[] = ['Admin', 'umair', 'gul', 'mike', 'martin'];

let new_users:string[] = ['admin', 'sami', 'gul', 'taha', 'Abdullah'];

const current_users_lowercase = current_users.map(element => {
    return element.toLowerCase();
});

// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for(let i=0; i < new_users.length; i++){
    let new_user_lowercase = new_users[i].toLowerCase();
    if (current_users_lowercase.includes(new_user_lowercase)){
        console.log(`Username ${new_user_lowercase} is already in use`);
    } else {
        console.log(`Username ${new_user_lowercase} is available`);
    }
}