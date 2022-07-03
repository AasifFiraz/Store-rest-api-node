const express = require("express")
require("express-async-errors")
const connectDb = require("./db/connect")
const stores = require("./routes/stores")
const auth = require("./routes/auth")
const app = express()
require('dotenv').config()

app.use(express.json())

app.use('/api/v1/stores', stores)
app.use('/user', auth)

const errorHandling = (err, req, res, next) => {
    res.status(err.statusCode).json({
      msg: err.message,
      success: false,
    });
};
app.use(errorHandling);

const PORT = 5000 || process.env.PORT

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
