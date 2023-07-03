const { Mongoose } = require('mongoose');
const trackModel = require('../models/tracks');
const express =require('express');
const router = express.Router();

//READ
router.get('/',async (req,res,next)=>{
    await trackModel.find((err,TracksList)=>{
        if(err){
            console.error(err);
            console.log(err);
        }else{
            res.render('tracks/list',{title: "Tracks",TracksList: TracksList});
        }
    });
});

//CREATE
router.get('/add',async (req,res,next)=>{
    res.render('tracks/add',{title: "Add a Track"});
});

router.post('/add',async (req,res,next)=>{
    let trackToAdd = trackModel ({
        "name": req.body.name,
        "artist": req.body.artist,
        "duration": req.body.duration,
        "year": req.body.year});
    await trackModel.create(trackToAdd, (err)=>{
        if (err){
            console.error(err);
            console.log(err);
        }else{
            res.redirect('/tracks');
        }
    });
});

//UPDATE
router.get('/edit/:id',async(req,res,next)=>{
    let id = req.params.id;
    await trackModel.findById(id, (err,trackFound)=>{
        if(err){
            console.error(err);
            console.log(err);
        }else{
            res.render('tracks/edit',{title: "Edit track",track: trackFound});
        }
    });
});

router.post('/edit/:id',async(req,res,next)=>{
    let id = req.params.id;
    let trackToUpdate = trackModel({
        "_id": id,
        "name": req.body.name,
        "artist": req.body.artist,
        "duration": req.body.duration,
        "year": req.body.year
    });

    await trackModel.updateOne({_id:id},trackToUpdate, (err)=>{
        if(err){
            console.error(err);
            console.log(err);
        }else{
            res.redirect('/tracks');
        }
    });
});

module.exports=router;