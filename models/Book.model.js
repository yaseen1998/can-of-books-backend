'use strict'
const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
Books:[{title:String,
    description:String,
    status:String,
    email:String,
    id:Number}],
})

const bookmodel = mongoose.model('book',bookSchema)

let seedbook = () =>{
    
    let newbooks = new bookmodel({
        
Books:[{

    title: 'The Midnight Library ',
    description:(`Between life and death there is a library,
     and within that library, the shelves go on forever. 
     Every book provides a chance to try another life you could have lived.
      To see how things would be if you had made other choices . . .
       Would you have done anything different, if you had the chance to undo your regrets?`),
       status:'  575,639 ratings  , 72,832 reviews',
       email : 'Matt Haig',
       id:1
    
},{
title: 'The Vanishing Half ',
    description:(`The Vignes twin sisters will always be identical. 
    But after growing up together in a small, southern black community and running away at age sixteen, 
    it's not just the shape of their daily lives that is different as adults,
     it's everything: their families, their communities, their racial identities.`),
       status:'  442,426 ratings  ,  37,622 reviews',
       email : ' Brit Bennett',
       id:2

},
{
    title: 'The Invisible Life of Addie LaRue ',
        description:(`France, 1714: in a moment of desperation, 
        a young woman makes a Faustian bargain to live forever and is 
        cursed to be forgotten by everyone she meets.`),
           status:'   364,992 ratings  ,  57,829 reviews',
           email : '  V.E. Schwab',
           id:3
    }
]

    
    })
    
    newbooks.save()
}

module.exports={
    seedbook,
    bookSchema,
    bookmodel
}


