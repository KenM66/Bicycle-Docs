const express= require("express");
const router= express.Router();
require('dotenv').config();
const stripe= require("stripe")(process.env.STRIPEKEY);

router.get("/subscriptionPrice", async (req, res)=>{

    
    const price= await stripe.prices.list({
        lookup_keys: ['subscription_price']
        
    });
    res.json(price.data)
}

)

router.post("/price", async (req, res)=>{
    const price= await stripe.prices.update(
        "price_1KOQynFGARc0uD7X8wSLNQ2a",
        {
            lookup_key: "subscription_price"
        }
    );
    //console.log(price);
    res.json(price.data);
} )

module.exports= router;