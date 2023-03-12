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
    var list = [];
    var bottom = 122;
    var height = 20;
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
                x2: 3200,
                y2: 0
            }

        });
    }
    return list;
}
var lineList = getTableLine(5);


option = {
    title: [{
        text: ' \n计划数量\n实际产出\n达成率\n生产效率',
        bottom: 72,
        left: 10,
        textStyle: {
            lineHeight: 20,
            fontSize: 13,
            fontWeight: 'normal',
            formatter: function(value) {
                return '{table|' + value + '}';
            },
            rich: {
                table: {
                    align: 'center'
                }
            }
        }
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
        data: ['计划数量', '实际产出', '达成率', '生产效率']
    },
    grid: {
        bottom: 150,
        left: 80,
        right: 80
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: true,
        start: 0,
        end: 50,
        maxSpan: 80
        // zoomLock: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: data.title,
        axisTick: {
            length: 108
        },
        axisLabel: {
            formatter: function(value, index) {
                return '{table|' + value +
                    '}\n{table|' + data.plan_production[index] +
                    '}\n{table|' + data.actual_production[index] +
                    '}\n{table|' + data.attainment_rate[index] +
                    '%}\n{table|' + data.productivity[index] + '%}';
            },
            rich: {
                table: {
                    lineHeight: 20,
                    align: 'center'
                }
            }
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        minInterval: 1,
        name: '数量',
        splitLine: {
            show: false
        },
        min: function(v) {
            return Math.max((v.min - 10), 0);
        }
    }, {
        type: 'value',
        scale: true,
        name: '百分比',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value} %'
        }
    }],
    series: [{
        name: '计划数量',
        type: 'bar',
        label: {
            show: true,
            position: 'top'
        },
        yAxisIndex: 0,
        data: data.plan_production
    }, {
        name: '实际产出',
        type: 'bar',
        label: {
            show: true,
            position: 'top'
        },
        yAxisIndex: 0,
        data: data.actual_production
    }, {
        name: '达成率',
        type: 'line',
        label: {
            show: true,
            position: 'top',
            formatter: '{c} %'
        },
        yAxisIndex: 1,
        data: data.attainment_rate
    }, {
        name: '生产效率',
        type: 'line',
        label: {
            show: true,
            position: 'top',
            formatter: '{c} %'
        },
        yAxisIndex: 1,
        data: data.productivity
    }],
    graphic: lineList
};