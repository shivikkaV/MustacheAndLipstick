function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);canvas.center();
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLodel(){
    console.log('PoseNet is initialized');
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('myImage.png');
}

function lipstick(){
    window.location = "lipstick.html";
}