var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var user=new Schema(
    {
        username:String,
        email:String,
        password:String

        
    }
);
module.exports=mongoose.model('Admin',user);