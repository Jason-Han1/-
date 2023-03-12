var count = 360;
var data = [];
for (let i = 0; i < count; i++) {
    data.push({
        value: [1, i]
    });
}

let udata = [25, 25, 5];
let colors = ['#fff', 'blue', 'red'];

function getPieces(udata, colors) {
    let sum = udata.reduce((s, n) => s + n);
    let ddata = udata.map(d => parseInt(count * d / sum));
    let pp = [];
    for (let i = 0; i < ddata.length; i++) {
        const arr = ddata.slice(0, i);
        const index = arr.length > 0 ? arr.reduce((s, n) => s + n) : 0;
        for (let j = 0; j < ddata[i]; j++) {
            pp.push({
                gt: index + j,
                lte: index + j + 1,
                color: colors[i],
                colorAlpha: 1 * j / ddata[i] + ''
            });
        }
    }
    return pp;
}


option = {
    legend: {
        data: ['a']
    },
    visualMap: [{
        show: false,
        dimension: 1,
        pieces: getPieces(udata, colors),
    }],
    series: [{
        type: 'pie',
        radius: ['55%', '75%'],
        center: ['50%', '50%'],
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }]
}