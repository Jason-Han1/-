var data1 = [];
var data2 = [];
var data3 = [];

const bg = 255;
const clr = 90;
const N = 10;
for (let i = 0; i < 1; i += 0.02) {
    const a = i;
    let currentClr = bg;
    for (let n = 0; n < N; n++) {
        currentClr = currentClr * (1 - a) + clr * a
    }
    data1.push([i, currentClr]);
}

for (let i = 0; i < 1; i += 0.02) {
    const a = 1 - Math.pow(1 - i, 1 / N);
    let currentClr = bg;
    for (let n = 0; n < N; n++) {
        currentClr = currentClr * (1 - a) + clr * a
    }
    data2.push([i, currentClr]);
}

for (let i = 0; i < 1; i += 0.02) {
    const a = i;
    data3.push([i, bg * (1 - a) + clr * a])
}

option = {
    legend: {},
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: 'Alpha 叠加',
        type: 'line',
        data: data1
    }, {
        name: 'Alpha 拟合后叠加',
        type: 'line',
        data: data2
    }, {
        name: '原 Alpha',
        type: 'line',
        data: data3
    }]
};