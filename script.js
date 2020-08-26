var array = [];

var min = 0;
var minindex = 0;
var istheremin = false;
var i = 0;

for (let index = 0; index < (500 / 4); index++) {
    array[index] = Math.floor(Math.random() * (500) + 4);
}

function setup() {
    createCanvas(550, 510);
}

function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while (d2 - d < ms);
}

function draw() {
    background(220);

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

    /*for (let index = 0; index < 1000; index++) {
        for (let index = 0; index < 1000; index++) {
            for (let index = 0; index < 200; index++) {
            }
        }
    }*/

    wait(100);

    let b = 20;
    for (let k = 0; k < array.length; k++) {
        if (k === minindex) {
            stroke('green');
        } else if (k === i) {
            stroke('red');
        }
        line(b, 0, b, array[k]);
        b += 4;
        stroke(0);
    }
}