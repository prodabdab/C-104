Webcam.set({
width:300,
height:250,
Image_format:"png",png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function Capture() {
    Webcam.snap(function (data_url){
     document.getElementById("output").innerHTML='<img id="img1" src="'+data_url+'">';
    });
};

console.log('ml5 version:  ',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-ZG9hi3aD/model.json',modelLoaded);

function modelLoaded() {
    console.log('model has been done');
}