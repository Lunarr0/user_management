const mongoose = require("mongoose");

const db = async () => {
    try{
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected");
}catch(err){
    console.log(err);
    console.log("Database not connected" + `Error: ${err.message}`);
    process.exit(1);
}
};



module.exports = db;
