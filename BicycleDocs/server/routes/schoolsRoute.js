


const express = require("express");

const router= express.Router();


const School= require('../models/schoolModel')
const Address= require('../models/addressModel')
const User = require('../models/userModel')



router.get("/getallschools", (req, res)=>{
    School.find({}, (err, docs)=>{
        if(!err){
            return res.send(docs)
        }
        else{
            return res.status(400).json({message: 'Something went wrong'})
        }
    })
});

router.get('/getschoolbynumber/:id', (req,res)=>{

    School.find({'id': req.params.id}, (err, docs)=>{
        if(err){
            return res.status(400).json({message: 'something went wrong'});
        }
        else{
            res.send(docs)
            
       }
     })

 })

router.get('/findschoolbyuser', (req, res)=>{
    School.findOne({user: {'_id': req.body.userId}}, (err, docs)=>{
        if(err){
            console.log("Didn't work")
            return res.status(400).json({message: 'No school found for user ID'})
        }
        else{
            res.send(docs)
        }
    })
})


router.post("/addschool", async (req, res)=>{
    
    const school= req.body.school

  
   
    const user = await User.findOne(
        {"email": req.body.user.email}
    )
    //console.log(user);

    const addressModel= new Address({
        addressLine: req.body.address.addressLine,
        city: req.body.address.city,
        state: req.body.address.state,
        postalCode: req.body.address.postalCode,
        country: req.body.address.country
    })

    addressModel.save(err=>{
        if(err){
            return res.status(400).json({message: "Something went wrong"})
        }
        else{

            res.send("Address added successfully")
        }
    })

    

    const schoolModel= new School({
        name: school.name,
      

        contactFirstName: school.contactFirstName,
        contactLastName: school.contactLastName, 
        phone: school.phone,
        email: school.email,
        users: [user]
        
        
    })

  

    schoolModel.save(err=>{
        if(err){
            return res.status(400).json({message: 'Something went wrong'});

        }
        // else{
        //   res.send("School added successfully")
        // }
    })
})

router.put('/add-address-to-school/:address_id/:school_id', (req, res)=>{

   const address=  Address.findById(req.params.address_id)
   School.findByIdAndUpdate(req.params.school_id , {
        address: address
   }, (err)=>{
    if(err){
        res.status(400).json({message: "Address not saved properly"})
    }
    else{
        res.send("Update Successful")
    }
   }
   )




})

router.get('/get-school-by-user-id/:user_id', (req, res)=>{

    School.findOne({users: {_id: req.params.user_id}}, (err, docs)=>{
        if(err){
            console.log(err);
        }
        else(res.send(docs));

    })

  

})



module.exports= router