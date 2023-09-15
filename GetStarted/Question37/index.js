"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
const make_shirt = (size = "large", message = "I love Typescript.") => {
    console.log(`The size of your shirt is ${size}. The message printed on the shirt is ${message}`);
};
make_shirt();
make_shirt('medium');
make_shirt('medium', "I love Tyescript for Everyone.");
