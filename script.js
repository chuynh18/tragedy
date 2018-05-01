"use strict";

var inputText;
var spliced ="";
var displayText = "";

// add more characters to find and replace here as they are discovered
const replacementTable = [
    {find: "%20", replace: " "},
    {find: "%21", replace: "!"},
    {find: "%22", replace: '"'},
    {find: "%27", replace: "'"},
    {find: "%2C", replace: ","},
    {find: "%3A", replace: ":"},
    {find: "%3C", replace: "<"},
    {find: "%3E", replace: ">"},
    {find: "%40", replace: "@"},
    {find: "%60", replace: "`"},
    {find: "+", replace: " "} // yes, Mel can't say "+" and it's all GitHub's fault!
];

var parseURL = function() {
    var URL = window.location.href;
    var start = URL.search("q=");
    if (URL.indexOf("q=") !== -1) {
        for (var i = start + 2; i < URL.length; i++) {
            spliced += URL[i];
        };
        for (var i = 0; i < replacementTable.length; i++) {
            while (spliced.indexOf(replacementTable[i].find) !== -1) {
                spliced = spliced.replace(replacementTable[i].find, replacementTable[i].replace)
            };
        };
        inputText = spliced;
    }
    else {
        inputText = prompt("What does Mel say?", "Don't forget to sign in to BootCamp Spot!");
    };
};

var genRandomColor = function(numChars) {
    var colorArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    var randomColor = "#";
    for (var i = 0; i < numChars; i++) {
        randomColor += colorArray[Math.floor(Math.random()*colorArray.length)];
    }
    return randomColor;
};

var randomizeColor = function() {
    setTimeout(function() {
        document.getElementById("textDisplay").style.color = genRandomColor(6);
        randomizeColor();
    }, 100);
};

// this is how we chunk up inputText and display it one character at a time
// we don't (can't!) use a for loop, because JavaScript is dumb.  I meant asynchronous.
var i = 0;
var printerFunction = function() {
    if (i < inputText.length) {
        displayText = displayText.concat(inputText[i]);
        i++;
        document.getElementById("textDisplay").textContent = displayText;
        setTimeout(function() {
            printerFunction();
        }, 50);
    }
    else {
        i = 0;
        displayText = "";
        setTimeout(function() {
            printerFunction();
        }, 5000);
    };
};

// ---------------------------------- function calls ----------------------------------

parseURL();
randomizeColor();
printerFunction();