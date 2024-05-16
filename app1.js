require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect"); //connect will return promise

const PORT = process.env.PORT || 5000; //when this will be live that time PORT will be used. Now in local host 5000

const product1_routes = require("./routes/product1");

//req object represents the HTTP request and has properties for the request query string, parameters, body and HTTP headers.
//res is response which we can share
app.get("/", (req, res) => {
  res.send("Hi, I am live");
}); //for home page/root

//middleware or to set router

app.use("/api/products", product1_routes);

//for connected with express server
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected`);
    }); // for showing backend is connected or not
  } catch (error) {
    console.log(error);
  }
};

start();

//for start:  npm start or npm run dev
