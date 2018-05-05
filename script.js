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

var currentLine = 0;

var displayText = "";

// this is how we chunk up inputText and display it one character at a time
// we don't (can't!) use a for loop, because JavaScript is dumb.  I meant asynchronous.
var i = 0;
var printerFunction = function() {
    if (currentLine < inputText.length && i < inputText[currentLine].length) {
        displayText = displayText.concat(inputText[currentLine][i]);
        i++;
        document.getElementById("textDisplay").textContent = displayText;
        
        if (displayText[displayText.length-1] === ".") {
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, 800);
        }
        else if (displayText[displayText.length-1] === ",") {
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, 500);
        }
        else {
            setTimeout(function() {
                printerFunction();
            }, 35);
        };
    }
    else {
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