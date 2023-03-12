var data =   [
    [0, 35, 60, 67],
    [1, 53, 79, 38],
    [2, 50, 89,47]
]

var data1 =   [
    [0, 150,179, 45],
    [1, 313, 219, 89],
    [2, 201, 191,147]
]

var data2 =   [
    [0, 255,197, 145],
    [1, 315, 119, 189],
    [2, 255, 231,127]
]

function renderItem(params, api) {
    var xValue = api.value(0);
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        count: currentSeriesIndices.length - 1
    });
    var points = [];
    var customSeries = option.series.filter(v => v.type === 'custom')
    console.log(customSeries)
    for (var i = 0; i < currentSeriesIndices.length; i++) {
        var seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex && option.series[seriesIndex].type ==='bar') {
            var point = api.coord([xValue, api.value(seriesIndex + 1)]);
            point[0] += barLayout[i].offsetCenter +  (customSeries.length - 1) *i * ((barLayout[i-1]||{}).width || 0) / 2;
            console.log()
            points.push(point);
        }
    }
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });
    return {
        type: 'polyline',
        shape: {
            points: points
        },
        style: style
    };
}
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue']
    },
    yAxis: [{},
        {}
    ],
    series: [{
            type: 'bar',
            data: [220, 182, 191]
        },
        {
            type: 'bar',
            data: [220, 182, 191]
        },
        {
            type: 'bar',
            data: [120, 282, 291]
        },
        {
            type: 'custom',
            name: 'trend',
            yAxisIndex: 1,
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    borderWidth: 2
                }
            },
            encode: {
                x: 0,
                y: [1, 2, 3]
            },
            data: data,
            z: 100
        },
                {
            type: 'custom',
            name: 'trend1',
            yAxisIndex: 1,
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    borderWidth: 2
                }
            },
            encode: {
                x: 0,
                y: [1, 2, 3]
            },
            data: data1,
            z: 100
        },
         {
            type: 'custom',
            name: 'trend2',
            yAxisIndex: 1,
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    borderWidth: 2
                }
            },
            encode: {
                x: 0,
                y: [1, 2, 3]
            },
            data: data2,
            z: 100
        }
    ]
};