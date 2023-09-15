"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["John Ducket", "James Manhon", "Alex Green"];
let show_magicians = (magicians) => {
    magicians.forEach((ele) => {
        console.log(ele);
    });
};
show_magicians(magicians);
