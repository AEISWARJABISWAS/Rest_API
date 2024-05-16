const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/product");

//in home page what will be showing
router.route("/").get(getAllProducts); //in real export
router.route("/testing").get(getAllProductsTesting); // in postman export

module.exports = router;
//if user visit home page then  controllers tell them what have to do or how to process
