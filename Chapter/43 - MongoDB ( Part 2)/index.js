const mongoose = require('mongoose');

main().then(() => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name : "Ashish",
//     email : "ashish436@gmail.com",
//     age : 20
// });

// user1.save();

// const user2 = new User({
//     name : "sadie",
//     email : "sadiesink01@gmail.com",
//     age : 24
// });

// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     { name : "Rutul", email : "rutul515@gmail.com", age : 21},
//     { name : "Dhruv", email : "dhruvp92@gmail.com", age : 20},
//     { name : "Khush", email : "khushptl42@gmail.com", age : 21}
// ]).then((res) => {
//     console.log(res);
// });


// User.find({age : 20})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.findOne({_id : '6990a52a99eed64a0a63d6c7'})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.findById('6990a52a99eed64a0a63d6c7')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.updateOne({name : "Ashish"}, {age : 21})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.updateMany({age : { $gte : 21}}, {age : 20})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.findOneAndUpdate({name : "sadie"}, {age : 24}, { new : true })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.deleteOne({name : "Khush"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.deleteMany({age : 20})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.findByIdAndDelete('6990aad346a873800d440ee1')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


