const mongoose = require("mongoose")
const schema = mongoose.Schema();
/*  SCHEMA/MODEL:
    - a schema represents the shape of data you want to fetch/create
    - leaving the schema blank means that you want to get all attributes of a collection (id, name, place)
    - The schema is where you can put restrictions like type, required, unique

    - A model is a construction function that gives you an object variable to use
    - this object variable is what you will use to perform operations on the database
    - mongoose.model([COLLECTION_NAME], [SCHEMA_NAME])
*/
const userSchema = new schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("users", userSchema);
module.exports = User;