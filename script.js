"use strict";

var inputText = [
    "Did you ever hear the tragedy of Darth Plagueis the Wise?",
    "I thought not. It's not a story the Jedi would tell you.  It's a Sith legend.",
    "Darth Plagueis was a Dark Lord of the Sith, so powerful, and so wise...",
    "he could use the Force to influence the midichlorians to create... life.",
    "He had such a knowledge of the dark side that he could even keep the ones he cared about from dying.",
    "The dark side of the Force is a pathway to many abilities some consider to be... unnatural.",
    "He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did.",
    "Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep.",
    "It's ironic... he could save others from death... but not himself."
];
var displayText = "";

var currentLine = 0;
var i = 0;
// this is how we chunk up inputText and display it one character at a time
// we don't (can't!) use a for loop, because JavaScript is dumb.  I meant asynchronous.
var printerFunction = function() {
    if (currentLine < inputText.length && i < inputText[currentLine].length) {
        displayText = displayText.concat(inputText[currentLine][i]);
        i++;
        document.getElementById("textDisplay").textContent = displayText;
        // pause dramatically on periods; the best actors do so for 800 ms
        if (displayText[displayText.length-1] === ".") {
            // it's also good practice to not move your mouth when you're not speaking
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                // don't forget to start speaking again
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, 800);
        }
        // pause dramatically on commas, but less dramatically than for periods.  500 ms is good
        else if (displayText[displayText.length-1] === ",") {
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, 500);
        }
        // every other character should be spoken at a rate of one character per 35 milliseconds
        else {
            setTimeout(function() {
                printerFunction();
            }, 35);
        };
    }
    else {
        // don't forget to say the next line, palpy!
        if (currentLine < inputText.length) {
            i = 0;
            currentLine++;
            displayText = "";
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, 4000);
        }
        // and NEVER stop talking!
        else {
            currentLine = 0;
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, 8000);
        };
    };

};

// ---------------------------------- function calls ----------------------------------

printerFunction(); // infinite loop