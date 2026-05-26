const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB = async () =>{//clean database
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner: "6a06cb732aff3fb3c62e4de7"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialised");
};
main()
    .then(() => {
        console.log("connected to DB");
        // CALL initDB ONLY AFTER a successful connection
        initDB(); 
    })
    .catch(err => {
        console.log("Connection Error:", err);
    });