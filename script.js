var array = [];
var i = 0;

function setup() {
    createCanvas(550, 510);
    fillArray();
}

function fillArray() {
    for (let index = 0; index < (500 / 4); index++) {
        array[index] = Math.floor(Math.random() * (500) + 4);
    }
}

function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while (d2 - d < ms);
}

function Sort() {
    let istheremin = false;
    let min = 0;
    let minindex = 0;
    if (i < array.length) {
        min = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let next = array[j];
            if (min > next) {
                min = next;
                minindex = j;
                istheremin = true;
            }
        }
        if (istheremin) {
            array[minindex] = array[i];
            array[i] = min;
        }
    }
    i++;
    return minindex;
}

function visualize(mnindex) {
    let b = 20;
    for (let k = 0; k < array.length; k++) {
        if (k === mnindex) {
            stroke('green');
        } else if (k === i) {
            stroke('red');
        }
        line(b, 0, b, array[k]);
        b += 4;
        stroke(0);
    }
}

function draw() {
    background(220);
    visualize(Sort());
    wait(100);
}