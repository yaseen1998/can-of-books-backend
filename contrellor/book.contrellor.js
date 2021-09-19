"use strict";
const {bookmodel}=require("../models/Book.model");

let booksController= (req,res)=>{
    bookmodel.find().then(data=>{
        res.json(data);
    })  
    
}
let getbooksController= (req,res)=>{
    let bookid = req.query.id
    bookmodel.findOne({_id:bookid}).then(data=>{
        res.json(data);
    })  
    
}

module.exports = {booksController , getbooksController};