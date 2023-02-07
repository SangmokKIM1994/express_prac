const mongoose = require("mongoose");
mongoose.set('strictQuery',true)

require('dotenv').config();
// const env = require("dotenv")
// env.config({path:"../.env"})
// console.log(process.env.mongoDB)

const connect = () => {
    mongoose
    .connect(process.env.mongoDb)
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
    console.error("몽고디비 연결 에러", err);
});

module.exports = connect

// 'mongodb+srv://yeong0319:tkdahr$56@cluster0.3saool7.mongodb.net/cluster0?retryWrites=true&w=majority'