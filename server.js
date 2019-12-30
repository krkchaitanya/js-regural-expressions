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


// Example-1
// find and replce the words of a sentence
regexServer.get("/example1", (req, res) => {
    const story = "There was once an employee named Robinson. Robinsn was not very smart, but she was loyal. I could have promoted robinson but i did not";
    const nameSearchRegex = /Robinso?n/gi
    const updatedStory = story.replace(nameSearchRegex, 'Griffin');
    res.json({
        title: "Example-1",
        story: story,
        updatedStory: updatedStory
    });
});


// Example-2
// Easy search and groups
// regex format:  sandy: =>  [a-z]:
// space: \s
// count: {1,9} 0r +
// gi: global caseinsensitive
regexServer.get("/example2", (req, res) => {
    
    const regex = /([a-z\s]+):\s([a-z]+),\s([a-z]+)/i
    
    const vehiclesInfo = [
        "Honda : Accord, CRV",
        "Toyota : Camry, rav4",
        "subaru : crosstrek, outback"
    ];

   const updatedVehiclesInfo = vehiclesInfo.map(vehicle => vehicle.replace(regex, '$3 $2 => $1'));

    res.json({
        title: "Example-2",
        vehiclesInfo: vehiclesInfo,
        updatedVehiclesInfo: updatedVehiclesInfo
    });
});


// run the application on port 7277
const port = 7277;
regexServer.listen(port, () => console.log("regexServer is running on port :: " + port));