const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://lh3.googleusercontent.com/gg/AMW1TPpHjSrl3T7KHBbLbt3u-2VPi_CrbazzCezNWXqLBlY2doxjhDNrgYGG67qsL1QgMCklHal_-fA1mkYSnxS9Md7xxGbgS0j99BfUhyIT9aOdJY4vDZ3vVAopp13agp-gN0gp45Y2J3HcZpX1QgX-XdOY3pGfVAZ4PzfiGnJCId7JK6ZHIHky=s1600-rj-mp2",
      set: (v) =>
        v === ""
          ? "https://lh3.googleusercontent.com/gg/AMW1TPpHjSrl3T7KHBbLbt3u-2VPi_CrbazzCezNWXqLBlY2doxjhDNrgYGG67qsL1QgMCklHal_-fA1mkYSnxS9Md7xxGbgS0j99BfUhyIT9aOdJY4vDZ3vVAopp13agp-gN0gp45Y2J3HcZpX1QgX-XdOY3pGfVAZ4PzfiGnJCId7JK6ZHIHky=s1600-rj-mp2"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
