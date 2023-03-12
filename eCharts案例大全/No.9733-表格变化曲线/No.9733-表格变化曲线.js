var data = {
    title: ['总计', '12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07', '12-08', '12-09'],
    plan_production: [500, 300, 490, 333, 346, 777, 888, 864, 789, 765],
    actual_production: [300, 400, 500, 300, 400, 500, 300, 400, 500, 500],
    attainment_rate: [60, 80, 90, 60, 70, 80, 90, 60, 70, 90],
    productivity: [30, 45, 88, 100, 110, 70, 80, 90, 100, 100]
};

for (var pr in data) {
    data[pr] = data[pr].slice(1, -1);
}

function getTableLine(num) {
    var width = $('#chart-panel').width();
    var list = [];
    var bottom = 112;
    var height = 40;
    list.push({
        type: 'line',
        bottom: 32,
        left: 15,
        style: {
            fill: '#333'
        },
        shape: {
            x1: 0,
            y1: 80,
            x2: 0,
            y2: 0
        }
    });
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: 80,
            style: {
                fill: '#333'
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: width * 0.92,
                y2: 0
            }
        });
    }
    return list;
}
var lineList = getTableLine(3);

option = {
    title: [{
        text: '德胜苑站点综合指数变化曲线',
        left: 'center',
        textStyle: {
            lineHeight: 20,
            fontSize: 25,
        },
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        left: '25',
        bottom: '33',
        orient:'vertical',
        textStyle: {
            lineHeight: '30',
        },
        data: ['达成率', '生产效率']
    },
    grid: {
        bottom: 160,
        left: 120,
        right: 80
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: data.title,
        axisTick: {
            length: 128
        },
        axisLabel: {
            formatter: function(value, index) {
                return '{table|' + value +
                    '}\n{table|' + data.attainment_rate[index] +
                    '%}\n{table|' + data.productivity[index] + '%}';
            },
            rich: {
                table: {
                    lineHeight: 39,
                    align: 'center'
                }
            }
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        name: '综合指数',
        splitLine: {
            show: true
        },
        // axisLabel: {
        //     formatter: '{value} %'
        // }
    }],
    series: [{
        name: '达成率',
        type: 'line',
        symbol:'rect',
        symbolSize:'8',
        data: data.attainment_rate
    }, {
        name: '生产效率',
        type: 'line',
        symbol:'rect',
        symbolSize:'8',
        data: data.productivity,
        itemStyle: {
            normal: {
                color: '#ff975f',
                lineStyle: {
                    width: 3,
                    type: 'dotted',
                }
            }
        }
    }],
    graphic: lineList
};