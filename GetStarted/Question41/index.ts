// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians:string[] = ["John Ducket", "James Manhon", "Alex Green"];

let show_magicians = (magicians:string[]) => {
    magicians.forEach((ele) => {
        console.log(ele);
    })
}

show_magicians(magicians)