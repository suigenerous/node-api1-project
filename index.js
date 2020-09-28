// initial setup

const express = require("express");
const server = express();
server.use(express.json());

// users array

const users = [
    {
        id: 1,
        name: "William Herman",
        bio: "the guy who is writing this program"
    },
    {
        id: 2,
        name: "Balthazar Herman",
        bio: "William's pet rabbit who may or may not be able to use this API."
    }
];

// post to create user

// get to return users array

// get to return a specific user

// deletes a specific user and returns the deleted user

// put to update a specific user

// initialize server on port 5000

const port = 5000;
server.listen(port, () => console.log("server is running port 5000"));
