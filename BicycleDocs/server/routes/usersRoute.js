

const {hashPassword, comparePassword}= require ('../encryption/hashedPassword')

const express= require('express');

const router= express.Router();
require('dotenv').config();

const User = require('../models/userModel')
const stripe= require("stripe")(process.env.STRIPEKEY);

const nodemailer= require("nodemailer");






router.post('/adduser', async (req, res)=>{
    const user= req.body;
   // console.log(user);

    const hashedPassword= await hashPassword(user.password);

   // console.log(hashedPassword);

    const userModel= new User({
        email:  user.email,
        password: hashedPassword,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        userType: user.userType,
        confirmed: false
    })

   

    userModel.save((err, body)=>{
        if(err){
            console.log(err);
            return res.status(400).json({message: `Something went wrong ${err}`});

        }
        else{
            res.send(body)
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth:{
                    user: process.env.EMAIL, 
                    pass: process.env.PASS
                }
            });
        
           
              
            
          
        
           
        
            const mailOptions= {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Welcome to Bicycle Docs",
                text: "Thank you for joining Bicycle Docs.   You may access your account now!" +
                `Your email confirm link is http://localhost:3000/email-confirmed/${body._id}`
                
            }
        
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
        
                }
                else{
                    console.log("Email was sent! to "+ user.email + info.response)
                }
            })
            
        }

    })
})



router.put('/add-stripe-id', async (req, res)=>{
 try{
    const filter= {email: req.body.email};
    const stripe=  req.body.stripeId;

    console.log(stripe);

    const update= {stripe_customer_id: stripe};

    const updated= await User.findOneAndUpdate(filter, update, {
        returnOriginal: false
    });


    //console.log(updated);

    res.json(updated)

 }
 catch(err){
    console.log(err);
 }
    

})

router.get('/get-all-users', (req, res)=>{
    User.find({}, (err, docs)=>{
        if(err){
            return res.status(400).json({message: 'Something went wrong'});
        }
        else{
            res.send(docs);
        }
    })
})

router.put('/update-email-confirmed', (req, res)=>{
    const userId= req.body.userId;
     console.log(userId);
    User.findByIdAndUpdate(userId,{
        confirmed: true
    }, (err)=>{
        if(err){
            res.status(400).json({message: "Something went wrong!"})
        }
        else{
            res.send("Update successful!")
        }
    })


});

router.post('/school-login',  async (req, res)=>{
  
   const user= await User.findOne({email: req.body.email});

   console.log(user)

   if(!user){
    console.log("User not found")
    return res.status(400).json({
        error: "User Not Found!"
  //test
    })
   }

   const match = await comparePassword(req.body.password, user.password)
   if(!match){
    console.log("Wrong Password!")
    return res.status(400).json({
        error: "Wrong Password"
    });
   }
   else{
    console.log("This matched")
   }

   console.log(user)
   if(user){
    console.log("this worked")

        if(user.userType==="School"){
        res.send(user)
        }
        else{
            return res.status(400).json({nessage: 'User does not belong to a School'})
        }
   }
   else{
    console.log("This didn't work")
    return res.status(400).json({message: 'Invalid Credentials'})
   }
 })



module.exports= router;