let express = require('express');
const contactsModel = require('../models/contacts');
let router= express.Router();

//RENDER
router.get('/',async (req,res,next)=>{
    await res.render('contacts/form',{title: "Contact Me"});
});

//CREATE

router.post('/',async (req,res,next)=>{
    let contactToAdd = contactsModel ({
        "fname": req.body.fname,
        "lname": req.body.lname,
        "address1": req.body.address1,
        "address2": req.body.address2,
        "city": req.body.city,
        "state": req.body.state,
        "zip": req.body.zip,
        "cel": req.body.cel,
        "request": req.body.request});
    await contactsModel.create(contactToAdd, (err)=>{
        if (err){
            console.error(err);
            console.log(err);
        }else{
            res.redirect('/home');
        }
    });
});


module.exports = router;