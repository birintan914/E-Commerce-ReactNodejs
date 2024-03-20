const mongoose = require("mongoose")
const schema = mongoose.Schema;

const productSchema = new schema({
    brand: String,
    model: String,
    version: String,
    price: String,
    userID: String
})

const Product = mongoose.model("products", productSchema);
module.exports = Product;