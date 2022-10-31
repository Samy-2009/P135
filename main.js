objects = [];
status = "";

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
    if(status !=""){
        objectDetector.detect(video, gotResult);
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Estado: Objeto Detectado";

            fill("#FF0000");
                percent = floor(objects[i].confidence*100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            if (objects [i].label == nobjeto){
                video.stop();
                objectDetector.detect(gotResult);
                document.getElementById("status").innerHTML = "Se detecto el "+ nobjeto;
            }else{
                document.getElementById("status").innerHTML = "No se detecto el " + nobjeto;
            }
        }

    }
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
