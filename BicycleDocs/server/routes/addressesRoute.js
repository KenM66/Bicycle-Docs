const express= require("express");
const router= express.Router();

const Address= require('../models/addressModel')




router.get('/get-all-addresses', async(req, res)=>{
    Address.find({}, (err, docs)=>{
        if(err){
            console.log(err);
        }
        else{
        res.send(docs);
        }
    })
})



router.post('/getaddressbyvalues', async (req, res)=>{
    console.log(req.body)
    Address.findOne({'addressLine': req.body.addressLine, 'postalCode': req.body.postalCode}, (err, docs)=>{
        if(err){
            console.log("Getting address isn't working");
            console.log(err)
            return res.send(400).json({message: "Didn't work"});
          
           
        }
        
        else{
            
            res.send(docs)
        }
    })
})

router.post('/newaddress', async(req,res)=>{

    const address= req.body

    const AddressModel= new Address({
        addressLine: address.addressLine,
        city: address.city,
        state: address.state,
        postalCode: address.postalCode, 
        country: address.country
    })

    AddressModel.save((err, body)=>{
            if(err){
                console.log(err);
                return res.status(440).json({message: "Something with address save went wrong"})
            }
            else{
                res.send(body)
            }
    })

})

module.exports= router;