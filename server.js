const express = require("express");

const APP = express();

APP.get("/", (req, res) => {
    res.send("<button>Hello World</button>");
});

APP.listen(8888, () => console.log("Web server is running"));