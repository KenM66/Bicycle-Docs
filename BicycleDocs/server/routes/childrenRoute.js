const express= require("express");
const router= express.Router();

const Child= require('../models/childModel');

router.post('/add-child/:parentId', (req, res)=>{
    const child= req.body; 

    const childModel= new Child({
        firstName: child.firstName, 
        lastName: child.lastName, 
        dateOfBirth: child.dateOfBirth, 
        image: child.image, 
        parent: req.params.parentId
    })

    childModel.save((err, body)=>{
        if(err){
            console.log(err);
            return res.status(400).json({message:  "The following error occured "+ err })
        }
        else{
            res.send(body);
        }
    })
})

module.exports= router;