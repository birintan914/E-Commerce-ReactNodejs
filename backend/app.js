const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()
const User = require("./db/User")
const Product = require('./db/Product')
require("./db/config")

// Moves to config
const connectDB = async ()=>{
    mongoose.connect("mongodb://localhost:27017/e-comm")
    /*  SCHEMA/MODEL:
        - a schema represents the shape of data you want to fetch/create
        - leaving the schema blank means that you want to get all attributes of a collection (id, name, place)
        - The schema is where you can put restrictions like type, required, unique

        - A model is a construction function that gives you an object variable to use
        - this object variable is what you will use to perform operations on the database
        - mongoose.model([COLLECTION_NAME], [SCHEMA_NAME])
    */
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model("Products", productSchema);
    const data = await product.find();
    console.warn(data);
}
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>app.js is working... </h1>")
})
app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})
app.post("/login", async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password"); //retrieves everything but the password field
        if (user) {
            res.send(user);
        } else {
            res.send({result: "Error: User not found"})
        }
    } else {
        res.send({result: "Error: Email and Password required"})
    }
})

app.post("/add-product", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get('/products', async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products);
    } else {
        res.send({result: 'No Product Found'})
    }
})
app.delete('/product/:id', async (req, res)=> {
    let result = await Product.deleteOne({_id:req.params.id});
    res.send(result);
})
app.get('/product/:id', async (req, res) => {
    let result = await Product.findOne({_id: req.params.id});
    if(result) {
        res.send(result)
    } else {
        res.send({'result': 'No Record Found'})
    }
})
app.put('/product/:id', async (req, res) => {
    let result = await Product.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    res.send(result);
})
app.listen(5000)