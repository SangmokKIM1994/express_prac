const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routes/posts.js')

const connect = require("./schemas");
connect();

app.use("/", [postsRouter]);

app.listen(port, () => {
    console.log('나 김상목이',port,'번 포트를 내가 열었다');
});