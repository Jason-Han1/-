var xdata = [];
for (var i = 0; i <= 96; i++) {
    xdata.push(i / 4);
}

option = {
    backgroundColor: '#2B2B2B',
    tooltip: {
        trigger: 'axis'
    },
    legend: {

        data: ['累计值', '当前值'],
        textStyle: {
            color: '#FFF',
            fontSize: 20
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#FFF',
                fontSize: 20
            }
        },
        axisLine: {
            lineStyle: {
                color: '#FFF'
            }
        },

        data: xdata
    }, {
        type: 'value',
        max: 96,
        min: 0,
        splitLine: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#FFF',
                fontSize: 20
            }
        },
        boundaryGap: false,
        min: 229,
        max: 234,
        axisLine: {
            lineStyle: {
                color: '#FFF'
            }
        },
        splitLine: {
            show: false
        }
    }, {
        show: true,
        type: 'category',
        data: [230, 231, 232, 233, 234],
        splitLine: {
            show: false
        },
    }],
    series: [{
        name: '当前值',
        type: 'line',
        symbol: 'roundRect',
        symbolSize: 10,
        smooth: true,
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: '#FFD700'
            }
        },
        data: [],
        lineStyle: {
            normal: {
                color: '#FFD700',
                width: 3
            }
        }
    }, {
        name: '累计值',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbol: 'roundRect',
        symbolSize: 1,
        itemStyle: {
            normal: {
                color: '#40E0D0'
            }
        },
        lineStyle: {
            normal: {
                width: 2
            }
        },
        data: [0, 0, 0, 0, 0],

    }]
};

var index = 0;
setInterval(function() {
    if (index <= 96) {
        var val = Math.random().toFixed(2) * 3 + 230;
        option.series[0].data.push(val);
        if (229.00 <= val && val <= 230.00) {
            option.series[1].data[0]++;
        } else if (230 < val && val <= 231) {
            option.series[1].data[1]++;
        } else if (231 < val && val <= 232) {
            option.series[1].data[2]++;
        } else if (232 < val && val <= 233) {
            option.series[1].data[3]++;
        } else if (233 < val && val <= 234) {
            option.series[1].data[4]++;
        }
    } else {
        option.series[0].data = [];
        option.series[1].data = [0, 0, 0, 0, 0];
        index = 0;
    }
    index++;
    myChart.setOption(option, true);
}, 1000);