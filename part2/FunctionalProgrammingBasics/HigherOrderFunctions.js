// In Javascript, Functions are VALUES

const triple = (x) => (
    x * 3
)

const waffle = triple

console.log(waffle(30))


// Try and filter out the dogs
const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' }
]

const isDog = animal => animal.species === 'dog'
const dogs = animals.filter(isDog)
console.log(dogs)

const otherAnimals = animals.reject(isDog)

// const dogs = []
// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].species === 'dog')
//         dogs.push(animals[i])
// }