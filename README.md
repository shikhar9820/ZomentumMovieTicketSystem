
# Zomentum Movie Ticket Booking System
* REST interface for a movie theatre ticket booking system.

## Before You Begin
Before you begin we recommend you read about the technilogical stack primarily used in the project.
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS](http://expressjs.com/en/guide/routing.html) guide for general express topics. You can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).

Your application should run on port 3000 with the *development* environment configuration, so in your browser just go to [http://localhost:3000](http://localhost:3000)

## How to run this Project?
* Clone the Repository.
* Switch to master branch.
* Setup mongoDb databse on your system
* Set up nodejs environment 
* To build the project ,give command "nodemon app.js" on terminal.

### Bussiness cases covered in the project
* An endpoint to book a ticket using a user’s name, phone number, and timings.
* An endpoint to update a ticket timing.
* An endpoint to view all the tickets for a particular time.
* An endpoint to delete a particular ticket.
* An endpoint to view the user’s details based on the ticket id.
* For a particular timing, a maximum of 20 tickets can be booked and tickets with time difference of more then 8 Hours get expired.

