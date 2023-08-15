var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var room=new Schema(
    {
        room:String,
        availability:Number,
        priceperNight:Number,
       

        
    }
);
module.exports=mongoose.model('Room',room);