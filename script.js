"use strict"; // The Dark Side of the Force is a pathway to many abilities some consider to be unnatural, but you're not going to get there unless you are strict about it

// a literary and cinematic masterpiece
var input = [
    {text: "Did you ever hear", audio: "1.webm", delay: 68, lineDelay: 0, commaDelay: 500, periodDelay: 800},
    {text: "the tragedy of Darth Plagueis the Wise?", delay: 84, lineDelay: 1250, commaDelay: 500, periodDelay: 800},
    {text: "I thought not.", audio: "2.webm", delay: 70, lineDelay: 0, commaDelay: 500, periodDelay: 850},
    {text: "It's not a story the Jedi would tell you.", delay: 55, lineDelay: 0, commaDelay: 500, periodDelay: 1700},
    {text: "It's a Sith legend.", delay: 70, lineDelay: 600, commaDelay: 500, periodDelay: 800},
    {text: "Darth Plagueis", audio: "3.webm", delay: 85, lineDelay: 700, commaDelay: 500, periodDelay: 800},
    {text: "was a Dark Lord of the Sith,", delay: 75, lineDelay: 0, commaDelay: 500, periodDelay: 0},
    {text: "so powerful, and so wise...", delay: 85, lineDelay: 700, commaDelay: 0, periodDelay: 0},
    {text: "He could use the Force to influence the midichlorians... to create... life.", audio: "4.webm", delay: 65, lineDelay: 400, commaDelay: 500, periodDelay: 533},
    {text: "He had such a knowledge of the Dark Side, he could even", audio: "5.webm", delay: 78, lineDelay: 500, commaDelay: 500, periodDelay: 800},
    {text: "keep the ones he cared about... from dying.", delay: 78, lineDelay: 1150, commaDelay: 500, periodDelay: 500},
    {text: "The Dark Side", audio: "6.webm", delay: 92, lineDelay: 0, commaDelay: 500, periodDelay: 800},
    {text: "of the Force", delay: 50, lineDelay: 0, commaDelay: 500, periodDelay: 800},
    {text: "is a pathway to many abilities some consider to be", delay: 92, lineDelay: 500, commaDelay: 500, periodDelay: 800},
    {text: "unnatural.", delay: 92, lineDelay: 300, commaDelay: 500, periodDelay: 800},
    {text: "He became so powerful...", audio: "7.webm", delay: 65, lineDelay: 0, commaDelay: 500, periodDelay: 750},
    {text: "the only thing he was afraid of was...", delay: 54, lineDelay: 0, commaDelay: 500, periodDelay: 576},
    {text: "losing his power", delay: 62, lineDelay: 600, commaDelay: 500, periodDelay: 800},
    {text: "which", delay: 62, lineDelay: 400, commaDelay: 500, periodDelay: 800},
    {text: "eventually of course he did.", delay: 40, lineDelay: 600, commaDelay: 500, periodDelay: 800},
    {text: "Unfortunately, he taught his apprentice", audio: "8.webm", delay: 60, lineDelay: 300, commaDelay: 1200, periodDelay: 500},
    {text: "everything he knew...", delay: 50, lineDelay: 0, commaDelay: 1200, periodDelay: 500},
    {text: "then his apprentice killed him in his sleep.", delay: 55, lineDelay: 300, commaDelay: 1200, periodDelay: 500},
    {text: "Ironic... he could save others from death...", audio: "9.webm", delay: 55, lineDelay: 0, commaDelay: 500, periodDelay: 550},
    {text: "but not himself.", delay: 53, lineDelay: 0, commaDelay: 500, periodDelay: 0}
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
        forcePowers++; // UNLIMITED POWER!!!!!!!!!
        document.getElementById("textDisplay").textContent = displayText;
        if (forcePowers === 1) {
            // this check will hopefully allow me make it so text and audio don't have to have a 1:1 relationship inside var input
            if ("audio" in input[currentLine]) {
                audio = new Audio(input[currentLine].audio);
                audio.oncanplay = printerFunction();
                audio.play();
            }
            else {
            setTimeout(function() {
                printerFunction();
            }, input[currentLine].delay);
            };
        }
        // pause dramatically on periods; the best actors do so for 800 ms
        else if (displayText[displayText.length-1] === ".") {
            // it's also good practice to not move your mouth when you're not speaking
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                // don't forget to start speaking again
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, input[currentLine].periodDelay);
        }
        // pause dramatically on commas, but less dramatically than for periods.  500 ms is good
        else if (displayText[displayText.length-1] === ",") {
            document.getElementById("palpatine").src="palpysmallstill.jpg";
            setTimeout(function() {
                document.getElementById("palpatine").src="palpysmalltalk.gif";
                printerFunction();
            }, input[currentLine].commaDelay);
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
            forcePowers = 0; // what?!
            currentLine++;
            if (currentLine < input.length) {
                if ("audio" in input[currentLine]) {
                    displayText = "";
                    document.getElementById("palpatine").src="palpysmallstill.jpg";
                }
                else {
                    displayText += " ";
                };
            };
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