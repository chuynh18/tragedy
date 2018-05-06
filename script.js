"use strict";

// a literary and cinematic masterpiece
var input = [
    {text: "Did you ever hear the tragedy of Darth Plagueis the Wise?", audio: "1.webm", delay: 84, lineDelay: 1250},
    {text: "I thought not. It's not a story the Jedi would tell you.  It's a Sith legend.", audio: "2.webm", delay: 70, lineDelay: 600},
    {text: "Darth Plagueis was a Dark Lord of the Sith, so powerful, and so wise", audio: "3.webm", delay: 85, lineDelay: 700},
    {text: "He could use the Force to influence the midichlorians.. to create.. life.", audio: "4.webm", delay: 65, lineDelay: 400},
    {text: "He had such a knowledge of the Dark Side, he could even keep the ones he cared about... from dying.", audio: "5.webm", delay: 78, lineDelay: 1150},
    {text: "The Dark Side of the Force is a pathway to many abilities some consider to be unnatural.", audio: "6.webm", delay: 92, lineDelay: 300},
    {text: "He became so powerful... the only thing he was afraid of was.. losing his power which eventually of course he did.", audio: "7.webm", delay: 62, lineDelay: 600},
    {text: "Unfortunately, he taught his apprentice everything he knew... then his apprentice killed him in his sleep.", audio: "8.webm", delay: 60, lineDelay: 300},
    {text: "Ironic.. he could save others from death.. but not himself.", audio: "9.webm", delay: 62, lineDelay: 0}
];
var displayText = "";

var currentLine = 0;
var i = 0;

var audio = "";

// this is how we chunk up input[currentLine].text and display it one character at a time
// we don't (can't!) use a for loop, because JavaScript is dumb.  I meant asynchronous.
var printerFunction = function() {
    if (currentLine < input.length && i < input[currentLine].text.length) {
        displayText = displayText.concat(input[currentLine].text[i]);
        i++;
        document.getElementById("textDisplay").textContent = displayText;
        if (i === 1) {
            audio = new Audio(input[currentLine].audio);
            audio.play();
            setTimeout(function() {
                printerFunction();
            }, input[currentLine].delay);
        }
        // pause dramatically on periods; the best actors do so for 800 ms
        else if (displayText[displayText.length-1] === ".") {
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
        // every other character should be spoken at... who knows.  Some other rate.  Please see the array of objects above.
        else {
            setTimeout(function() {
                printerFunction();
            }, input[currentLine].delay);
        };
    }
    else {
        // don't forget to say the next line, palpy!
        if (currentLine < input.length) {
            i = 0;
            currentLine++;
            displayText = "";
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, input[currentLine-1].lineDelay);
        }
        // and NEVER stop talking!  EVERYONE needs to hear the Tragedy of Darth Plagueis the Wise
        else {
            currentLine = 0;
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, 6000);
        };
    };

};

// ---------------------------------- function calls ----------------------------------

document.getElementById("start").addEventListener('click', function() {
    document.getElementById("start").textContent = ""; // it would be horrible if people could repeatedly invoke printerFunction()
    document.getElementById("palpatine").src="palpysmalltalk.gif";
    printerFunction();
});