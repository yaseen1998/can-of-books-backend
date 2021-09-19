'use strict'
const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const mongoose = require('mongoose')
const PORT = process.env.PORT
const MONGO_SERVER = process.env.MONGO_SERVER

const {seedbook} = require("./models/Book.model")
const {seedAuthor} = require("./models/author.model")
const {authorcontroller ,getauthorcontroller} = require("./contrellor/author.contrellor")


app.get('/seed_data',(req,res)=>{
    seedbook()
    res.json('correct message')
})

app.get('/get_data',authorcontroller)
app.get('/get_data2',getauthorcontroller)


mongoose.connect(`${MONGO_SERVER}/bookstore`,{useNewUrlParser: true, useUnifiedTopology: true});
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  