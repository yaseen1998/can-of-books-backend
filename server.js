'use strict'
const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
app.use(cors());
require("dotenv").config();
const mongoose = require('mongoose')
const PORT = process.env.PORT
const MONGO_SERVER = process.env.MONGO_SERVER
app.use(express.json());
const {booksController,updateController , Createcontroller ,deleteController} =require("./contrellor/book.contrellor")
const {seedbook} = require("./models/Book.model")

// start connect to mongo
mongoose.connect(`mongodb+srv://yaseen_saeed:ya9981063722@cluster0.ulxvz.mongodb.net/bookstore`,{useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect(`${MONGO_SERVER}/bookstore`,{useNewUrlParser: true, useUnifiedTopology: true});
// end connect to mongo


//start test backend
app.get("/", (req, res) => {
    res.status(200).json({ message: "I'm working" });
  });
  //end test backend

  // start call login
  const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  });


  const getKey=(header, callback)=>{
    client.getSigningKey(header.kid, function(err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
}

app.get('/auth',(req,res)=>{
    console.log("i was called")
    // getting the JWT from the request headers
    "Bearer ljdlasiudo87waudljaslidu"
    ["Bearer","ljdlasiudo87waudljaslidu"]
    const token=req.headers.authorization.split(' ')[1];
    // token="ljdlasiudo87waudljaslidu"
    // checking the token if it is valid/verfied
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send('invalid token');
        }
        res.send("Your are authenticated/Authorized");
    })
});
// start mongo edit
  app.get('/seed_data',(req,res)=>{
    seedbook()
    res.json('correct message')
})
app.get('/books',booksController);
app.put('/update-book/:id',updateController);
app.post('/create-book',Createcontroller);
app.delete('/delete-book/:id',deleteController);
// end mongo edit

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  