"use-strict";

console.log("color.js says hello");

const guessColorHeading = document.getElementById('colorValue');
var buttons = document.getElementsByClassName('colorButton');

console.log(guessColorHeading)
// guessColorHeading.innerHTML = '<div>Hello world!</div>';

function setButtonColor(buttons, red, green, blue) {
    buttons.setAttribute('style',
        'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
};

function makeRandomColorValue() {
    return Math.round(Math.random() * 255);
}

var answerMessage = document.getElementById('answer');

function startGame() {
    // refresh game page message
    answerMessage.innerHTML = "";

    var colorAnswerButton = Math.round(Math.random() * (buttons.length - 1));
    console.log(colorAnswerButton);

    for (var i = 0; i < buttons.length; ++i) {
        var red = makeRandomColorValue();
        var green = makeRandomColorValue();
        var blue = makeRandomColorValue();
        var blue = makeRandomColorValue();

        setButtonColor(buttons[i], red, green, blue);

        if (i === colorAnswerButton) {
            guessColorHeading.innerHTML = `RGB: (${red}, ${green}, ${blue})`;
        }

        buttons[i].addEventListener('click', function () {
            // console.log(`button ` + i + ` is clicked`);
            // console.log(`this is ` + this);
            if (this === buttons[colorAnswerButton]) {
                answerMessage.innerHTML = "Correct!";
            } else {
                answerMessage.innerHTML = "Wrong answer! Guess again!";
            }
        });
    };
}

startGame();

document.getElementById('resetButton').addEventListener('click', startGame);
