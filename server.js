const express = require("express");

const APP = express();


APP.get("/", (req, res) => {
    res.send("<button>Hello World</button>");
});

APP.get("/json", (req, res) => {
    res.send({
        path: "root/json",
        test: "hello world"
    });
});


APP.listen(8888, () => console.log("Web server is running"));