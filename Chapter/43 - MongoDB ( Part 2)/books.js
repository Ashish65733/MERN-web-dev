const mongoose = require('mongoose');

main().then(() => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxLength : 20
    },
    author : {
        type : String
    },
    price : {
        type : Number,
        min : [1, "Price is too low"],
    },
    discount : {
        type : Number,
        default : 0
    },
    category : {
        type : String,
        enum : ["Fiction", "Non-Fiction"]
    }
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title : "Atomic Habits",
//     author : "James Clear",
//     price : 300
// });

// let book1 = new Book({
//     title : "The Marvel",
//     price : 600
// });

// let book1 = new Book({
//     title : "The Great Gatsby",
//     author : "F. Scott Fitzgerald",
//     price : "400" // this will not throw an error because mongoose will try to convert it to a number 
// });


// let book1 = new Book({
//     title : "Gone Girl",
//     price : 399
// });

// let book1 = new Book({
//     title : "The Lord of the Rings: The Fellowship of the Ring", // this will throw an error because the title is more than 20 characters
// });

// let book1 = new Book({
//     title : "The Alchemist",
//     author : "Paulo Coelho",
//     price : 250,
//     category : "Fiction"
// });

// book1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

Book.findByIdAndUpdate('6991b249d772e0f8ac77a941', {price : -10}, {runValidators : true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors.price.properties.message);
    });

