function setup(){
    canvas = createCanvas(300,200);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,200);
    
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado: Detectando objetos";
    nobjeto = document.getElementById("nobjeto").value;
}

function modelLoaded(){
    console.log("Modelo cargado!");
    status = true;
}

function draw(){
    image(video, 0, 0, 300, 200);
}
