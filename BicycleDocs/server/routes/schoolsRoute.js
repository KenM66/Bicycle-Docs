


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

    School.findOne({'id': req.params.id}, (err, docs)=>{
        if(err){
            return res.status(400).json({message: 'something went wrong'});
        }
        else{
            res.send(docs)
            
       }
     })

 })

router.get('/findschoolbyuser/:userId', async (req, res)=>{
    console.log(req.params.userId);
  await  School.findOne({users: {'_id': req.params.userId}}, (err, docs)=>{
        if(err){
            console.log("Didn't work")
            return res.status(400).json({message: 'No school found for user ID'})
        }
        else{

            res.send( docs)
        }
    }).clone()
})


router.post("/addschool", async (req, res)=>{
    
    const school= req.body.school

  
   
  

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
      
    })

    

    const schoolModel= new School({
        name: school.name,
      

        contactFirstName: school.contactFirstName,
        contactLastName: school.contactLastName, 
        phone: school.phone,
        email: school.email,
       
        
        
    })

  

    schoolModel.save((err, docs)=>{
        if(err){
            return res.status(400).json({message: 'Something went wrong'});

        }
        else{
          res.send(docs);
        }
    })
})

router.put('/add-address-to-school/:address_id/:school_id', (req, res)=>{

   
   School.findByIdAndUpdate(req.params.school_id , {
        
        billingAddress: req.params.address_id
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

router.put('/add-user-to-school/:school_id/:user_id',  (req, res)=>{
    
     User.findOne({_id: req.params.user_id}, (err, docs)=>{
        if(err){
            console.log(err);
        }
        else{
          
       

          // School.findByIdAndUpdate( req.params.school_id, {name: "This Works School"})
           //console.log(school);
           res.send(docs);
           School.findByIdAndUpdate( req.params.school_id,{ "$push": {users: docs._id  }}, (err,body)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(body);
            }
    })
        }

        
      
        
    },
    
        
    
     
    //}//,

//         School.findByIdAndUpdate(req.params.school_id,{
//             users: [user._id]
//         }, (err)=>{
//             if(err){
//             console.log(err);
//             }
//             else{
//                 res.send("User added successfully!");
//             }
//         })

     

     
// )
//}))

    )})

module.exports= router