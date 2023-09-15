// Seeing the World: Think of at least five places in the world you’d like to visit.

// Store the locations in a array. Make sure the array is not in alphabetical order.

let locations:string[] = ["Australia", "New zealand", "Ireland", "England", "Canada"];

// Print your array in its original order.
console.log(locations);

// Print your array in alphabetical order without modifying the actual list.
const sortedLocations = locations.slice();

// Sort the copied array
sortedLocations.sort((a:string, b:string) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});

console.log('Sorted Locations:', sortedLocations);

// Show that your array is still in its original order by printing it.

console.log('Original Locations:', locations);

sortedLocations.sort((a:string, b:string) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse Sorted Locations:', sortedLocations);

// Show that your array is still in its original order by printing it again.
console.log('Original Locations:', locations);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('Reversed Locations:', locations.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Original Locations:', locations.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Sorted Locations:', locations.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Sorted Locations:', locations.sort().reverse());