var express = require("express");
var router = express.Router();
var passport = require("passport");
var ticket = require("../models/ticket");

router.get("/", function (req, res) {

    res.render("test");
});
router.get("/edit", function (req, res) {
    res.render("test1");
});
router.get("/delete", function (req, res) {

    res.render("test2");
});

router.get("/getEntries", function (req, res) {

    res.render("test3");
});
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
            console.log("hi");
            console.log(ticketByDate);
            res.send(ticketByDate);
        }
    });
});
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
                    console.log(err);
                }
                else {
                    console.log("Successfully Created");
                }
            });
        }

        res.redirect("/");


    });
});

router.put("/edit", function (req, res) {
    var time = req.body.time;
    var dates = req.body.date + "T" + time + ":00";
    console.log(req.body.ticketId);
    console.log(dates);
    ticket.findByIdAndUpdate(req.body.ticketId, { time: dates }, function (err, update) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/");
        }
    });

});


router.delete("/delete", function (req, res) {

    ticket.findByIdAndDelete(req.params.id, function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
    });


});

//=======================================================//
module.exports = router;

