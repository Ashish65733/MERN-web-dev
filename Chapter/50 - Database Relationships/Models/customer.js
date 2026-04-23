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

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Costomer", customerSchema);

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

findCustomer();
