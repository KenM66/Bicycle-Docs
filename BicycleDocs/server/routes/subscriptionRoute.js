const express= require("express");
const router= express.Router();
const stripe= require("stripe")("sk_test_51KOQoOFGARc0uD7XDVGzXFiyibXuB9F6lXNgOfdJnKhkEjt4gDUd4Igr9kC6U6dMDpjlqIul8Sh4Qdsltg5hW1An00GXJSgs5I");

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