// arguments object - no longer bound with arrow functions
// in arrow functions you don't have access to 'arguments'- if you need them then stick with an es5 function

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound
// when you add a function onto an object property, the this property is bound to that object so we can access stuff with 'this'
// when we define a regular anonymous function, there is no bound this value

// conversely, we want an es5 function for an object function because if we use an arrow function, it binds 'this' to the global scope which is undefined

const user = {
  name: 'Molly',
  cities: ['Portland', 'Coco', 'Grant\'s Pass'],
  printPlacesLived() {
    // forEach just lets you access the array elements, but map lets you change them, getting a new array back
      return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
}

console.log(multiplier.multiply());