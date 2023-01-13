


const express = require("express");

const router= express.Router();

const Season= require('../models/seasonModel');
const School= require('../models/schoolModel');

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
    const season= req.body

    const school= await School.findOne({user: {'_id': req.body.userId}});


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

module.exports= router;