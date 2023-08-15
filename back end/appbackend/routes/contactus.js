var express = require('express');
var router = express.Router();
var Contact=require('../models/contactus');
//var Admin=require('../models/admin');


//let{encryptPassword,comparePasswords,generateJwt}=require('../utils/loginutils');



/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('calling from admin');
});




router.post('/customerdetails',async(req,res)=>{
  try{
    let contact=await new Contact(req.body).save();
    res.json({message: "Details submitted successfully...",
 data: contact,success:true})
  }
  catch(err){
    res.json({message:err.message,success:false})
  }
});

router.get('/customerlist',async(req,res)=>{
  try{
    const customerlist=await Contact.find().exec();
    res.json({message: "Customer list",
 data: customerlist,success:true});
  }
  catch(err){
    res.json({message:err.message,success:false})
  }
});
module.exports = router;