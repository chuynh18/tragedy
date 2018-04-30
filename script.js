"use strict";

// this will be the user's input
var inputText; // only need to declare it, not assign it any value.  It'll be assigned a value later by a prompt
// this is what will be pushed to the screen
var displayText = ""; // defined as an empty string because we add to displayText later.  If we only declared displayText, we'd get an error

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
    randomizeColor(); // always be changin' colors...
    }, 100); // ...every 100 millis!
};

// this is how we chunk up inputText and display it seemingly one character at a time
// we don't (can't!) use a for loop, because javascript is dumb
// okay, not dumb, but asynchronous
var i = 0;
var printerFunction = function() {
    if (i < inputText.length) { // this makes it so Mel speaks complete thoughts
        var maxValue = inputText.length;
        displayText = displayText.concat(inputText[i]);
        i++;
        document.getElementById("textDisplay").textContent = displayText;
        setTimeout(function() {
            printerFunction(); // keep on going until you finish "saying" what you "want" to say!
        }, 100); // how long to wait in millis between characters
    }
    else { // else we start all over again
        setTimeout(function() {
        i = 0; // gotta reset our variable to 0
        displayText = "";
        printerFunction(); // never shut up, even when you've already finished "speaking"!
        }, 5000); // how long to wait in millis before starting all over again
    };
};

//------------------------------------------------------------------------------

// what words do you want to put in Mel's mouth?
inputText = prompt("What does Mel say?", "Don't forget to sign in to BootCamp Spot!");
// always blinking, never die
randomizeColor();
printerFunction();