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
const {booksController,getbooksController} =require("./contrellor/book.contrellor")


const {seedbook} = require("./models/Book.model")
// const {seedAuthor} = require("./models/author.model")
// const {authorcontroller ,getauthorcontroller} = require("./contrellor/author.contrellor")


app.get('/seed_data',(req,res)=>{
    seedbook()
    res.json('correct message')
})

// app.get('/get_data',authorcontroller)
// app.get('/get_data2',getauthorcontroller)


mongoose.connect(`mongodb+srv://yaseen_saeed:ya9981063722@cluster0.ulxvz.mongodb.net/bookstore`,{useNewUrlParser: true, useUnifiedTopology: true});

app.get('/books',booksController);
app.get('/books2',getbooksController);


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  