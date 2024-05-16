const mongoose = require("mongoose");
const { options } = require("../routes/product1");

const connectDB = (uri) => {
  //   return mongoose.connect(uri, options, callback);
  //console.log("connect db");
  return mongoose.connect(uri, {});
};

module.exports = connectDB;
