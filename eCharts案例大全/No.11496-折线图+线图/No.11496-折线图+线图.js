let chartData = [{
        'Sun': 20
    },
    {
        'Mon': 30
    },
    {
        'Tue': 36
    },
    {
        'Wed': 50
    },
    {
        'Thu': 63
    },
    {
        'Fri': 70
    },
    {
        'Sat': 85
    }
];
let xData = [];
let yData = [];

chartData.map((item, key) => {
    Object.keys(item).forEach(v => {
        yData.push(item[v]);
        xData.push(v);
    });
});

let linesData = [];
let lineAllArr = [];
let coordsArr = [];

for (var i = 0; i < chartData.length; i++) {
    Object.keys(chartData[i]).forEach(v => {
        lineAllArr.push([v, chartData[i][v]]);
    });
}

for (var i = 0; i < chartData.length - 1; i++) {
    linesData.push({
        coords: [chartData[i]]
    });
    coordsArr.push([lineAllArr[i], lineAllArr[i + 1]]);
}

for (var i = 0; i < linesData.length; i++) {
    linesData[i].coords = coordsArr[i];
}
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: xData
    },
    yAxis: {},
    series: [{
            type: 'line',
            data: yData
        },
        {
            coordinateSystem: 'cartesian2d',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 3,
                trailLength: 0.2,
                symbolSize: 10,
                symbol: 'circle',
                loop: true
            },
            lineStyle: {
                normal: {
                    color: '#c23531',
                    opacity: 0,
                    curveness: 0
                }
            },
            data: linesData
        }
    ]
};