coordinateX = 0
coordinateY = 0

function preload(){
   lipstick_filter = loadImage(' https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick_filter,coordinateX-20,coordinateY+20,40,20);
}

function save(){
    save('LipstickFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        coordinateX = results[0].pose.nose.x;
        coordinateY = results[0].pose.nose.y;
        console.log("nose x = " + coordinateX);
        console.log("nose y = " + coordinateY);
    }
}