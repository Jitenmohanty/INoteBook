const mongoose = require('mongoose')

const mongoURl = "mongodb://0.0.0.0:27017/INoteBook"

const connectToMongo = async()=>{
    mongoose.connect(mongoURl,()=>{
        console.log("Connected To db Successfully")
    })
}

module.exports = connectToMongo;