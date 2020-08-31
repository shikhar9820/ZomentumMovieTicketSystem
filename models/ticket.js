//Ticket Schema
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var ticketSchema = new mongoose.Schema({
    userId: {username:String,phoneNo:Number},//Ticket User 
    time : Date, //Ticket Booking Time in UTC
    flag: { type: Boolean,default: false },// Flag for marking the expiry of ticket
});

ticketSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("ticket", ticketSchema);
