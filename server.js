const express = require("express");
const path = require("path");

const APP = express();


APP.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

APP.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

APP.get("/json", (req, res) => {
    res.send({
        path: "root/json",
        test: "hello world"
    });
});


APP.listen(8888, () => console.log("Web server is running on localhost:8888"));