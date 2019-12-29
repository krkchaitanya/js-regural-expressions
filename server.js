const express = require("express");
const bodyParser = require("body-parser");

// initialize the express JS application
const regexServer = express();

// middlewares of regexServer
// use body-parser middleware to read or handle the HHTP POST data
regexServer.use(bodyParser.json());
regexServer.use(bodyParser.urlencoded({extended: false}));

// default route of regexServer
regexServer.get("/", (req, res) => {
    res.json({
        title: "Default route of regexServer",
        description: "Gives details and examples of javascript regular expressions"
    });
});


// run the application on port 7277
const port = 7277;
regexServer.listen(port, () => console.log("regexServer is running on port :: " + port));