var express = require("express");
var router = express.Router();
var passport = require("passport");
var ticket = require("../models/ticket");
//Route to a form for new entry 
router.get("/", function (req, res) {

    res.render("test");
});
//Route to a form for updating the date of the ticket 
router.get("/edit", function (req, res) {
    res.render("test1");
});

//Route to a form for deleting a specific entry 
router.get("/delete", function (req, res) {

    res.render("test2");
});

//Route to a form for getting  entries date-wise 
router.get("/getEntries", function (req, res) {

    res.render("test3");
});

//

//endpoint to get ticket as per the mentioned date
router.post("/ticketByTime", function (req, res) {
    var time = req.body.time;
    console.log(req.body);
    var dates = req.body.date + "T" + time + ":00";
    console.log(dates);
    ticket.find({time: dates}, function (err, ticketByDate) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(ticketByDate);
        }
    });
});

//endpoint to get user with specific ID
router.get("/user/:id", function (req, res) {
    ticket.findById(req.params.id, function (err, tickets) {
        if (err) {
            console.log("Error");
        }
        else {
            var username = tickets.userId.username;
            var phoneNo = tickets.userId.phoneNo;
            res.send({ username, phoneNo });
        }
    });
});
//endpoint to make an entry of a ticket
router.post("/login", function (req, res) {
    var users = req.body.username;
    var mobile = req.body.MobileNo;
    var time = req.body.time;
    var dates = req.body.date + "T" + time + ":00";
    console.log(dates);
    console.log(Date.parse(dates));
    var newTicket = { userId: { username: users, phoneNo: mobile }, flag: true, time: dates };

    ticket.count({ time: dates }, function (err, count) {
        if (err) {
            console.log("error");
        }
        else if (count <= 20) {
            ticket.create(newTicket, function (err, tickets) {
                if (err) {
                    console.log("ERROR");
                }
                else {
                    console.log("Successfully Created");
                }
            });
        }

        res.redirect("/");


    });
});
//endpoint to edit the date
router.put("/edit", function (req, res) {
    var time = req.body.time;
    var dates = req.body.date + "T" + time + ":00";
    ticket.findByIdAndUpdate(req.body.ticketId, { time: dates }, function (err, update) {
        if (err) {
            console.log("ERROR");
        }
        else {
            res.redirect("/");
        }
    });

});

//endpoint to delete it via ticketID
router.delete("/delete", function (req, res) {

    ticket.findByIdAndDelete(req.params.id, function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
    });


});

//=======================================================//
module.exports = router;

