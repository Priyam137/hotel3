var express = require('express');
var router = express.Router();
var Booking=require('../models/booking');

/* GET users listing. */
router.get('/add', function(req, res, next) {
    res.render('index', { title: 'calling from booking' });
});

router.post('/entername',async(req,res)=>{
    try{
      let booking=await new Booking(req.body).save();
      res.json({message: "Name added successfully...",
   data: booking,success:true})
    }
    catch(err){
      res.json({message:err.message,success:false})
    }
  });
  
  router.get('/namelist',async(req,res)=>{
    try{
      const name=await Booking.find().exec();
      res.json({message: "detail product listing",
   data: name,success:true});
    }
    catch(err){
      res.json({message:err.message,success:false})
    }
  });

module.exports = router;
