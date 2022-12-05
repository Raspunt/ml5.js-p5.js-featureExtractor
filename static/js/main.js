
let video;

let size = [800,800]
let model_trainer = new modelTrainer()



function setup(){
    let canvas = createCanvas(size[0],size[1]+50);
    canvas.parent('p5_place')
    
    background(0);

    video = createCapture(VIDEO)
    video.hide()


    model_trainer.StartLoadModel(video)

  

}


function draw() {
    image(video,0,0,size[0],size[1]);




}



