let express = require('express');
let router= express.Router();
//let mongoose = require('mongoose');

//Conecct to model
let Employee = require('../models/employee');
const employee = require('../models/employee');

//Manage routes
router.get('/',(req,res,next)=>{
    Employee.find((err,employeeList)=>{
        if(err){
            return console.err(err);
        }else{
            //console.log(employeelist);
            res.render('employee/list',{title: 'Employee Info', employeeList: employeeList});
        }
    });
});

//to open add product page
router.get('/add',(req,res,next)=>{
    res.render('employee/add',{title: 'Add Employee'});
});

//insert product data to mongoDB collection
router.post('/add',(req,res,next)=>{
    //getting data from the form
    let newEmployee = Employee({
        "name": req.body.name,
        "address": req.body.company,
        "phone": req.body.price,
    });

    //insert data into mongoDB
    Employee.create(newEmployee, (err,Employee) =>{
        if (err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/employees');
        }
    });
});

//write code to delete data from the collection
router.get('/delete/:id',(req,res,next)=>{
    let id = req.params.id;

    Employee.remove({_id: id}, (err)=>{
        
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/employees');
        }
    });
});


module.exports= router;