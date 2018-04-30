// this will be the user's input - placeholder for now
var inputText = "Don't forget to sign in to BootCamp Spot!";
// this is where the user's input will be broken into an array
var inputTextToArray = [];
// this is what will be pushed to the screen
var displayText = "";

colorArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

var genRandomColor = function() {
    var digitOne = colorArray[Math.floor(Math.random()*colorArray.length)];
    var digitTwo = colorArray[Math.floor(Math.random()*colorArray.length)];
    var digitThree = colorArray[Math.floor(Math.random()*colorArray.length)];
    var digitFour = colorArray[Math.floor(Math.random()*colorArray.length)];
    var digitFive = colorArray[Math.floor(Math.random()*colorArray.length)];
    var digitSix = colorArray[Math.floor(Math.random()*colorArray.length)];
    return "#".concat(digitOne,digitTwo,digitThree,digitFour,digitFive,digitSix);
};

var randomizeColor = function() {
    setTimeout(function() {
    document.getElementById("textDisplay").style.color = genRandomColor();
    randomizeColor();
    }, 100);
};
//------------------------------------------------------------------------------
var i = 0;
var j = 0;
var maxValue = inputText.length;

var printerFunction = function() {
    randomizeColor();
    if (i < inputText.length-1) {
        if (j < inputText.length) {
            displayText = displayText.concat(inputText[j]);
            j++;
        }
        setTimeout(function() {
            // randomizeColor();
            document.getElementById("textDisplay").textContent = displayText;
            printerFunction();
            i++;
        }, 100);
    }
    else if (i = inputText.length) {
        setTimeout(function() {
        i = 0;
        j = 0;
        displayText = "";
        printerFunction();
        }, 5000);
    };
};

printerFunction();