console.log('destuct')

// Object Destructuring

// const person = {
//     name: 'Vishwambhara',
//     age: 21,
//     location: {
//         city: 'Bangalore',
//         temp: 19
//     }
// }

// const { name: firstName = "Anonymous", age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const { city, temp:temperature } = person.location;
// if(city && temperature) {
//     console.log(`It is ${temperature} in ${city} at night`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = "Self Published" } = book.publisher;
// if(publisherName) {
//     console.log(publisherName);
// }

// Array Destructuring

const address = [
    '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'
];
const [ street, city, state, zip ] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , cost, ] = item;
console.log(`A medium ${coffee} costs ${cost}`);