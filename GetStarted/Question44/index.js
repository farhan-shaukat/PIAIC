"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log("Sandwich making in progress:");
    for (var item in items) {
        console.log("  [adding " + items[item] + " to your sandwich.]");
    }
    console.log("The sandwich is ready!");
    console.log("----------------------");
}
make_sandwich('Chicken', 'Mayonees', 'Salad', 'Cucumber');
make_sandwich('Chicken', 'Mayonees', 'Cucumber');
make_sandwich('Chicken', 'Mayonees', 'Salad');
