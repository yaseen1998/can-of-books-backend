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

const Createcontroller =async (req,res)=>{
    let createdata = req.body;
    let newcreate = new bookmodel({
       title: createdata.title,
        description:createdata.description,
        status:createdata.status,
           email : createdata.email,
    })
    
    newcreate.save()


    let createbook= await bookmodel.find({});
        res.json(createbook);
}


const deleteController=  (req,res)=>{
    let id=req.params.id;
    bookmodel.findByIdAndDelete(id,async (err,data)=>{
        if(err){
            res.status(500).send("an error occured");
        }
        let booksList= await bookmodel.find({});
        res.json(booksList);
           
    })
}


module.exports = {booksController 
    , getbooksController
    ,Createcontroller
    ,deleteController};