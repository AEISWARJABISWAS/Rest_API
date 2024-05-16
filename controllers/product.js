const Product = require("../models/product2");

const getAllProducts = async (req, res) => {
  //if in postman any of one value is present then run then api
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" }; //"i" means case sensitive. if I will write in capital or small, both are searchable
  }

  let apiData = Product.find(queryObject);

  //intead of sort=name,price I have to write sort= name price
  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);

  // console.log(queryObject);

  // const myData = await Product.find({ name: "iphone" });
  // const myData = await Product.find(req.query);
  // const myData = await Product.find(queryObject).sort(sort);
  const Products = await apiData;
  res.status(200).json({ Products, nbHits: myData.length });
  // res.status(200).json({ msg: "I am getAllProducts" });
};

const getAllProductsTesting = async (req, res) => {
  // const myData = await Product.find({});
  //const myData = await Product.find(req.query).sort("name"); //.sort("-price")
  // const myData = await Product.find(req.query).select("name");
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
  //res.status(200).json({ msg: "I am getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting };
