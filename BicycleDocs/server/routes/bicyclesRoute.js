const express= require('express');
const router= express.Router();

const Bicycle= require('../models/bicycleModel');

router.post('/add-bicycle/:childId', (req, res)=>{
    const bicycle= req.body;
    console.log(bicycle);

    const bicycleModel= new Bicycle({
        brand: bicycle.brand, 
        model: bicycle.model, 
        color: bicycle.color,
        serialNumber: bicycle.serialNumber, 
        child: req.params.childId
    })

    bicycleModel.save((err, body)=>{
        if(err){
            console.log(err);
            return res.status(400).json({message: 'The following error occurred \n'+err})
        }
        else{
            console.log(bicycleModel);
            console.log("\n\n"+body);
            res.send(body);
        }
    })
})

module.exports= router;