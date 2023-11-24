var express = require('express');
var router = express.Router();
var Room=require('../models/room');
var Admin=require('../models/adminregister');


let{encryptPassword,comparePasswords,generateJwt}=require('../utils/loginutils');



/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('calling from admin');
});




router.post('/addrooms',async(req,res)=>{
  try{
    let room=await new Room(req.body).save();
    res.json({message: "Room added successfully...",
 data: room,success:true})
  }
  catch(err){
    res.json({message:err.message,success:false})
  }
});

router.get('/roomlist',async(req,res)=>{
  try{
    const listroom=await Room.find().exec();
    res.json({message: "detail room listing",
 data: listroom,success:true});
  }
  catch(err){
    res.json({message:err.message,success:false})
  }
});

router.delete('/deleteroom/:id', async (req, res) => {
  try {
    const roomId = req.params.id;
 
    // Find the product by ID and remove it from the database
    const deletedRoom = await Room.findByIdAndRemove(roomId).exec();
 
    if (!deletedRoom) {
      // If the product is not found, return an error response
      return res.status(404).json({ message: 'Room not found', success: false });
    }
 
    res.json({ message: 'Room successfully deleted', success: true });
  } catch (err) {
    // Handle any errors during the deletion process
    res.status(500).json({ message: err.message, success: false });
  }
});

router.post('/updateroom/:id', async (req, res) => {
  try {
    const roomId = req.params.id;
    const roomData = req.body; // Assuming you send the updated data in the request body
 
    // Find the product by ID and update it with the new data
    const updatedRoom = await Room.findByIdAndUpdate(roomId, roomData, {
      new: true, // To return the updated product instead of the old one
    }).exec();
 
    if (!updatedRoom) {
      // If the product is not found, return an error response
      return res.status(404).json({ message: 'Room not found', success: false });
    }
 
    res.json({ message: 'Room successfully updated', room: updatedRoom, success: true });
  } catch (err) {
    // Handle any errors during the update process
    res.status(500).json({ message: err.message, success: false });
  }
});
 
router.get('/rooms/:id', async (req, res) => {
  try {
    const roomId = req.params.id;
 
    // Find the product in the database based on the provided ID
    const room = await Room.findById(roomId);
 
    if (!room) {
      // If the product with the given ID is not found, return an error response
      return res.status(404).json({ message: 'Room not found', success: false });
    }
 
    // If the product is found, return the product details
    res.json({ message: 'Room details fetched successfully', data: room, success: true });
  } catch (err) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: err.message, success: false });
  }
});
 
 
router.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const productId = req.params.id;
 
    // Find the product by ID and remove it from the database
    const deletedProduct = await Product.findByIdAndRemove(productId).exec();
 
    if (!deletedProduct) {
      // If the product is not found, return an error response
      return res.status(404).json({ message: 'Product not found', success: false });
    }
 
    res.json({ message: 'Product successfully deleted', success: true });
  } catch (err) {
    // Handle any errors during the deletion process
    res.status(500).json({ message: err.message, success: false });
  }
});


// User Register API starts here 
 
router.post('/adminregister', async (req, res) => {
  try {
 
    const AdminEmailCheck =
      await Admin.findOne(
        { email: new RegExp(`^${req.body.email}$`, 'i') }).exec();
 
    // console.log(adminEmailChk);
    if (AdminEmailCheck)
      throw new Error('Email already registered');
 
    req.body.password = await encryptPassword(req.body.password);
 
    let admin = await new Admin(req.body).save();
    res.status(200).json({ message: "Admin Register Successfully", data: admin, success: true });

 
  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'Error', data: err, success: false });
  }
})
 
//   admin Register API Close
 
 
// admin Login API Starts Here
 
router.post('/adminlogin', async (req, res) => {
  try {
 
    const adminlogin =
      await Admin.findOne
        ({
          email: new
            RegExp(`^${req.body.email}$`, 'i')
        }).exec();
 
 
    if (!adminlogin)
      throw new Error("You are not registered");
 
    const checkPassword = await
      comparePasswords(req.body.password, adminlogin.password);
 
    if (!checkPassword)
      throw new Error("Check Your Credentials");
 
    const token = await generateJwt(Admin._id);
    res.json({ message: 'Logged In', data: token, success: true });
 
  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message,  success: false });
    else
      res.json({ message: 'Error',  success: false });
  }
});


module.exports = router;