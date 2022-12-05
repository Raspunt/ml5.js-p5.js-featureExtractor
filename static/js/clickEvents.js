



function appendToClassifier(){

    let content_div = createDiv("");
    let center_div = createDiv("").parent(content_div);

    content_div.parent('models')
    content_div.addClass('AppendClass');

    center_div.addClass('main_container_row');

    let inp = createInput('').parent(center_div);
    let btn = createButton('train obj').parent(center_div);

    let countText = createDiv('0').parent(center_div);
    countText.style('width:20px;display:flex;');



    inp.attribute('placeholder', 'set name train object');


    inp.input(()=>{
        btn.html(`train obj: ${inp.value()}`)

    });

    btn.mousePressed(()=>{
        classifier.addImage(inp.value())
        
        countText.html(parseInt(countText.html()) + 1)

    });

}


function TrainButton(){
    classifier.train(whileTraning)
}


function whileTraning(loss) {
    console.log(loss);
}


