const express= require("express");
const router= express.Router();
require('dotenv').config();
const stripe= require("stripe")(process.env.STRIPEKEY);

router.post('/create-subscription', async(req, res)=>{
    try{

        

        const customer= await stripe.customers.create({
           email: req.body.email
        });

       
       // console.log(req.body.price);

        const session= await stripe.checkout.sessions.create({
           mode: 'subscription',
           payment_method_types:['card'],
           line_items:[
               {
                   price: req.body.price.id, 
                   quantity: 1,
               },
           ] ,
          customer: customer.id,
          success_url: `http://localhost:3000/stripe/succcess/`,
          cancel_url: 'http://localhost:3000/organization-registration'
        })


        


       // console.log(session);
       


       res.json({ url: session.url, sessionId: session.id, stripeId: session.customer});

       


        
    }
    catch(err){
        console.log(err)
    }
})

module.exports= router;