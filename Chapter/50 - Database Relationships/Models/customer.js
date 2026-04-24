const mongoose = require("mongoose");
const { Schema } = mongoose;

Main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

async function Main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWERE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  // console.log("POST MIDDLEWERE");
  // console.log(customer);

  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addOrders = async () => {
  let res = await Order.insertMany([
    { item: "Laptop", price: 1200 },
    { item: "Phone", price: 800 },
    { item: "Headphones", price: 150 },
  ]);
  console.log(res);
};

// addOrders();

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul Kumar",
  });

  let order1 = await Order.findOne({ item: "Laptop" });
  let order2 = await Order.findOne({ item: "Headphones" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let result = await cust1.save();
  console.log(result);
};

// addCustomer();

const findCustomer = async () => {
  //   let result = await Customer.find({});
  let result = await Customer.find({}).populate("orders");
  console.log(result);
};

// findCustomer();

const addCust = async () => {
  let newCust = new Customer({
    name: "karan Arjun",
  });

  let newOrder = new Order({
    item: "Pizza",
    price: 250,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer");
};

// addCust();

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("69eb7ebc9de1b5f34781bb0e");

  console.log(data);
};

delCust();
