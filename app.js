//============//
//Dependencies//
//============//
var express = require("express");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var localStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var ticket = require("./models/ticket");
var app = express();
var indexRoutes = require("./routes/index");

//Funtion For deleting the expired tickets
function intervalFunc() {
    ticket.find({}, function (err, tickets) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(tickets);
            tickets.forEach(function (Ticket) {
                console.log(Ticket);
                var Difference = Math.abs(new Date().getTime() - Ticket.time.getTime());
                var Hours = Math.ceil(Difference / (1000 * 3600));
                if (Hours > 8) {
                    ticket.findByIdAndDelete(Ticket._id, function (err) {
                        if (err) console.log(err);
                        console.log("Successful deletion");
                    });

                }
            })
        }
    });
}

//=======================//
//Mongoose configurations//
//=======================//
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/ZTTBS", { useNewUrlParser: true, useFindAndModify: false });
mongoose.set('useCreateIndex', true);


//=====================//
//Express configurations
//=====================//
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(require("express-session")({
    secret: "I am hot",
    resave: false,
    saveUninitialized: false
}));

//=======================//
//Passport Configuration=//
//=======================//

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
passport.use(new localStrategy(user.authenticate()));


app.use(indexRoutes);

//=========================================================================================================

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



setInterval(intervalFunc, 15000);//funtion call which checks after every 150 second
