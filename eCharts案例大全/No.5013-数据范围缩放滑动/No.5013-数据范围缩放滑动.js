var data1 = [];
var data2 = [];
var data3 = [];

var random = function(max) {
    return (Math.random() * max).toFixed(3);
};

for (var i = 0; i < 5; i++) {
    data1.push([random(15), random(10), random(1)]);
    data2.push([random(10), random(10), random(1)]);
    data3.push([random(15), random(10), random(1)]);
}

option = {
    animation: false,
    legend: {},
    tooltip: {},
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        show: false
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 50
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 0,
            end: 50
        },
    ],
    series: [{
            name: 'scatter',
            type: 'bar',
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function(val) {
                return val[2] * 40;
            },
            data: data1
        },
        {
            name: 'scatter2',
            type: 'bar',
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function(val) {
                return val[2] * 40;
            },
            data: data2
        },
        {
            name: 'scatter3',
            type: 'bar',
            itemStyle: {
                normal: {
                    opacity: 0.8,
                }
            },
            symbolSize: function(val) {
                return val[2] * 40;
            },
            data: data3
        }
    ]
}