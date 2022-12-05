
let featureExtractor;
let classifier;
let predictor ;



class modelTrainer{


    StartLoadModel(){
        featureExtractor = ml5.featureExtractor('MobileNet', this.ModelLoaded);
        classifier = featureExtractor.classification(video, this.VideoReady);
    }


    ModelLoaded(){
        console.log('model is ready');
    }

    VideoReady(){
        console.log('video is ready');
    }




}