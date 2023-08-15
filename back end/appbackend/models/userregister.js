var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var appuser=new Schema(
    {
        userName:String,
        email:String,
        password:String

        
    }
);
module.exports=mongoose.model('User',appuser);