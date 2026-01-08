// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
//      object which contains all the keys and values of the first object and second object

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});


let publicDetail = {
    name : "Ashish vankar",
    age : 20
};

let pivateDetail = {
    gmail : "abcd@gmail.com",
    PhoneNum : "81xxxxxx30"
};

console.log(mergeObjects(publicDetail,pivateDetail));