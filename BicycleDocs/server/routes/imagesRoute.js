const express= require('express');
const router= express.Router();



const multer= require('multer');
const upload= multer({dest: 'images/'});

const fs= require('fs');

const Image= require('../models/imageModel');


router.post('/add-image', upload.single('image'), (req, res)=>{

    const imageModel= new Image({
        name: req.file.filename
    })

    imageModel.save((err, body)=>{
        if(err){
            console.log(err);
            return res.status(400).json({message:  "There was a problem adding the image\n "+err})
        }
        else{
            console.log(body);
            res.send(body._id);
        }
    })
})

router.get('/image-by-id/:id', async (req, res)=>{

    const image= await Image.findById({"_id": req.params.id});

    const imageName= image.name; 

    console.log(imageName);

    const readStream= fs.createReadStream(`images/${imageName}`);

    readStream.pipe(res);

    

    

})



module.exports= router;