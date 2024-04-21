function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoded);
}

function modelLoded() {
    console.log('Model Loded!')
}
 
function draw(){
    image(video, 0, 0,300, 300);
}
var previous_result ='';

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        if((results[0].confidence > 0.3) && (previous_result != results[0].
        label)){
            console.log(results);
            previous_result =results[0].label;
            var synth =window.speechSynthesis;
            speak_data ='Object deteced is -'+results[0].lebel;
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);

            document.getElementById("object").innerHTML = results[0].
            label;
            document.getElementById("accuracy").innerHTML = results
            [0].confidence.toFixed(3);
        }
    }
}