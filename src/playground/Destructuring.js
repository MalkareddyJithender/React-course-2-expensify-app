//
// Object Destructuring
//

// console.log('Destructuring!');

// const Person = {
//     age:20,
//     location:{
//         city:'Nizamabad',
//         temp:88
//     }
// };

// const {name:Name='g2',age:Age} = Person;

// console.log(`${Name} is ${Age}`);

// const {city,temp} = Person.location;

// if(city && temp)
// {
//     console.log(`It's ${temp} in ${city}.`);
// }


// const book = {
//     name:'Ego is the Enemy',
//     author:'Ronald Rose',
//     publisher:
//     {
//         name:'Jithender_Malkareddy'
//     }
// };

// const {name:publisherName='self-published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1-49 street no-01','Mentrajpally','Nizamabad','Telangana','503175']

// const [,,dist='Indur',state='Andhra Pradesh'] = address;

// console.log(`I am in ${dist} ${state}.`);

const item = ['Coffee (iced)','8 RS','15 Rs','17 Rs'];

const [itemName,,mediumPrice] = item;

console.log(`A Medium ${itemName} Costs ${mediumPrice}.`);

