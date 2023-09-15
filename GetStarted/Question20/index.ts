// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let locations:string[] = ["Australia", "New zealand", "Ireland", "England", "Canada"];

console.log("Countries I would like to visit:");

for(let i = 0; i < locations.length; i++){
    console.log(locations[i]);
}
