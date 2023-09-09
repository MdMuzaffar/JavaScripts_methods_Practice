// loop

for (let i = 0; i < 10; i++) {
    // console.log(i)
}

for (let j = 10; j > 1; j--) {
    // console.log(j)
}

const numbers = [10, 20, 30, 40];

for (let k = 0; k < numbers.length; k++) {
    // console.log(numbers[k])
}

const fruits = ["apple", "banana", "cherry", "date"];
for (let l = 0; l < fruits.length; l++) {
    // console.log(fruits[l]);
}

const num = [10, 20, 30, 4, 5];

for (let m = 0; m < num.length; m++) {
    // console.log(num[m])
}


for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
        // console.log(i * j);
    }
}
// Array Elements with reduce:

const numbers1 = [1, 2, 3, 4, 5];

const sum = numbers1.reduce((pre, next) => pre + next, 0);
// console.log(sum)

const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const combineNumbers = nestedArray.reduce((acc, total) => acc.concat(total), []);
console.log(combineNumbers)

// Filtering Arrays with filter:

const evenNumber = numbers1.filter((num) => num % 2 === 0);
// console.log(evenNumber)

const mySet = new Set([1, 2, 3, 4, 5]);

for (const item of mySet) {
    // console.log(item);
}