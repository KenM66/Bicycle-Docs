const express= require("express");
const router= express.Router();

const Parent= require('../models/parentModel');

router.post('/add-parent', async (req, res)=>{

    console.log(req.body);

    const parent= req.body.parent; 
    const user= req.body.user;
    const address= req.body.address;

    

     const parentModel= new Parent({
        firstName: parent.firstName, 
        lastName: parent.lastName,
        user: user._id, 
        homeAddress: address._id

        })

        parentModel.save((err,body)=>{
            if(err){
                console.log(err);
                return res.status(400).json({message: "Something went wrong with saving new parent."})
            }
            else{
                res.send(body)
            }
        })


})

module.exports= router;