"use strict"; // only the strictest code

// this will be the user's input
var inputText; // only need to declare it, not assign it any value.  It'll be assigned a value later by a prompt
// this is what will be pushed to the screen
var displayText = ""; // defined as an empty string because we add to displayText later.  If we only declared displayText, we'd get an error

// this generates a random string beginning with "#", followed by numChars number of hex digits (that is, 0 through f)
// we'll use it in randomizeColor()
var genRandomColor = function(numChars) {
    var colorArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]; // all the hexadecimal digits
    var randomColor = "#"; // hex colors start with #
    for (var i = 0; i < numChars; i++) { // loop numChars times, which gives us numChars number of hexadecimal digits
        randomColor += colorArray[Math.floor(Math.random()*colorArray.length)]; // append random hexadecimal digits
    }
    return randomColor; // randomColor, you know that thing you built for us?  SPIT IT OUT.  NOW.
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
    if (i < inputText.length) { // stop when you reach the end of the string given by the prompt
        displayText = displayText.concat(inputText[i]); // this builds the strings for us
        i++; // this makes it so the string that the above line builds for us gets longer by 1 char each time
        document.getElementById("textDisplay").textContent = displayText; // this is what actually displays displayText on the page
        setTimeout(function() { // we want to wait before kicking off the next cycle, so we put a delay on printerFunction() calling itself
            printerFunction(); // keep on going until you finish "saying" what you "want" to say!
        }, 100); // how long to wait in millis between characters
    }
    else { // else we start all over again
        i = 0; // gotta reset our variable to 0
        displayText = ""; // it's okay to clear out displayText ASAP because it won't be visually cleared until printerFunction() calls itself
        setTimeout(function() { // we want to wait a good long while before totally restarting
            printerFunction(); // never shut up, even when you've already finished "speaking"!
        }, 5000); // how long to wait in millis before starting all over again
    };
};

//------------------------------------------------------------------------------

inputText = prompt("What does Mel say?", "Don't forget to sign in to BootCamp Spot!"); // what words do you want to put in Mel's mouth?
randomizeColor(); // always blinking, never die
printerFunction(); // once it begins, it'll never end