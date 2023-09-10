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
    [5, 6],
];

const combineNumbers = nestedArray.reduce(
    (acc, total) => acc.concat(total), []
);
console.log(combineNumbers);

const fruits2 = ["apple", "banana", "apple", "cherry", "banana", "apple"];
// const totalCount = fruits2.reduce((pre, next) => pre[next])

const items = [{
        name: "Laptop",
        price: 1000,
    },
    {
        name: "Smartphone",
        price: 500,
    },
    {
        name: "Tablet",
        price: 300,
    },
];

const totalAmount = items.reduce((current, next) => current + next.price, 0);
// console.log(totalAmount)

// Filtering Arrays with filter:

const evenNumber = numbers1.filter((num) => num % 2 === 0);
// console.log(evenNumber)

// Finding the Most Frequent Element in an Array:

const numbers3 = [1, 2, 2, 3, 4, 4, 4, 5];
const mostFrequentNumber = numbers3.reduce((cur, prev) => {
    cur[prev] = (cur[prev] || 0) + 1;
    return cur;
}, {});
console.log(mostFrequentNumber);

const mySet = new Set([1, 2, 3, 4, 5]);

for (const item of mySet) {
    // console.log(item);
}

// Map() in javascript

const people = [{
        name: "Alice",
        age: 25,
    },
    {
        name: "Bob",
        age: 30,
    },
    {
        name: "Charlie",
        age: 35,
    },
];
const names = people.map((person) => person.name);
console.log(names);

const additional = 2;

const scaledNumber = numbers3.map((num) => num * additional);
console.log(scaledNumber);

const peopleData = people.map((p) => ({
    name: p.name,
    age: p.age,
    allow: p.age >= 30 ? "Allow" : "Not Allow",
}));
console.log(peopleData);

const stringNumbers = ["1", "2", "3", "4", "5"];
const getInNumber = stringNumbers.map((n) => parseInt(n));
console.log(getInNumber);

const apiData = [{
        id: 1,
        title: "Introduction to JavaScript",
        date: "2023-01-10",
    },
    {
        id: 2,
        title: "Building Responsive Websites",
        date: "2023-02-15",
    },
    // ...
];

const formattedData = apiData.map((ad) => ({
    id: ad.id,
    title: ad.title,
    formattedDate: new Date(ad.date).toLocaleDateString(),
}));
console.log(formattedData);

const formConfig = [
    { type: 'text', label: 'Name', name: 'name' },
    { type: 'email', label: 'Email', name: 'email' },
    // ...
];

const formFields = formConfig.map((field, index) => ( <
    input key = { index }
    type = { field.type }
    name = { field.name }
    placeholder = { field.label }
    />
));

//   return <form>{formFields}</form>;
console.log(formFields)