// let arr1 = [1,2,3];
// let arr2 = [1,2,3];

// arr1.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// arr2.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// Here, even though both arr1 and arr2 have same structure and behavior,
// but they are two different objects in memory.
// So, two separate copies of sayHello function are created in memory.

// ---------*----------*----------*----------*----------*----------*----------

// # Factory Function - returns an object :
// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };

//     return person;
// }

// let p1 = PersonMaker("adam", 25);
// let p2 = PersonMaker("eve", 25);

// Eevn though talk function is once defined in PersonMaker, 
// it creates a separate(indicidual) copy for each object in memory.

// ---------*----------*----------*----------*----------*----------*----------

// # Constructors - doesn't return anything & start with capital letter
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

// Here talk function is defined on prototype of Person constructor
// So, only one copy of talk function is created in memory and shared among all
// objects created using Person constructor.

// ---------*----------*----------*----------*----------*----------*----------

// # ES6 Classes
class Person {  // Parent class / Base class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);

// ---------*----------*----------*----------*----------*----------*----------

// # Inheritance using Classes

class Student extends Person {  // Child class
    constructor(name, age, rollNo) {
        super(name, age);   // Perent class constructor is being called
        this.rollNo = rollNo;
    }
}

class Teacher extends Person {  // Child class
    constructor(name, age, subject) {
        super(name, age);   // Perent class constructor is being called
        this.subject = subject;
    }
}

let s1 = new Student("Ashish Vankar", 20, 101);
let t1 = new Teacher("Shradha Khapra", 26, "JavaScript");