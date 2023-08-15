var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var contact=new Schema(
    {
        name:String,
        email:String,
        message:String

        
    }
);
module.exports=mongoose.model('Contact',contact);