"use strict"; // The Dark Side of the Force is a pathway to many abilities some consider to be unnatural, but you're not going to get there unless you are strict about it

// a literary and cinematic masterpiece
var input = [
    {text: "Did you ever", audio: "1.webm", delay: 50, lineDelay: 100, commaDelay: 0, periodDelay: 0},
    {text: "hear", delay: 69, lineDelay: 100, commaDelay: 0, periodDelay: 0},
    {text: "the tragedy", delay: 86, lineDelay: 300, commaDelay: 0, periodDelay: 0},
    {text: "of", delay: 92, lineDelay: 100, commaDelay: 0, periodDelay: 0},
    {text: "Darth Plagueis", delay: 92, lineDelay: 100, commaDelay: 0, periodDelay: 0},
    {text: "the Wise?", delay: 86, lineDelay: 1250, commaDelay: 0, periodDelay: 0},
    {text: "I thought not.", audio: "2.webm", delay: 70, lineDelay: 0, commaDelay: 0, periodDelay: 850},
    {text: "It's not a story the Jedi would tell you.", delay: 55, lineDelay: 1700, commaDelay: 0, periodDelay: 0},
    {text: "It's a Sith legend.", delay: 70, lineDelay: 600, commaDelay: 0, periodDelay: 800},
    {text: "Darth Plagueis", audio: "3.webm", delay: 85, lineDelay: 700, commaDelay: 0, periodDelay: 0},
    {text: "was a Dark Lord of the Sith,", delay: 75, lineDelay: 0, commaDelay: 500, periodDelay: 0},
    {text: "so powerful, and so wise...", delay: 85, lineDelay: 100, commaDelay: 0, periodDelay: 200},
    {text: "He could use", audio: "4.webm", delay: 65, lineDelay: 200, commaDelay: 0, periodDelay: 0},
    {text: "the Force", delay: 65, lineDelay: 300, commaDelay: 0, periodDelay: 0},
    {text: "to influence the midichlorians...", delay: 65, lineDelay: 100, commaDelay: 0, periodDelay: 400},
    {text: "to create...", delay: 65, lineDelay: 100, commaDelay: 0, periodDelay: 520},
    {text: "life.", delay: 65, lineDelay: 700, commaDelay: 0, periodDelay: 400},
    {text: "He had such a knowledge of the Dark Side, he could even", audio: "5.webm", delay: 78, lineDelay: 500, commaDelay: 500, periodDelay: 0},
    {text: "keep", delay: 78, lineDelay: 380, commaDelay: 0, periodDelay: 500},
    {text: "the ones he cared about... from dying.", delay: 80, lineDelay: 1150, commaDelay: 0, periodDelay: 460},
    {text: "The Dark Side", audio: "6.webm", delay: 92, lineDelay: 0, commaDelay: 0, periodDelay: 0},
    {text: "of the Force", delay: 50, lineDelay: 0, commaDelay: 0, periodDelay: 0},
    {text: "is a pathway to many abilities some consider to be", delay: 92, lineDelay: 550, commaDelay: 0, periodDelay: 0},
    {text: "unnatural.", delay: 100, lineDelay: 300, commaDelay: 0, periodDelay: 800},
    {text: "He became so powerful...", audio: "7.webm", delay: 72, lineDelay: 0, commaDelay: 0, periodDelay: 730},
    {text: "the only thing he was afraid of was...", delay: 54, lineDelay: 0, commaDelay: 0, periodDelay: 576},
    {text: "losing his power", delay: 62, lineDelay: 600, commaDelay: 0, periodDelay: 0},
    {text: "which", delay: 62, lineDelay: 400, commaDelay: 0, periodDelay: 0},
    {text: "eventually of course he did.", delay: 40, lineDelay: 1400, commaDelay: 0, periodDelay: 0},
    {text: "Unfortunately, he taught his apprentice", audio: "8.webm", delay: 60, lineDelay: 300, commaDelay: 1200, periodDelay: 0},
    {text: "everything he knew...", delay: 50, lineDelay: 0, commaDelay: 1200, periodDelay: 500},
    {text: "then his apprentice killed him in his sleep.", delay: 55, lineDelay: 800, commaDelay: 0, periodDelay: 0},
    {text: "Ironic...", audio: "9.webm", delay: 80, lineDelay: 0, commaDelay: 0, periodDelay: 525},
    {text: "he could save others from death...", delay: 55, lineDelay: 0, commaDelay: 0, periodDelay: 550},
    {text: "but not himself.", delay: 80, lineDelay: 0, commaDelay: 0, periodDelay: 0}
];
var displayText = "";

var currentLine = 0;
var forcePowers = 0; // this is a temporary situation that will rectify itself once you embrace the Dark Side

var audio = "";

// this is how we chunk up input[currentLine].text and display it one character at a time
// we don't (can't!) use a for loop, because JavaScript is dumb.  I meant asynchronous.
var printerFunction = function() {
    if (currentLine < input.length && forcePowers < input[currentLine].text.length) {
        displayText = displayText.concat(input[currentLine].text[forcePowers]);
        document.getElementById("textDisplay").textContent = displayText;
        if (forcePowers === 0) {
            // if the key "audio" exists in input[currentLine], play it
            if ("audio" in input[currentLine]) {
                forcePowers++;  // UNNNLLIMITED... POWERRRR!!!!
                audio = new Audio(input[currentLine].audio);
                audio.play();
                // prevent audio and text from getting out of sync on slow internet connections... I hope
                // we'll also preload (I hope) all the audio via audio tags in index.html
                audio.oncanplaythrough = printerFunction;
                document.getElementById("palpatine").src="palpysmalltalk.gif";
            }
            // if there's no key "audio", just continue to print out the text
            else {
                forcePowers++;
                setTimeout(function() {
                    printerFunction();
                }, input[currentLine].delay);
            };
        }
        // pause dramatically on periods
        else if (displayText[displayText.length-1] === ".") {
            // it's also good practice to not move your mouth when you're not speaking
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            forcePowers++;
            setTimeout(function() {
                // don't forget to start speaking again
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, input[currentLine].periodDelay);
        }
        // pause dramatically on commas, too
        else if (displayText[displayText.length-1] === ",") {
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            forcePowers++;
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, input[currentLine].commaDelay);
        }
        // every other character should be spoken at... who knows.  Some other rate.  Please see the array of objects above.
        else {
            setTimeout(function() {
                forcePowers++;
                printerFunction();
            }, input[currentLine].delay);
        };
    }
    else {
        // don't forget to say the next line, palpy!
        if (currentLine < input.length) {
            forcePowers = 0; // what?!
            currentLine++;
            // prevent errors with this check
            if (currentLine < input.length) {
                // only clear out the text and pause speaking if the key "audio" is present in input[currentLine]
                if ("audio" in input[currentLine]) {
                    displayText = "";
                    document.getElementById("palpatine").src="palpysmallstill.jpg";
                }
                else {
                    // otherwise, even though it's a new object, it's semantically part of the same line
                    // so we append a space instead of setting the value of displayText to empty string
                    displayText += " ";
                    // still should pause ol' Palpy or else it looks a little uncanny
                    document.getElementById("palpatine").src="palpysmallstill.jpg";
                };
            };
            // start Palpy talking animation again when it's time to play the next line
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            // we already incremented currentLine, so we need to look at currentLine-1 to get the proper delay value
            }, input[currentLine-1].lineDelay);
        }
        // and NEVER stop talking!  EVERYONE needs to hear the Tragedy of Darth Plagueis the Wise
        else {
            // it begins... again!
            currentLine = 0;
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                displayText = "";
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