// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type laptopType = {
    name: string,
    model: string,
    hardDrive: string,
    RAM: string
}

const laptop:laptopType = {
    name: 'MacBook Pro',
    model: '2021',
    hardDrive: '2 TB',
    RAM: '16 GB'
}

console.log(laptop);
