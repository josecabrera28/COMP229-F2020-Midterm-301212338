const { Mongoose } = require('mongoose');
const projectModel = require('../models/projects');
const express =require('express');
const router = express.Router();

//READ
router.get('/',async (req,res,next)=>{
    await projectModel.find((err,ProjectsList)=>{
        if(err){
            console.error(err);
            console.log(err);
        }else{
            res.render('projects/list',{title: "Projects",ProjectsList: ProjectsList});
        }
    });
});

//CREATE
router.get('/add',async (req,res,next)=>{
    res.render('projects/add',{title: "Add a Project"});
});

router.post('/add',async (req,res,next)=>{
    let projectToAdd = projectModel ({
        "title": req.body.title,
        "description": req.body.description,
        "deadline": req.body.deadline});
    await projectModel.create(projectToAdd, (err)=>{
        if (err){
            console.error(err);
            console.log(err);
        }else{
            res.redirect('/projects');
        }
    });
});

//UPDATE
router.get('/edit/:id',async(req,res,next)=>{
    let id = req.params.id;
    await projectModel.findById(id, (err,projectFound)=>{
        if(err){
            console.error(err);
            console.log(err);
        }else{
            res.render('projects/edit',{title: "Edit Project",project: projectFound});
        }
    });
});

router.post('/edit/:id',async(req,res,next)=>{
    let id = req.params.id;
    let projectToUpdate = projectModel({
        "_id": id,
        "title": req.body.title,
        "description": req.body.description,
        "deadline": new Date(req.body.deadline)
    });

    await projectModel.updateOne({_id:id},projectToUpdate, (err)=>{
        if(err){
            console.error(err);
            console.log(err);
        }else{
            res.redirect('/projects');
        }
    });
});

module.exports=router;