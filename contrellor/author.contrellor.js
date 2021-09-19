'use strict'
const {AuthorModel}=require("../models/author.model")
let authorcontroller = (req,res)=>{

    AuthorModel.find().then(data=>{
        res.json(data)
    })
}

let getauthorcontroller = (req,res)=>{
    let authorid = req.query.id

    AuthorModel.findOne({_id:authorid}).then(data=>{
        res.json(data)
    })
}

module.exports = {
    authorcontroller,
    getauthorcontroller
}