
// This is not an Array
var cars = "Tesla, Audi, Suzuki, BMW";
console.log(cars[0]);

// Subsrting
const result = cars.substring(0,5);
console.log(result);

// Lenghth of string
console.log(cars.length);

// Replace string
const modifiedString = cars.replace("Audi","Tata");
console.log(modifiedString);

// Upper and Lowercase
console.log(cars.toLowerCase());
console.log(cars.toUpperCase());

// Split and Join
const carsArray = cars.split(',');
console.log(carsArray());
const stringFromArray = carsArray.join(|);
console.log(stringFromArray);

// Concat
const anoterCars = cars.concat("jaguar","mercerise");
console.log(anoterCars);
