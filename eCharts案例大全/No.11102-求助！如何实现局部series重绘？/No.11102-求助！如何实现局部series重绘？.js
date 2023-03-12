var hours = [];
var days = [];
for (var i = 0; i < 128; i++) {
    hours.push(String(i))
}

var data = [];
for (var i = 0; i < 128; i++) {
    for (var j = 0; j < 128; j++) {
        data.push([i, j, Math.random()])
    }
}

var data2 = [
    [1, 2, 5],
    [2, 2, 6],
    [3, 3, 7]
]
var count = 0

data = data.map(function(item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        y: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: [{
        min: 0,
        max: 1,
        precision: 0.1,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        seriesIndex: [0],
        show: true
    }, {
        left: 'right',
        top: '10%',
        dimension: 2,
        min: 5,
        max: 8,
        itemWidth: 30,
        itemHeight: 120,
        calculable: false,
        show: false,
        precision: 0.1,
        inRange: {
            symbolSize: [20, 40]
        },
        seriIndex: [1]
    }],
    series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            zlevel: 2
        },
        {
            name: 'before',
            type: 'scatter',
            color: 'red',
            data: data2,
            zlevel: 3
        },
    ]
};


setInterval(function() {
    for (let i = 0; i < 3; i++) {
        data2[i][0] += (count++ % 2) * 2 - 1
    }

    myChart.setOption({
        series: [{
            data: data,
        }, {
            data: data2,
        }]
    });
}, 1000);