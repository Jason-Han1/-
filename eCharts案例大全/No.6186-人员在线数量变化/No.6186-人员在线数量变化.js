
let data = [["a",20],["b",23],["c",10],["d",16],["e",24],["f",9],["g",10]]

function renderItem(param, api) {
    var bandWidth = api.size([0, 0])[0] * 0.85;
    var point = api.coord([api.value(0), api.value(1)]);

    return {
        type: 'line',
        shape: {
            x1: point[0] - bandWidth / 2,
            x2: point[0] + bandWidth / 2,
            y1: point[1],
            y2: point[1]
        },
        style: api.style({
            fill: null,
            stroke: api.visual('color'),
            lineWidth: 2
        })
    };
}

option = {
    tooltip: {
    },
    title: {
        text: '人员在线数量变化',
        subtext: '曾志',
        left: 'center'
    },
    grid: {
        bottom: 70,
        top: 120,
    },
    xAxis: {
        data: ["a","b","c","d","e","f","g"]
    },
    yAxis: {
        boundaryGap: [0, '20%']
    },
    series: [{
        type: 'custom',
        name: 'Average',
        renderItem: renderItem,
        encode: {
            x: 0,
            y: 1
        },
        data
    }, ]
};



