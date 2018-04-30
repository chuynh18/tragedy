"use strict";

// this will be the user's input - placeholder for now
var inputText = "Don't forget to sign in to BootCamp Spot!";
// this is where the user's input will be broken into an array
var inputTextToArray = [];
// this is what will be pushed to the screen
var displayText = "";

// this generates a random string beginning with "#", followed by numChars number of hex digits (that is, 0 through f)
// we'll use it in randomizeColor()
var genRandomColor = function(numChars) {
    var colorArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    var randomColor = "#";
    for (var i = 0; i < numChars; i++) {
        randomColor += colorArray[Math.floor(Math.random()*colorArray.length)];
    }
    return randomColor;
};

// this is the function that never ends
var randomizeColor = function() {
    setTimeout(function() {
    document.getElementById("textDisplay").style.color = genRandomColor(6); // we always want six to get a valid hex color
    randomizeColor();
    }, 100); // always change colors every 100 millis
};

// this is how we chunk up inputText and display it seemingly one character at a time
var i = 0;
var maxValue = inputText.length;
// we don't use a for loop, because javascript is dumb
// okay, not dumb, but asynchronous
var printerFunction = function() {
    if (i < inputText.length) {
        displayText = displayText.concat(inputText[i]);
        i++;
        document.getElementById("textDisplay").textContent = displayText;
        setTimeout(function() {
            // keep on going until you finish "saying" what you "want" to say!
            printerFunction();
        }, 100); // how long to wait in millis between characters
    }
    else if (i === inputText.length) {
        setTimeout(function() {
        i = 0;
        displayText = "";
        // never shut up, even when you've already finished "speaking"!
        printerFunction();
        }, 5000); // how long to wait in millis before starting all over again
    };
};

//------------------------------------------------------------------------------

// what words do you want to put in Mel's mouth?
inputText = prompt("What does Mel say?", "Don't forget to sign in to BootCamp Spot!");
// always blinking, never die
randomizeColor();
printerFunction();