song = "";
song2 = "";

function preload(){
   song = loadSound("Dancin.mp3");
   song2 = loadSound("Counting-Stars.mp3");
}

function setup(){
    canvas = createcanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}
