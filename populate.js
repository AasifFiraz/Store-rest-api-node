require("dotenv").config()

const connectDb = require("./db/connect")
const Store = require("./models/Stores")
const jsonProds = require("./products.json")

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)
        await Store.deleteMany(); 
        await Store.create(jsonProds)
        console.log("Success run");
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()