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
app.use(express.json());
const {booksController,getbooksController , Createcontroller ,deleteController} =require("./contrellor/book.contrellor")


const {seedbook} = require("./models/Book.model")
// const {seedAuthor} = require("./models/author.model")
// const {authorcontroller ,getauthorcontroller} = require("./contrellor/author.contrellor")


app.get('/seed_data',(req,res)=>{
    seedbook()
    res.json('correct message')
})


app.get("/", (req, res) => {
    res.status(200).json({ message: "I'm working" });
  });

mongoose.connect(`mongodb+srv://yaseen_saeed:ya9981063722@cluster0.ulxvz.mongodb.net/bookstore`,{useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect(`${MONGO_SERVER}/bookstore`,{useNewUrlParser: true, useUnifiedTopology: true});

app.get('/books',booksController);
app.get('/books2',getbooksController);
app.post('/create-book',Createcontroller);
app.delete('/delete-book/:id',deleteController);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  