const express = require('express');
const router = express.Router();
const User = require('../models/userregister'); // Import your User model
//const Userlogin = require('../models/userlogin'); // Import your Userlogin model
const { encryptPassword, comparePasswords, generateJwt } = require('../utils/loginutils');

// User Register API
router.post('/userregister', async (req, res) => {
  try {

    const userEmailCheck =
      await User.findOne(
        { email: new RegExp(`^${req.body.email}$`, 'i') }).exec();

    // console.log(adminEmailChk);
    if (userEmailCheck)
      throw new Error('Email already registered');

    req.body.password = await encryptPassword(req.body.password);

    let user = await new User(req.body).save();
    res.status(200).json({ message: "User Register Successfully", data: user, success: true });

    //   await nodemail('contact@jiorooms.com', req.body.email, 'Registration Successfull', "You have been successfully registered")
    //   res.json({ message: 'Admin Registered', success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'Error', data: err, success: false });
  }
});

// User Login API
router.post('/userlogin', async (req, res) => {
  try {
    const userlogin = await User.findOne({ email: new 
    RegExp(`^${req.body.email}$`,'i')
   }).exec();

    if (!userlogin) {
      throw new Error('You are not registered');
    }

    const checkPassword = await comparePasswords(req.body.password, userlogin.password);
    if (!checkPassword) 
      throw new Error('Check Your Credentials');
    

    const token = await generateJwt(User._id);
    res.json({ message: 'Logged In', data: token, success: true });
  } catch (err) {
    console.error(err);
    if (err.message)
    res.json({message:err.message,success:false});
  else
    res.json({message:"Error",success:false});
    
  }
});

module.exports = router;




/*router.post('/addproducts',async(req,res)=>{
  try{
    let product=await new Product(req.body).save();
    res.json({message: "product added successfully...",
 data: product,success:true})
  }
  catch(err){
    res.json({message:err.message,success:false})
  }
});

router.get('/productlist',async(req,res)=>{
  try{
    const listproduct=await Product.find().exec();
    res.json({message: "detail product listing",
 data: listproduct,success:true});
  }
  catch(err){
    res.json({message:err.message,success:false})
  }
});

router.post('/updateproduct/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const updateData = req.body; // Assuming you send the updated data in the request body
 
    // Find the product by ID and update it with the new data
    const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, {
      new: true, // To return the updated product instead of the old one
    }).exec();
 
    if (!updatedProduct) {
      // If the product is not found, return an error response
      return res.status(404).json({ message: 'Product not found', success: false });
    }
 
    res.json({ message: 'Product successfully updated', product: updatedProduct, success: true });
  } catch (err) {
    // Handle any errors during the update process
    res.status(500).json({ message: err.message, success: false });
  }
});
 
router.get('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
 
    // Find the product in the database based on the provided ID
    const product = await Product.findById(productId);
 
    if (!product) {
      // If the product with the given ID is not found, return an error response
      return res.status(404).json({ message: 'Product not found', success: false });
    }
 
    // If the product is found, return the product details
    res.json({ message: 'Product details fetched successfully', data: product, success: true });
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
});*/


// User Register API starts here 
 
