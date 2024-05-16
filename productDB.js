require("dotenv").config(); //it is not connected with app1.js that why this line is required
const connectDB = require("./db/connect");
const Product = require("./models/product2");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
