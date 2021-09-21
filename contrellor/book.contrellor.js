"use strict";
const {bookmodel}=require("../models/Book.model");

let booksController= (req,res)=>{
    bookmodel.find().then(data=>{
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

const updateController=async (req,res)=>{
        let bookID=req.params.id;
        let updatedData=req.body;
        bookmodel.findOne({_id:bookID}).then(book=>{
            book.title=updatedData.title;
            book.description=updatedData.description;
            book.status=updatedData.status;
            book.email=updatedData.email;

            book.save();
        });
        // let updatedBookList=await bookmodel.find({});
        // res.status(200).json(updatedBookList);
        setTimeout(()=>{
            bookmodel.find({}).then(data=>res.json(data));
        },250)
    
}

module.exports = {booksController 
    ,Createcontroller
    ,deleteController
   ,updateController };