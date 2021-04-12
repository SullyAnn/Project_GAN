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
    url: "https://brutalism-generator-f195936d.hosted-models.runwayml.cloud/v1/",
    token: "5Wje5Ba1bM8sVUAClbxkhg==",
  });

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
      

}


// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()

    const z = []
    for (let i = 0; i < 512; i++) {
        z[i] = random(-0.5, 0.5)
    }
    const inputs = {
        "z": z,
        "truncation": 0.8,
    };
    ai.query(inputs).then(outputs => {
        const { image } = outputs;
        img = createImg(image)
        img.hide()
    });
}

function windowResized() {
    p6_ResizeCanvas()
}