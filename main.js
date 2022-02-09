prediction_1 ="";


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera =document.getElementById("camera");

Webcam.attach('#camera');

function screenshot() {
    Webcam.snap(function(data_url) {
document.getElementById("result").innerHTML ='<img id="captured" src="'+data_url+'">';
    });
}

console.log('ml5 is loaded',ml5.version);

classifer =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_7tV9TihT/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded");
}



function check(){
    snap= document.getElementById("captured")
    classifer.classify(snap,gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML =results[0].label;
       
        prediction_1 =results[0].label;
        speak_this="";
       
        if (results[0].label == "Stop")
        {
            document.getElementById("update_emoji").innerHTML ="&#x1F590;"
            document.getElementById("quote").innerHTML ="Wow! Amazing Gesture of Stop"
           speak_this ="Wow! Amazing Gesture of Stop";
        }
        if (results[0].label == "Crossed fingers")
        {
document.getElementById("update_emoji").innerHTML ="&#x1F91E;"
document.getElementById("quote").innerHTML ="Wow! It is a nice move for Your Crossed figure"
speak_this ="Wow! It is a nice move for Your Crossed figure";

        }
        if (results[0].label == "Thumbs Up")
        {
document.getElementById("update_emoji").innerHTML ="&#x1F44D;"
document.getElementById("quote").innerHTML ="All the best"
speak_this ="All the best";

        }
        if (results[0].label == "ok")
        {
document.getElementById("update_emoji").innerHTML ="&#x1F44C;"
document.getElementById("quote").innerHTML ="This is looking amazing"
speak_this ="This is looking amazing";
        }
        speak();
    }
}

function speak(){
    var synth =window.speechSynthesis;
    speak_data_1 =speak_this;
    var speech =new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(speech);
    
}