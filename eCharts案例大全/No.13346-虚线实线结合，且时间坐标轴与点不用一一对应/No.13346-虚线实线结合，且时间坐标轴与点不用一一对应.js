let data = [{
    name: '2017-08-01 ~ 2018-08-31',
    value: ['2017-08-15', 12]
}, {
    name: '2017-09-01 ~ 2018-09-30',
    value: ['2017-09-15', 30]
}, {
    name: '2017-10-01 ~ 2018-10-20',
    value: ['2017-10-10', 70]
}, {
    name: '2017-10-21 ~ 2018-11-15',
    value: ['2017-11-02', 70]
}, {
    name: '2017-11-16 ~ 2018-11-30',
    value: ['2017-11-23', 80]
}, {
    name: '2017-12-01 ~ 2018-12-31',
    value: ['2017-12-15', 60]
}, {
    name: '2018-01-01 ~ 2018-01-31',
    value: ['2018-01-15', 50]
}, {
    name: '2018-02-01 ~ 2018-02-28',
    value: ['2018-02-15', 30]
}, {
    name: '2018-03-01 ~ 2018-03-31',
    value: ['2018-03-15', 90]
}, {
    name: '2018-04-01 ~ 2018-04-30',
    value: ['2018-04-15', 30]
}, {
    name: '2018-05-01 ~ 2018-05-31',
    value: ['2018-05-15', 85]
}, {
    name: '2018-06-01 ~ 2018-06-15',
    value: ['2018-06-08', 80]
}, {
    name: '2018-06-16 ~ 2018-06-30',
    value: ['2018-06-23', 100]
}, {
    name: '2018-07-01 ~ 2018-07-04',
    value: ['2018-07-02', 110]
}, {
    name: '2018-07-05 ~ 2018-07-21',
    value: ['2018-07-18', 88]
}];

let chartData = {
    xAxisNames: ['2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07'],
    seriesData: data,
    axisLabelFormatter: '{value}w',
    name: '费用',
    seriesDash: true,
    dashStart: 10
};
let seriesData = [];
if (chartData.seriesDash) {
    let len = chartData.seriesData.length;
    let minusArr = [];
    for (let i = 0; i < len; i++) {
        minusArr.push({
            name: '-',
            value: []
        });
    }
    seriesData = [{
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            data: (chartData.seriesData.slice(0, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            data: (chartData.seriesData.slice(0, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#8fc3f7',
                    lineStyle: {
                        width: 2,
                        type: 'dashed'
                    }
                }
            },
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, len))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'dotted'
                    }
                }
            },
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, len))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        }
    ];
} else {
    seriesData = [{
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            data: chartData.seriesData
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            data: chartData.seriesData
        }
    ];
}

option = {
    color: '#2d8cf0',
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: 20,
        right: 30,
        bottom: 20,
        top: 20,
        containLabel: true
    },
    xAxis: [{
        type: 'time',
        min: '2017-08-01',
        max: '2018-07-31',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            triggerTooltip: true
        }
    }, {
        type: 'category',
        position: 'bottom',
        data: chartData.xAxisNames,
        axisPointer: {
            triggerTooltip: false
        },
        axisLabel: {
            color: '#666'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#999'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel: {
            formatter: '{value} w'
        }
    },
    series: seriesData
};