// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {

    Download_Image: () => save(),
}

gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background('white');
   
}


// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}