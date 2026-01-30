// let arr1 = [1,2,3];
// let arr2 = [1,2,3];

// arr1.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// arr2.sayHello = () => {
//     console.log("hello!, i am arr");
// };

function PersonMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        }
    };

    return person;
}

let p1 = PersonMaker("adam", 25);
let p2 = PersonMaker("eve", 25);
// Eevn though talk function is once defined in PersonMaker, 
// it creates a separate(indicidual) copy for each object in memory.