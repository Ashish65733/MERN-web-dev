// Qs1. Create a program that generates a random number representing a dice roll.
let dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

/* Qs2. Create an object representing a car that stores the following properties for the
    car: name, model, color.
 
   - Print the car’s name.
*/
let car = {
    name : "BMW",
    model : "M4 Competition",
    color : "Frozen Urban Green"
};

console.log(car.name);

/* Qs3. Create an object Person with their name, age and city.
- Edit their city’s original value to change it to “New York”.
- Add a new property country and set it to the United States.
*/
let Person = {
    name : "Leo",
    age : 19,
    city : "Los Angeles"
};

Person.city = "New York";
Person.country = "United States";

console.log(Person);