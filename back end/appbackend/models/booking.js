var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var booking=new Schema(
    {
        userName:String,
        age:Number,
        gender:String,
        no:Number,
        isDeleted:{type:Boolean,default:false},
        isLive:{type:Boolean,default:false}

        
    }
);
module.exports=mongoose.model('Booking',booking);