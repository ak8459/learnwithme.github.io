const express = require("express");
const routes =  express.Router();
const Detail = require('../models/details');
const slider = require('../models/slider');
const Services = require('../models/Service');
const Contact = require("../models/contact");

//creating routes
routes.get("/",async(req,res)=>{
try {
    const id = '632d4aefdd028b097f224a59';
    const getId = await Detail.findOne({id});
    const sliderData = await slider.find({});
    const services =  await Services.find({});
        res.render("index",{
            details : getId,
            slider: sliderData,
            services_Data: services,
        });
    
}catch (error) {
    throw new Error(error);
}   
})

routes.get("/gallery",async(req,res)=>{
    try {
        const id = '632d4aefdd028b097f224a59';
        const getId =await Detail.findOne({id});
        
            res.render('gallery',{
                details : getId
            });
        
    } catch (error) {
        throw new Error(error);
    }
       
})
// process contact form
routes.post("/getFormData",async(req,res)=>{
    
    try {
        const data = await Contact.create(req.body);
  console.log(data);
  res.redirect("/");
    } catch (error) {
         console.log(error);
         res.redirect("/")
    }
})

module.exports = routes;