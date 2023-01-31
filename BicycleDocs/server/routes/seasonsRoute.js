


const express = require("express");

const router= express.Router();

const Season= require('../models/seasonModel');
const School= require('../models/schoolModel');

router.get('/getseasonbyid/:id', (req,res)=>{
    Season.find({"_id": req.params.id}, (err, docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            return res.status(400).json({message: 'Something went wrong'})
        }
    })
})

router.get('/getseasonsbyschool/:id', (req, res)=>{
    Season.find({"school": {_id: req.params.id}}, (err, docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            return res.status(400).json({message: 'Something went wrong'})
        }
    })
})

router.post('/addseason', async (req, res)=>{
    const season= req.body.season 
    //const school= req.body.school

    console.log(season);


    //console.log(req.body.userId);

   //const school= await School.findOne({user: {'_id': req.body.userId}});

   const school= JSON.parse(req.body.school);
   

   console.log(req.body.school);


    const seasonModel= new Season({
        name: season.name, 
        start: season.start, 
        end: season.end, 
        price: season.price, 
        isOpen: season.isOpen,
        maximum: season.maxiumum,
        school: school
    })

    seasonModel.save(err=>{
        if(err){
            console.log(err);
            return res.status(400).json({message: 'Something went wrong'});

        }
        else{
            res.send("Season added successfully")

        }
    })


})

router.put('/toggle-registration-status', async (req, res)=>{
        const seasonId= req.body._id;
        const status= req.body.isOpen; 

        Season.findByIdAndUpdate(seasonId, {
            isOpen: status
        }, (err)=>{
            if(err){
            res.status(400).json({message: "Status not properly updated"})
            }
            else{
                res.send("Status update successfully")
            }
        })

})

router.put('/update-season/:id', async (req, res)=>{
    
})

module.exports= router;