const x = 1
let y = 5

console.log(x, y)  // 1, 5 are printed
y += 10
console.log(x, y)  // 1, 15 are printed
y = 'sometext'
console.log(x, y)  // 1, sometext are printed

const t = [1, -1, 3]

t.push(5)

console.log(t.length)  // 4 is printed
console.log(t[1])      // -1 is printed

t.forEach(value => {
    console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})


// React prefers immutable data structures
// array.push(5) changes the array whereas array.concat(5) creates a new array


const t = [1, 2, 3]
const m1 = t.map(value => value * 2)
console.log(m1)  // [2, 4, 6] is printed

// Map creates a new array based off of the given function


const m2 = t.map(value => '<li>' + value + '<li>')
console.log(m2)

// Here, our array of integers is transformed into an array containing HTML strings
// Map is used extremely frequently in React!!!


const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)           // [3, 4, 5] is printed


// OBJECTS
// Can define objects using object literals, by listing its properties within braces

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

// The properties of objects are referenced using dot notation or by using brackets

console.log(object1.name)  // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])  // 35 is printed

// You can also add properties using either notation
object1.address = 'Helsinki'
object1['secret number'] = 12341  // Can't do this one with dot notation because of the space


// FUNCTIONS

// Complete process to define a function
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

// Call as usual
const result = sum(1, 5)
console.log(result)


// For a single parameter, can exclude the parantheses
const square = p => {
    console.log(p)
    return p * p
}

// Technically, if function is single line, can remove braces and do one line
const square = p => p * p

// This form is very handy when manipulating arrays when using the map method
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)


// Before version ES6 of Javascript, had to define functions as follows

function product(a, b) {
    return a * b
}

// CLASSES
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('Hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()






