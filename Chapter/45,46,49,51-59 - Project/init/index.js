require("dotenv").config({path:"../.env"});
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const axios = require("axios");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "69f36a75e1eedfb95cbbf891",
  }));

  for (let listing of initData.data) {
      // Geocode the location using MapTiler API
      try{

     
     const geoRes = await axios.get(
        `https://api.maptiler.com/geocoding/${encodeURIComponent(listing.location + ", " + listing.country)}.json?key=${process.env.MAP_TOKEN}`
      );
    
      const coords = geoRes.data.features[0]?.geometry?.coordinates || [72.969818, 23.597969];
    
      listing.geometry = {
        type: "Point",
        coordinates: coords,
      };
       } catch(err) {
        console.log(`Failed to geocode ${listing.title}:`, err.message);
        listing.geometry = {
          type: "Point",
          coordinates: [72.969818, 23.597969], // Default coordinates
        };
       }
  }

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
