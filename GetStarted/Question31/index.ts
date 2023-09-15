// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let usernames:string[] = ['admin', 'umair', 'gul', 'mike', 'martin'];

// If the list is empty, print the message We need to find some users!
if(usernames.length == 0){
    console.log(`We need to find some users`)
}

usernames.splice(0, usernames.length)

if(usernames.length == 0){
    console.log(`We need to find some users`)
}