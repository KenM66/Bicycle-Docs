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
            return res.status(400).json({message:  "The following error occured \n"+ err })
        }
        else{
            res.send(body);
        }
    })
})

router.get('/get-children-by-parent/:parentId', async (req, res)=>{
    await Child.find({'parent': {_id: req.params.parentId}}, (err, docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log(err);
            return  res.status(400).json({message: "The follow error occured \n"+err});
        }
    }).clone();
})

router.get('/child-by-id/:id', async(req, res)=>{
    await Child.findById({"_id":req.params.id}, (err, docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log(err);
            return res.status(400).json({message: "Could not find the child you're looking for. \n"+ err})
        }
    }).clone()
})

module.exports= router;