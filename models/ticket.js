
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var ticketSchema = new mongoose.Schema({
    userId: {username:String,phoneNo:Number},
    time : Date,
    flag: { type: Boolean,default: false },
});

ticketSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("ticket", ticketSchema);
