const express = require("express")
const connectDb = require("./db/connect")
const stores = require("./routes/stores")

const app = express()
require('dotenv').config()

app.use(express.json())

app.use('/api/v1/stores', stores)

PORT = 5000 || process.env.PORT

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`running on port ${PORT}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
