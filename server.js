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
        description: "Regular expressions are nothing but a search pattern. We look for existence of certain pattern in a string"
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


// test method 
regexServer.get("/regex/testMethod", (req, res) => {
   let testSentence = "The dod chased the cat";
   let testRegex = /chased/;
   let result = testRegex.test(testSentence);
   res.json({
       description: "test() method: validates the testSentence aginst the testRegex. If the regex value is found in the testSentence string it return boolean value true",
       testSentence: testSentence,
       testRegex: testRegex.toString(),
       result: result
   }); 
});

// match literal strings
regexServer.get("/regex/matchLiteralStrings", (req, res) => {
    let testSentence = "Lost In Space";
    let testRegex = /space/;
    let testRegexWithCaseInsensitive = /space/i;
    let result = testRegex.test(testSentence);
    let result1 = testRegexWithCaseInsensitive.test(testSentence);
    res.json({
        testSentence: testSentence,
        testRegex: testRegex.toString(),
        testRegexWithCaseInsensitive: testRegexWithCaseInsensitive.toString(),
        caseSensitive: result,
        caseInSensitive: result1

    }); 
 });


//  Matching a literal string from multiple options
 regexServer.get("/regex/matchLiteralStringFromMultipleOptions", (req, res) => {
     let testSentence = "Judy, Penny and Will are the children of robinsons";
     let testRegex = /vijay|judy|clarke|will/i;
     let result = testRegex.test(testSentence);
     res.json({
         testSentence: testSentence,
         testRegex: testRegex.toString(),
         result: result
     });
});


// match method
regexServer.get("/regex/extractMatches", (req, res) => {
    let testSentence = "Judy, Penny and Will are the children of robinsons";
    let testRegex = /will/i;
    let result = testSentence.match(testRegex);
    res.json({
        description: "Extract single matche",
        testSentence: testSentence,
        testRegex: testRegex.toString(),
        result: result
    });
});

// extract multiple matches
regexServer.get("/regex/extractMultpleMatches", (req, res) => {
    let testSentence = "Judy, Penny and Will will are the children of robinsons";
    let testRegex = /will|calrke|penny/gi;
    let result = testSentence.match(testRegex);
    res.json({
        description: "Extract multiple matches",
        testSentence: testSentence,
        testRegex: testRegex.toString(),
        result: result
    });
});


// using dot or wildcard period
regexServer.get("/regex/dorOrPeriod", (req, res) => {
    let testSentence = "Judy, Penny and Will will are the children of robinsons";
    let testRegex = /wil.|calrke|pen../gi;
    let result = testSentence.match(testRegex);
    res.json({
        description: "Wilcard period or dot ",
        testSentence: testSentence,
        testRegex: testRegex.toString(),
        result: result
    });
});

// single character multiple options
regexServer.get("/regex/singleCharacterMultipleOptions", (req, res) => {
    let testSentence = "Judy, Penny and Will will are the children of robinsons";
    let testSentence1 = "space spade sport";
    const testRegex = /ju[aeiou]y|penn[aiu]|w[aeiou]ll/gi;
    const testRegex1 = /sp[aei][cdio]e|spo../gi;
    let result = testSentence.match(testRegex);
    let result1 = testSentence1.match(testRegex1);
    res.json({
        description: "single character multiple options ",
        testSentence: testSentence,
        testRegex: testRegex.toString(),
        testSentence1: testSentence1,
        testRegex1: testRegex1.toString(),
        result: result,
        result1: result1
    });
});

















// run the application on port 7277
const port = 7277;
regexServer.listen(port, () => console.log("regexServer is running on port :: " + port));