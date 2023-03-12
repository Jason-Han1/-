var data1 = [];
var data2 = [];

const alpha = 0.8;
const bg = 255;
const clr = 90;
const n = 10;
let currentClr = bg;
for (let i = 0; i < n; i++) {
    data1.push([i, currentClr]);
    currentClr = currentClr * (1 - alpha) + clr * alpha
}

for (let i = 0; i < n; i++) {
    a = Math.pow(alpha, 1 / i / i / i);
    data2.push([i, bg * (1 - a) + clr * a])
}

option = {
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'line',
        data: data1
    }, {
        type: 'line',
        data: data2
    }]
};