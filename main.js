var x = 0;
var y = 0;
var drawCirc = "";
var drawRect = ""; 

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Mic is listening, Please speak . . . ";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Your speech been recognised as : " + content;

    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "drawing circle";
        drawCirc = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "drawing rectangle";
        drawRect = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (drawCirc == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle Drawn";
        drawCirc = "";
    }

    if (drawRect == "set") {
        width = Math.floor(Math.random() * 100);
        height = Math.floor(Math.random() * 100);
        rect(x, y, width, height);
        document.getElementById("status").innerHTML = "Rectangle Drawn";
        drawRect = "";
    }
}