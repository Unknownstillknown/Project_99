var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");
function start()
{
Textbox.innerHTML ="";
recognition.start();
}

recognition.onresult = function(event) {

console.log(event)

var Content = event.result[0][0].transcript;
Textbox.innerHTML = Content;
console.log(Content);
    speak();

document.getElementById("textbox").innerHTML = content;
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");