"use strict"; // only the strictest code
var inputText;
var spliced ="";

// if I ever want to do things more cleanly someday
var replacementTable = [
{find: "%20", replace: " "},
{find: "%22", replace: '"'},
{find: "%27", replace: "'"},
{find: "%3C", replace: "<"},
{find: "%3E", replace: ">"},
{find: "%60", replace: "`"},
];

var grabURL = function() {
    var URL = window.location.href;
    var start = URL.search("q=");
    if (URL.indexOf("q=") !== -1) {
        for (var i = start + 2; i < URL.length; i++) {
            spliced += URL[i];
        };
        while (spliced.indexOf("%20") !== -1) {
            spliced = spliced.replace("%20", " ");
        };
        while (spliced.indexOf("%22") !== -1) {
            spliced = spliced.replace("%22", '"');
        };
        while (spliced.indexOf("%27") !== -1) {
            spliced = spliced.replace("%27", "'");
        };
        while (spliced.indexOf("%3C") !== -1) {
            spliced = spliced.replace("%3C", "<");
        };
        while (spliced.indexOf("%3E") !== -1) {
            spliced = spliced.replace("%3E", ">");
        };
        while (spliced.indexOf("%60") !== -1) {
            spliced = spliced.replace("%60", "`");
        };
        inputText = spliced;
    }
    else {
        inputText = prompt("What does Mel say?", "Don't forget to sign in to BootCamp Spot!");
    };
};
grabURL();

// this is what will be pushed to the screen
// defined as an empty string because we append strings to displayText later.  If we only declared displayText, we'd get an error
var displayText = "";

// this generates a random string beginning with "#", followed by numChars number of hex digits (that is, 0 through f)
// we'll use it in randomizeColor()
var genRandomColor = function(numChars) {
    // all the hexadecimal digits
    var colorArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    // hex colors start with #, so let's start off with randomColor = "#"
    var randomColor = "#";
    // loop numChars times, which gives us numChars number of hexadecimal digits
    for (var i = 0; i < numChars; i++) {
        // append random hexadecimal digits
        randomColor += colorArray[Math.floor(Math.random()*colorArray.length)];
    }
    // randomColor, you know that thing you built for us?  SPIT IT OUT.  NOW.
    return randomColor;
};

// this is the function that never ends
var randomizeColor = function() {
    setTimeout(function() {
        // we always want six to get a valid hex color
        document.getElementById("textDisplay").style.color = genRandomColor(6);
        // always be changin' colors...
        randomizeColor();
    // ...every 100 millis!
    }, 100);
};

// this is how we chunk up inputText and display it seemingly one character at a time
// we don't (can't!) use a for loop, because javascript is dumb
// okay, not dumb, but asynchronous
var i = 0;
var printerFunction = function() {
    // this makes it so this branch only runs when there's more text to be displayed
    if (i < inputText.length) {
        // this builds the strings for us by concatenating the next letter in the string we want Mel to say onto displayText
        displayText = displayText.concat(inputText[i]);
        // this makes it so the string that the above line builds for us gets longer by 1 char each time
        i++;
        // this is what actually displays displayText on the page
        document.getElementById("textDisplay").textContent = displayText;
        // we want to wait before kicking off the next cycle, so we put a delay on printerFunction() calling itself
        setTimeout(function() {
            // keep on going until you finish "saying" what you "want" to say!
            printerFunction();
            // how long to wait in millis before kicking off printerFunction() again - this makes it so each additional letter appears 100 millis later
        }, 100);
    }
    
    else {
        // i = 0 all over again, because i is our iterator
        i = 0;
        // it's okay to clear out displayText ASAP because it won't be visually cleared until printerFunction() calls itself
        displayText = "";
        // we want to wait a good long while before totally restarting
        setTimeout(function() {
            // never shut up, even when you've already finished "speaking"!
            printerFunction();
        // how long to wait in millis before starting all over again
        }, 5000);
    };
};

//------------------------------------------------------------------------------

// what words do you want to put in Mel's mouth?

randomizeColor();
printerFunction();