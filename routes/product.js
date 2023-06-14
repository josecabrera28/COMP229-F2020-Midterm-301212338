let express = require('express');
let router= express.Router();
//let mongoose = require('mongoose');

//Conecct to model
let Product = require('../models/product');

//Manage routes
router.get('/',(req,res,next)=>{
    Product.find((err,productList)=>{
        if(err){
            return console.err(err);
        }else{
            //console.log(productList);
            res.render('product/list',{title: 'Porduct Info', ProductList: productList});
        }
    });
});

//to open add product page
router.get('/add',(req,res,next)=>{
    res.render('product/add',{title: 'Add Product'});
});

//insert product data to mongoDB collection
router.post('/add',(req,res,next)=>{
    //getting data from the form
    let newProduct = Product({
        "name": req.body.name,
        "company": req.body.company,
        "price": req.body.price,
    });

    //insert data into mongoDB
    Product.create(newProduct, (err,Product) =>{
        if (err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/products');
        }
    });
});
module.exports= router;