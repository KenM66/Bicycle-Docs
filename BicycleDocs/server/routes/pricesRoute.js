const express= require("express");
const router= express.Router();
const stripe= require("stripe")("sk_test_51KOQoOFGARc0uD7XDVGzXFiyibXuB9F6lXNgOfdJnKhkEjt4gDUd4Igr9kC6U6dMDpjlqIul8Sh4Qdsltg5hW1An00GXJSgs5I");

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