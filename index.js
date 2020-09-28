// initial setup

const express = require("express");
const server = express();
server.use(express.json());

// users array

let users = [
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

server.post("/api/users", (req, res) => {
    const newUser = req.body;
    if (newUser.name && newUser.bio){
        try {
            users.push(newUser);
            res.status(201).json({message: "user added", data: users});
        } catch {
            res.status(500).json({errorMessage: "There was an error while saving the user to the database"});
        };
    } else {
        res.status(400).json({errorMessage: "Please provide name and bio for the user."});
    };
});

// get to return users array

server.get("/api/users", (req, res) => {
    try {
        const usersToReturn = users;
    }
    catch {
        res.status(500).json({errorMessage: "The users information could not be retrieved."});
    };
    res.status(200).json({data: usersToReturn});
});

// get to return a specific user

server.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const found = users.find(u => u.id === id);
    if (found) {
        res.status(200).json({data: found});
    } else {
        res.status(404).json({message: "user not found"});
    };
});

// deletes a specific user and returns the deleted user

server.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const found = users.find(u => u.id === id);
    if (found) {
        users = users.filter(u => u !== found);
        res.status(200).json({data: found});
    } else {
        res.status(404).json({message: "user not found"});
    };
});

// put to update a specific user

server.put("/api/users/:id", (req, res) => {
    const changed = req.body;
    const id = Number(req.params.id);
    const found = users.find(u => u.id === id);
    if (found) {
        Object.assign(found, changed);
        res.status(200).send({data: changed});
    } else {
        res.status(404).json({message: "user not found"});
    }
});

// initialize server on port 5000

const port = 5000;
server.listen(port, () => console.log("server is running port 5000"));
