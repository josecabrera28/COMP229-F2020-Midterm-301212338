const trackModel = require('../models/tracks');
const express =require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    trackModel.find((err,TracksList)=>{
        if(err){
            console.error(err);
            console.log(err);
        }else{
            res.render('tracks/list',{title: "Tracks",TracksList: TracksList});
        }
    });
});

module.exports=router;