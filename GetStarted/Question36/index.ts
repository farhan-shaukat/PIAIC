// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt = (size:string, message:string):void => {
    console.log(`The size of your shirt is ${size}. The message printed on the shirt is ${message}`);
}

make_shirt('medium', 'You are awesome!')