// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {

    Download_Image: () => save(),
}

gui.add(params, "Download_Image")

let img: p5.Element

const ai = new rw.HostedModel({
    url: "https://colorful-clouds-229c190e.hosted-models.runwayml.cloud/v1/",
    token: "b82QGM0T7U75VEKMCCE5tQ==",
  });

let frameNB =0;

// -------------------
//       Drawing
// -------------------

function draw() {
    background('white');
   
    if (img)
    image(img, 0, 0, width, height)
}
    
      //// You can use the info() method to see what type of input object the model expects
      // model.info().then(info => console.log(info));
      


// -------------------
//    Initialization
// -------------------

const z = []

function make_request(){  
    const inputs = {
        "z": z,
        "truncation": 0.8,
    };
    ai.query(inputs).then(outputs => {
        const { image } = outputs;
        img = createImg(image)
        img.hide()
        z[0] += 0.5;

       // p5.prototype.downloadFile(image, frameNB.toString(), "png")
        //frameNB++;
        make_request();
    });

}

function setup() {
    p6_CreateCanvas()
    for (let i = 0; i < 512; i++) {
        z[i] = random(-0.5, 0.5);
    }
    make_request();


}

function windowResized() {
    p6_ResizeCanvas()
}