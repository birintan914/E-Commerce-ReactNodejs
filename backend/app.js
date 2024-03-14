const express = require('express')
const mongoose = require('mongoose')
const app = express()

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


app.get('/', (req, res) => {
    res.send("<h1>app.js is working...</h1>")
})
app.listen(5000)