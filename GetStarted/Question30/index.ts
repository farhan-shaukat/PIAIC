// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let usernames:string[] = ['admin', 'umair', 'gul', 'mike', 'martin'];

usernames.forEach((user) => {
    if(user == "admin"){
        console.log(`Hello ${user}, would you like to see a status report`)
    }
    else{
        console.log(`Hello ${user}, thankyou for logging in again`)
    }
})