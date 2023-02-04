const express= require("express");
const router= express.Router();

const Parent= require('../models/parentModel');

router.post('/add-parent', async (req, res)=>{
    const parent= req.body.parent; 
    console.log(parent);

    const parentModel= new Parent({
        firstName: parent.firstName, 
        lastName: parent.lastName, 
        


    })


})