const express= require('express');
const router= express.Router();

const Bicycle= require('../models/bicycleModel');

router.post('/add-bicycle/:childId', (req, res)=>{
    const bicycle= req.body.bicycle;
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

router.put('/add-image-to-bicycle/:bicycle_id/:image_id', (req,res)=>{
    Bicycle.findByIdAndUpdate(req.params.bicycle_id, {
        image: req.params.image_id
    }, (err)=>{
        console.log(err);
      })
})

router.get('/bicycles-by-child/:child_id', (req, res)=>{
    Bicycle.find({"child":{_id: req.params.child_id}}, (err, docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log(err);
            return res.status(400).json({message: 'The following error occurred \n'+err})

        }
    })
})

module.exports= router;