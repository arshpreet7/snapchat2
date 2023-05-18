nose_x = 0;
nose_y =0;
function preload()
{
clown_nose = loadImage('https://i.postimg.cc/4dg4VfTw/i-Stock-1133779957-removebg-preview-1.png');
}
function setup()
{
canvas = createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.size(500, 500);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}   
function modelLoaded()
{
    console.log("PoseNet is initialized");
}
function draw()
{
    image(video ,0 ,0 ,500 ,500);
 
    image(clown_nose, nose_x, nose_y, 70, 40)
}
function gotPoses(results)
{
    if (results.length > 0) 
    {
        console.log(results);
        nose_x = results[0].pose.nose.x -30 ;
        nose_y = results[0].pose.nose.y + 5 ;
        console.log("nose X = " + nose_x);
        console.log("nose y = " + nose_y); 
    }
}
function take_snapshot()
{
save('moustacheonme🥸🥸.png');

}